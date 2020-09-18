const leftPad = require(`./left-pad`);

module.exports = function ({hours, minutes, seconds}) {
  return [hours, minutes, seconds]
    .map((str) => leftPad(str, 2))
    .join(':');
}