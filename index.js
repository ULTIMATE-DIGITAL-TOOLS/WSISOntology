const N3 = require('n3');
const fs = require('fs')

const parser = new N3.Parser();

const rdfStream = fs.createReadStream('./ontology/wisis.ttl');

parser.parse(rdfStream, console.log);