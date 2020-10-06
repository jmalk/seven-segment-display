const makeTaller = require(`./make-taller`);
const makeWider = require(`./make-wider`);

module.exports = function (segmentedCharacter, stretchBy) {
  const taller = makeTaller(segmentedCharacter, stretchBy);

  const widerAndTaller = taller.map((row) => makeWider(row, stretchBy))

  return widerAndTaller;
}