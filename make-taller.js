function makeTaller (rows, stretchBy, segments) {
  const copyVerticals = (string) => {
    return string
    .split(``)
    .map(verticalsOnly)
    .join(``);
  };

  const verticalsOnly = (char) => {
    return char === segments.vertical ? segments.vertical : segments.blank;
  }

  const topRow = rows[0];
  const middleRow = rows[1];
  const bottomRow = rows[2];

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

  return taller;
}

module.exports = makeTaller;