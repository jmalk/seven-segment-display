const characters = require(`./font`).characters;
const allowed = Object.keys(characters);

module.exports = function validateInput(input) {
  const isString = typeof input === `string`;

  const characters = input.split(``);
  const invalidCharacters = characters.filter((char) => !allowed.includes(char));

  const isStringOfAllowedChars = isString && invalidCharacters.length === 0;
  return isStringOfAllowedChars;
}