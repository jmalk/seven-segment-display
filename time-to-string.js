const { leftPad } = require(`./string-utils`);

module.exports = function ({hours, minutes, seconds}) {
  return [hours, minutes, seconds]
    .map(String)
    .map((str) => leftPad(str, 2))
    .join(`:`);
}