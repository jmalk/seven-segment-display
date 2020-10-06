const fs = require(`fs`);

const isTestFile = (filename) => filename.slice(-8) === `.test.js`;

fs.readdirSync(__dirname)
  .filter(isTestFile)
  .map(name => require(`./${name}`))
  .forEach(suite => suite());
