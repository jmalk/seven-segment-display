const segments = require(`./segments`);
const Font = require(`./font`);
const stretchCharacter = require(`./stretch-character`);

const font = Font(segments);
const { characters, rowHeight: originalRowHeight } = font;

module.exports = function getCharacters (digitString, stretchBy = 1) {
  const digits = digitString.split(``);
  const mappedDigits = digits.map((digit) => characters[digit]);
  const stretched = mappedDigits.map((digit) => stretchCharacter(digit, stretchBy, segments))

  const extraRows = 2 * (stretchBy - 1)

  const segmentCharacters = {
    rowHeight: originalRowHeight + extraRows,
    characters: stretched
  }

  return segmentCharacters;
}
