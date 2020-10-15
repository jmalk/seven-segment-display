const Font = require(`./font`);
// This seems hacky somehow... Why does validate input have to know about a
// default value to pass to Font just to get the characters?
// Perhaps it would be better to have validation happen within get-characters.
const characters = Font({}).characters;
const allowed = Object.keys(characters);

module.exports = function validateInput(input) {
  const isString = typeof input === `string`;

  const characters = input.split(``);
  const invalidCharacters = characters.filter((char) => !allowed.includes(char));

  const isStringOfAllowedChars = isString && invalidCharacters.length === 0;
  return isStringOfAllowedChars;
}