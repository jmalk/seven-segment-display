const getCharacters = require(`./get-characters`);
const makeString = require(`./make-string`);

function convert(input) {
  const segmented = getCharacters(input);

  const outputString = makeString(segmented);

  return outputString;
}

module.exports = convert;