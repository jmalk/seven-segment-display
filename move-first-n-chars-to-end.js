module.exports = function moveFirstNCharsToEnd(n, string) {
  const start = string.substring(0, n);
  const rest = string.substring(n);
  const result = `${rest}${start}`;

  return result;
}