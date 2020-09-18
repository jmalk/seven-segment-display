const characters = require(`./characters`);

module.exports = function getCharacters (digitString) {
  const digits = digitString.split(``);
  const mappedDigits = digits.map((digit) => characters[digit]);

  const segmentCharacters = {
    rowHeight: characters.rowHeight,
    characters: mappedDigits
  }

  return segmentCharacters;
}