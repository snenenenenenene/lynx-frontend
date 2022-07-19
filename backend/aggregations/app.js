import { app, query, errorHandler } from "mu";
import sparqljs from "sparqljs";
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

app.get("/", function (req, res) {
  res.send("Hello mu-javascript-template");
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

  const defaultQuery = `
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX lynx: <http://dev.lynx.lblod.info/vocabulary#>
    PREFIX mu: <http://mu.semte.ch/vocabularies/ext/>
  
    SELECT (sum(?amount) as ?totalAmount)
    WHERE {
      ?r a lynx:TaxReport;
        lynx:amount ?amount;
        lynx:hasTaxType ?marcode;
        lynx:inMunicipality ?_municipality;
        lynx:year ?year.
      
      ?marcode lynx:fromCategory ?_category.
      ?_municipality mu:inProvincie ?_province.

      ?_municipality skos:prefLabel ?municipality.
      ?_category skos:prefLabel ?category.
      ?_province skos:prefLabel ?province.
    }`;

  const parsedQuery = parser.parse(defaultQuery);

  // TODO: Add support for municipality and province once DBs merged
  // Represents the different parameters and their positions in the query
  const paramsSchema = {
    marcode: [
      [2, "object"],
      [5, "subject"],
    ],
    year: [[4, "object"]],
    municipality: [[7, "subject"]],
    category: [[8, "object"]],
    province: [[9, "subject"]],
  };

  // We fill in the query with the values from the request
  for (const [key, positions] of Object.entries(paramsSchema)) {
    if (replaceVariableIfExists(parsedQuery, positions, req.query[key])) {
      defaultGroupBy.delete(key);
    }
  }

  
  const groupBy = req.query.groupBy ? req.query.groupBy.split(",") : Array.from(defaultGroupBy);
  const variables = groupBy.map((v) => nodeFactory.variable(v));
  // We add the group by variables to the select
  parsedQuery.variables.unshift(...variables);
  // They are also added to the group by expression
  parsedQuery.group = variables.map((v) => ({ expression: v }));

  const newQuery = generator.stringify(parsedQuery);

  query(newQuery)
    .then(function (response) {
      res.send(JSON.stringify(response));
    })
    .catch(function (err) {
      res.send("Oops something went wrong: " + JSON.stringify(err));
    });
});

app.use(errorHandler);
