module.exports = function leftPad(string, minimumLength, char = '0') {
  return string.length < minimumLength
    ? leftPad(`${char}${string}`, minimumLength, char)
    : string;
}