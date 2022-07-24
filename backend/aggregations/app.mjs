import { app, query, errorHandler } from "./helpers/mu/index.mjs";
import sparqljs from "sparqljs";
import fs from "fs";
import { DataFactory } from "rdf-data-factory";

const parser = new sparqljs.Parser();
const generator = new sparqljs.Generator();
const nodeFactory = new DataFactory();

// TYPES NEEDED FOR NON-STRING LITERALS
const integerType = nodeFactory.namedNode(
  "http://www.w3.org/2001/XMLSchema#integer"
);
const floatType = nodeFactory.namedNode(
  "http://www.w3.org/2001/XMLSchema#decimal"
);

const municipalities = JSON.parse(
  fs.readFileSync("./data/municipalities.json")
);

/**
 * Modifies the query object to fill in the missing variables with literals
 * @param {*} query: the query object
 * @param {*} positions: list of tuples (row, section) to fill in
 * @param {*} value: the value to verify
 */
function replaceVariableIfExists(query, positions, value) {
  if (!value) return false;

  let datatype;
  if (typeof value == "number") {
    datatype = value % 1 === 0 ? integerType : floatType;
  }

  const literal = nodeFactory.literal(value.toString(), datatype);

  for (const position of positions) {
    query.where[0].triples[position[0]][position[1]] = literal;
  }

  return true;
}

app.get("/", function (_, res) {
  res.send('"Welcome to LBLOD\'s aggregations API"');
});

app.get("/revenue-query", function (req, res) {
  // By default we'll group by the variables not provided
  const defaultGroupBy = new Set([
    "marcode",
    "category",
    "municipality",
    "province",
    "year",
  ]);

  // MAR codes are stored without the REK prefix
  if (req.query.marcode && req.query.marcode.startsWith("REK")) {
    req.query.marcode = req.query.marcode.slice(3);
  }

  const page = req.query.page || 0;
  const pageSize = req.query.pageSize || 100;
  const offset = page * pageSize;

  const defaultQuery = `
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX lynx: <http://dev.lynx.lblod.info/vocabulary#>
    PREFIX mu: <http://mu.semte.ch/vocabularies/ext/>
  
    SELECT (sum(?amount) as ?totalAmount)
    WHERE {
      ?r a lynx:TaxReport;
        lynx:totalAmount ?amount;
        lynx:hasTaxType ?_marcode;
        lynx:inMunicipality ?_municipality;
        lynx:year ?year.
      
      ?_marcode skos:notation ?marcode;
        lynx:fromCategory ?_category.
      ?_municipality mu:inProvincie ?_province.

      ?_municipality skos:prefLabel ?municipality.
      ?_category skos:prefLabel ?category.
      ?_province skos:prefLabel ?province.
    }`;

  const parsedQuery = parser.parse(defaultQuery);
  parsedQuery.limit = pageSize;
  parsedQuery.offset = offset;

  // Represents the different parameters and their positions in the query
  const paramsSchema = {
    year: [[4, "object"]],
    marcode: [[5, "object"]],
    municipality: [[8, "object"]],
    category: [[9, "object"]],
    province: [[10, "object"]],
  };

  // We fill in the query with the values from the request
  for (const [key, positions] of Object.entries(paramsSchema)) {
    if (replaceVariableIfExists(parsedQuery, positions, req.query[key])) {
      defaultGroupBy.delete(key);
    }
  }

  const groupBy = req.query.groupBy
    ? req.query.groupBy.split(",")
    : Array.from(defaultGroupBy);
  const variables = groupBy.map((v) => nodeFactory.variable(v));
  // We add the group by variables to the select
  parsedQuery.variables.unshift(...variables);
  // They are also added to the group by expression
  parsedQuery.group = variables.map((v) => ({ expression: v }));

  const newQuery = generator.stringify(parsedQuery);

  query(newQuery)
    .then(function (response) {
      res.send(
        JSON.stringify({
          results: response.results.bindings,
        })
      );
    })
    .catch(function (err) {
      res.send(JSON.stringify(err));
    });
});

app.get("/decisions-query", function (req, res) {
  // Use current year as default
  const year = req.query.year || new Date().getFullYear();
  const municipality = req.query.municipality;

  if (typeof year !== "number" && year.length != 4) {
    res.send(JSON.stringify({ detail: "Invalid year" }));
  }

  if (!(municipality in municipalities)) {
    res.send(JSON.stringify({ detail: "Invalid municipality" }));
  }

  const defaultQuery = `
  PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

  select (count(?s) as ?count) {
    ?s a <http://rdf.myexperiment.org/ontologies/base/Submission>;
      <http://www.w3.org/ns/prov#generated> ?formdata;
      <http://purl.org/pav/createdBy> ?bestuureenheid.
  
    # ONLY SHOW THOSE AFFECTING THE INTERESTING AREA
    ?bestuureenheid <http://data.vlaanderen.be/ns/besluit#werkingsgebied> ?_werkingsgebied.
  
    ?_werkingsgebied <http://www.w3.org/2000/01/rdf-schema#label> ?werkingsgebied.
  
    FILTER(?werkingsgebied = "MUNICIPALITY" || ?werkingsgebied = "PROVINCE") 
  
    # ONLY SHOW THOSE IN THE SPECIFIED TIMEFRAME
    ?formdata <http://mu.semte.ch/vocabularies/ext/sessionStartedAtTime> ?datetime.
  
    FILTER (?datetime < xsd:dateTime("END_YEAR") && ?datetime > xsd:dateTime("START_YEAR"))
  }`;

  const parsedQuery = parser.parse(defaultQuery);

  parsedQuery.where[1].expression.args[0].args[1].value = municipality;
  parsedQuery.where[1].expression.args[1].args[1].value =
    municipalities[municipality];

  parsedQuery.where[3].expression.args[0].args[1].args[0].value = `${year}-12-31T23:59:59Z`;
  parsedQuery.where[3].expression.args[1].args[1].args[0].value = `${year}-01-01T00:00:00Z`;

  const newQuery = generator.stringify(parsedQuery);

  query(newQuery)
    .then(function (response) {
      res.send(
        JSON.stringify({
          results: response.results.bindings,
        })
      );
    })
    .catch(function (err) {
      res.send(JSON.stringify(err));
    });
});

app.get("/municipalities", function (_, res) {
  const q = `
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX mu: <http://mu.semte.ch/vocabularies/ext/>
    PREFIX besluit: <http://data.vlaanderen.be/ns/besluit#>

    SELECT DISTINCT ?municipality ?province
    WHERE {
      ?_municipality mu:inProvincie ?_province;
        besluit:classificatie ?classificatie;
        skos:prefLabel ?municipality .
        
      ?classificatie skos:prefLabel "Gemeente" .

      ?_province skos:prefLabel ?province.
    }`;

  query(q)
    .then(function (response) {
      res.send(
        JSON.stringify({
          results: response.results.bindings,
        })
      );
    })
    .catch(function (err) {
      res.send(JSON.stringify(err));
    });
});

app.use(errorHandler);
