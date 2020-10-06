function moveFirstNCharsToEnd(n, string) {
  const firstNChars = string.substring(0, n);
  const rest = string.substring(n);

  return `${rest}${firstNChars}`;
}

function leftPad(string, minimumLength, char = `0`) {
  return string.length < minimumLength
    ? leftPad(`${char}${string}`, minimumLength, char)
    : string;
}

function repeatString(string, targetLength) {
  let result = string;
  while (result.length < targetLength) {
    result += string;
  }
  return result;
}

module.exports = {
  moveFirstNCharsToEnd,
  leftPad,
  repeatString
}