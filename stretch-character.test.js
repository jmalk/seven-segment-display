const assert = require(`assert`).strict;
const stretchCharacter = require(`./stretch-character`);

module.exports = function run () {
  console.log(`Running tests from ${__filename}`)

  const fakeSegments = {
    blank: `1`,
    vertical: `2`,
    horizontal: `3`,
    dot: `4`
  }

  const { blank, vertical, horizontal, dot } = fakeSegments;

  /*
    ` _ `
    `|_|`
    ` _|`
  */
  const nine = [
    `${blank}${horizontal}${blank}`,
    `${vertical}${horizontal}${vertical}`,
    `${blank}${horizontal}${vertical}`
  ];

  // Stretch factor 1 does nothing to it.
  assert.deepStrictEqual(stretchCharacter(nine, 1, fakeSegments), nine);

  // Stretch factor 2 makes each vertical two characters high
  // and each horizontal line two characters wide
  /*
    ` __ `
    `|  |`
    `|__|`
    `   |`
    ` __|`
  */
  const twoStretchedNine = [
    `${blank}${horizontal}${horizontal}${blank}`,
    `${vertical}${blank}${blank}${vertical}`,
    `${vertical}${horizontal}${horizontal}${vertical}`,
    `${blank}${blank}${blank}${vertical}`,
    `${blank}${horizontal}${horizontal}${vertical}`
  ];
  assert.deepStrictEqual(stretchCharacter(nine, 2, fakeSegments), twoStretchedNine);

  // Stretch factor 3 makes each vertical three characters high
  // and each horizontal line three characters wide
  /*
    ` ___ `
    `|   |`
    `|   |`
    `|___|`
    `    |`
    `    |`
    ` ___|`
  */
 const threeStretchedNine = [
  `${blank}${horizontal}${horizontal}${horizontal}${blank}`,
  `${vertical}${blank}${blank}${blank}${vertical}`,
  `${vertical}${blank}${blank}${blank}${vertical}`,
  `${vertical}${horizontal}${horizontal}${horizontal}${vertical}`,
  `${blank}${blank}${blank}${blank}${vertical}`,
  `${blank}${blank}${blank}${blank}${vertical}`,
  `${blank}${horizontal}${horizontal}${horizontal}${vertical}`
];
  assert.deepStrictEqual(stretchCharacter(nine, 3, fakeSegments), threeStretchedNine);

  /*
    `   `
    ` • `
    ` • `
  */

  const dots = [
    `${blank}${blank}${blank}`,
    `${blank}${dot}${blank}`,
    `${blank}${dot}${blank}`
  ];

  // Stretch factor 1 does nothing to it.
  assert.deepStrictEqual(stretchCharacter(dots, 1, fakeSegments), dots);

  // Stretch factor 2 pads it with space to make it as big as a number stretched with factor 2.
  /*
    `    `
    `    `
    `  • `
    `    `
    `  • `
  */
  const twoStretchedDots = [
    `${blank}${blank}${blank}${blank}`,
    `${blank}${blank}${blank}${blank}`,
    `${blank}${blank}${dot}${blank}`,
    `${blank}${blank}${blank}${blank}`,
    `${blank}${blank}${dot}${blank}`
  ];

  assert.deepStrictEqual(stretchCharacter(dots, 2, fakeSegments), twoStretchedDots);

  // const threeStretchedDots = [
  //   `     `,
  //   `     `,
  //   `     `,
  //   `   • `,
  //   `     `,
  //   `     `,
  //   `   • `
  // ]

  // assert.deepStrictEqual(stretchCharacter(dots, 3), threeStretchedDots);
}
