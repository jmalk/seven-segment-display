module.exports = function validateInput(input) {
  const isString = typeof input === 'string';
  const isStringOfDigits = isString && input.match(/[0-9]+/);
  return isStringOfDigits;
}