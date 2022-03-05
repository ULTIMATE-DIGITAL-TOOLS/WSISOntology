const N3 = require('n3');
const fs = require('fs')

const parser = new N3.Parser();

const rdfStream = fs.createReadStream('./wisis.ttl');
const rdfStreamExample = fs.createReadStream('./examples/ULTIMATE-CS2.ttl');
const rdfStreamExampleAgricola = fs.createReadStream('./examples/AQUASPICE-AGRICOLA.ttl');

parser.parse(rdfStream, console.log);