const allowed = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];

module.exports = function validateInput(input) {
  const isString = typeof input === `string`;

  const characters = input.split(``);
  const invalidCharacters = characters.filter((char) => !allowed.includes(char));

  const isStringOfAllowedChars = isString && invalidCharacters.length === 0;
  return isStringOfAllowedChars;
}