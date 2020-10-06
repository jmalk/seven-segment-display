function moveFirstNCharsToEnd(n, string) {
  const firstNChars = string.substring(0, n);
  const rest = string.substring(n);
  const result = `${rest}${firstNChars}`;

  return result;
}

function leftPad(string, minimumLength, char = `0`) {
  return string.length < minimumLength
    ? leftPad(`${char}${string}`, minimumLength, char)
    : string;
}

function repeatString(string, targetLength) {
  let result = string;
  while (result.length < targetLength) {
    result += string;
  }
  return result;
}

// TODO Probably not a string util, move to own file.
// It's too tightly tied in to design decisions about this project.
function widen(string, stretchBy = 1) {
  if (typeof stretchBy !== `number`) {
    throw new Error(`Second argument to widen must be a number`);
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

module.exports = {
  moveFirstNCharsToEnd,
  leftPad,
  repeatString,
  widen
}