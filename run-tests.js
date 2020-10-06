const fs = require(`fs`);

const isTestFile = filename => filename.slice(-8) === `.test.js`;
const requireIn = name => require(`./${name}`)
const runTests = tests => tests();

fs.readdirSync(__dirname)
  .filter(isTestFile)
  .map(requireIn)
  .forEach(runTests);
