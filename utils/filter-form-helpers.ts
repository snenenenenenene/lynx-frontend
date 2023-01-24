import { Namespace, NamedNode, serialize } from 'rdflib';
import fetch from 'fetch';

export const RDF = Namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#');
export const FORM = Namespace('http://lblod.data.gift/vocabularies/forms/');
export const SH = Namespace('http://www.w3.org/ns/shacl#');
export const SEARCH = Namespace(
  'http://redpencil.data.gift/vocabularies/search-queries/'
);

export const TEMP_SOURCE_NODE = new NamedNode(
  'http://frontend-public-decisions/temp-source-node'
);

export const FORM_GRAPHS = {
  formGraph: new NamedNode('http://data.lblod.info/form'),
  metaGraph: new NamedNode('http://data.lblod.info/metagraph'),
  sourceGraph: new NamedNode(`http://data.lblod.info/sourcegraph`),
};

// API CALLS

export async function retrieveFormData(url, store) {
  let response = await fetch(url, {
    method: 'GET',
    headers: { Accept: 'text/turtle' },
  });
  const ttl = await response.text();
  store.parse(ttl, FORM_GRAPHS.formGraph, 'text/turtle');
}

export async function retrieveMetaData(url, store) {
  let response = await fetch(url, {
    method: 'GET',
    headers: { Accept: 'application/n-triples' },
  });
  const ttl = await response.text();
  store.parse(ttl, FORM_GRAPHS.metaGraph, 'text/turtle');
}

export async function retrieveSourceData(uri, url, store) {
  const sourceNode = new NamedNode(uri);

  // NOTE: update everything that exists in the source-graph to the given URI
  const existing = store.match(
    undefined,
    undefined,
    undefined,
    FORM_GRAPHS.sourceGraph
  );
  store.removeStatements(existing);

  const updated = updateSourceNodeOfTriples(existing, sourceNode);
  store.addAll(updated);

  let response = await fetch(url, {
    method: 'GET',
    headers: { Accept: 'application/n-triples' },
  });
  const ttl = await response.text();
  store.parse(ttl, FORM_GRAPHS.sourceGraph, 'text/turtle');

  return sourceNode;
}

export async function saveSourceData(url, store) {
  // NOTE: store.serializeDataMergedGraph() will always use format 'text/turtle', regardless of attempts to override this
  // there for the function has been "copied" from the forking-store to add 'application/n-triples' as serialization format.
  const body = serialize(
    store.mergedGraph(FORM_GRAPHS.sourceGraph),
    store.graph,
    undefined,
    'application/n-triples'
  );
  await fetch(url, {
    method: 'PUT',
    body,
    headers: { 'Content-type': 'application/n-triples' },
  });
}

export async function removeSourceData(url) {
  await fetch(url, {
    method: 'DELETE',
  });
}

// FORM-DATA TO QUERY-PARAMS LOGIC

// TODO generate this based on form-configuration?
export function getQueryParams(options) {
  return {
    administrativeUnites: options,
    administrativeUnitClassifications: options,
    chartOfAccounts: options,
    provinces: options,
    decisionTypes: options,
    regulationTypes: options,
    sessionDateFrom: options,
    sessionDateTo: options,
    sentDateFrom: options,
    sentDateTo: options,
    search: options,
    dateOfEntryIntoForceFrom: options,
    dateOfEntryIntoForceTo: options,
    dateNoLongerInForceFrom: options,
    dateNoLongerInForceTo: options,
    status: options,
    governingBodyClassifications: options,
    taxType: options,
  };
}

/**
 * Converts the data within the store to an Ember query-param object.
 *
 * @param store
 * @param node
 * @returns {{queryParams: {}}}
 */
export function formStoreToQueryParams(store, node) {
  let query = { queryParams: {} };
  // NOTE: retrieve all possible query-params
  const keys = store.match(
    undefined,
    SEARCH('emberQueryParameterKey'),
    undefined,
    FORM_GRAPHS.formGraph
  );
  if (keys && keys.length) {
    for (let key of keys) {
      const path = store.any(
        key.subject,
        SH('path'),
        undefined,
        FORM_GRAPHS.formGraph
      );
      const values = store.match(
        node,
        path,
        undefined,
        FORM_GRAPHS.sourceGraph
      );
      if (values && values.length) {
        query.queryParams[key.object.value] = values
          .map((v) => v.object.value)
          .join(',');
      } else {
        // NOTE: explicitly set value to prevent "sticky" query-params
        query.queryParams[key.object.value] = null;
      }
    }
  }
  return query;
}

export function queryParamsToFormStore(query, store, node) {
  const keys = Object.keys(query);
  for (let key of keys) {
    const field = store.any(
      undefined,
      SEARCH('emberQueryParameterKey'),
      key,
      FORM_GRAPHS.formGraph
    );
    if (field) {
      const path = store.any(
        field,
        SH('path'),
        undefined,
        FORM_GRAPHS.formGraph
      );
      const values = query[key] && query[key].split(',');
      if (values && values.length) {
        for (let value of values) {
          const rdfv = validURI(value) ? new NamedNode(value) : value;
          store.graph.add(node, path, rdfv, FORM_GRAPHS.sourceGraph);
        }
      }
    }
  }
}

/**
 * Implementation copied over form `submission-form-helpers`
 *
 * @param uri
 */
function validURI(uri) {
  return uri.match(/^(http|ftp)s?:\/\/[\w.-]+\.\w+(\/.*)?/);
}

// HELPERS

export function updateSourceNodeOfTriples(triples, to) {
  const updated: any = [];
  for (let triple of triples) {
    triple.subject = to;
    updated.push(triple);
  }
  return updated;
}
