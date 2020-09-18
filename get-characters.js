const {characters, rowHeight} = require(`./font`);

module.exports = function getCharacters (digitString) {
  const digits = digitString.split(``);
  const mappedDigits = digits.map((digit) => characters[digit]);

  const segmentCharacters = {
    rowHeight: rowHeight,
    characters: mappedDigits
  }

  return segmentCharacters;
}