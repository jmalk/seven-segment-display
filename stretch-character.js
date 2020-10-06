const makeWider = require(`./make-wider`);

const pipesOnly = (char) => char === '|' ? '|' : ' ';

const copyVerticals = (string) => {
  return string
    .split(``)
    .map(pipesOnly)
    .join(``);
}

module.exports = function (segmentedCharacter, stretchBy) {
  const topRow = segmentedCharacter[0];
  const middleRow = segmentedCharacter[1];
  const bottomRow = segmentedCharacter[2];

  const middleRowVerticals = copyVerticals(middleRow);
  const bottomRowVerticals = copyVerticals(bottomRow);

  let taller = [];

  taller.push(topRow);
  for (var i = 0; i < (stretchBy - 1); i++ ) {
    taller.push(middleRowVerticals);
  }
  taller.push(middleRow);
  for (var i = 0; i < (stretchBy - 1); i++ ) {
    taller.push(bottomRowVerticals);
  }
  taller.push(bottomRow);

  const wider = taller.map((row) => makeWider(row, stretchBy))

  return wider;
}