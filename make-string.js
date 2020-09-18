module.exports = function makeString(segmented) {
  const { rowHeight, characters } = segmented;
  let asString = ``;

  for (let i = 0; i < rowHeight; i++) {
    for (let j = 0; j < characters.length; j++) {
      asString += characters[j][i];
    }

    asString += `\n`;
  }

  return asString;
};
