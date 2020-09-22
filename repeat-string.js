module.exports = function repeatString(string, targetLength) {
  let result = string;
  while (result.length < targetLength) {
    result += string;
  }
  return result;
}