function makeWider(string, stretchBy = 1) {
  if (typeof stretchBy !== `number`) {
    throw new Error(`Second argument to makeWider must be a number`);
  }

  if (stretchBy < 2) {
    return string;
  }

  const asArray = string.split(``);
  let stretched = [];
  stretched.push(asArray[0]);
  for (let i = 0; i < stretchBy; i++) {
    const middleCharacter = asArray[1];
    // Special case for dots - they get moved over instead of stretched
    if (middleCharacter === `•` && i !== (stretchBy - 1)) {
      stretched.push(` `);
    } else {
      stretched.push(middleCharacter);
    }
  }
  stretched.push(asArray[2]);
  return stretched.join(``);
}

module.exports = makeWider;