const getCharacters = require(`./get-characters`);
const makeString = require(`./make-string`);

function convert(input, stretch) {
  const segmented = getCharacters(input, stretch);

  return makeString(segmented);
}

module.exports = convert;