
const SparqlEndpointFetcher = require ("fetch-sparql-endpoint");

const myFetcher = new SparqlEndpointFetcher.SparqlEndpointFetcher();

test('Check all industries available in the CS are Agricola', async () => { 

    const sparqlQuery =`PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX wsis:<https://w3id.org/def/wsis/>
    PREFIX geosp:<http://www.opengis.net/ont/geosparql#>
    SELECT ?industries ?name ?geo_position WHERE {
      ?industries rdf:type wsis:Industry .
      ?industries wsis:hasName ?name .
      ?industries geosp:hasGeometry ?geo .
      ?geo geosp:asWKT ?geo_position
    } LIMIT 10`;

    const bindingsStream = await myFetcher.fetchBindings(
        'https://api.triplydb.com/datasets/aitorcorchero/AQUASPICE-Project-Data/services/AQUASPICE-Project-Data/sparql',
        sparqlQuery
    );

    sparqlPromise = await new Promise ((resolve, reject) => {
        let chunks = [];
        bindingsStream.on('data', (triple) => chunks.push(triple));
        bindingsStream.on("end", () => resolve(chunks));
        bindingsStream.on("error", error => reject(error));
      });

    return expect (sparqlPromise[0].name.value).toBe('Agricola');
    
});

test ('Check all Resource Providers available in Agricola CS ', async () => {
    
}); 