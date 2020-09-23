const getCharacters = require(`./get-characters`);
const makeString = require(`./make-string`);

function convert(input, stretch) {
  const segmented = getCharacters(input, stretch);

  const outputString = makeString(segmented);

  return outputString;
}

module.exports = convert;