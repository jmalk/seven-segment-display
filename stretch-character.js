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

  let stretched = [];

  stretched.push(topRow);
  for (var i = 0; i < (stretchBy - 1); i++ ) {
    stretched.push(middleRowVerticals);
  }
  stretched.push(middleRow);
  for (var i = 0; i < (stretchBy - 1); i++ ) {
    stretched.push(bottomRowVerticals);
  }
  stretched.push(bottomRow);

  return stretched;
}