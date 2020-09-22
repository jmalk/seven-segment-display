module.exports = function moveFirstNCharsToEnd(n, string) {
  const firstNChars = string.substring(0, n);
  const rest = string.substring(n);
  const result = `${rest}${firstNChars}`;

  return result;
}