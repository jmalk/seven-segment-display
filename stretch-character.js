const makeTaller = require(`./make-taller`);
const makeWider = require(`./make-wider`);

module.exports = function (segmentedCharacter, stretchBy, segments) {
  const taller = makeTaller(segmentedCharacter, stretchBy, segments);

  const widerAndTaller = taller.map((row) => makeWider(row, stretchBy, segments))

  return widerAndTaller;
}