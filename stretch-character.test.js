const assert = require(`assert`).strict;
const stretchCharacter = require(`./stretch-character`);

module.exports = function run () {
  console.log(`Running tests from ${__filename}`)

  const nine = [
    ` _ `,
    `|_|`,
    ` _|`
  ];

  // Stretch factor 1 does nothing to it.
  assert.deepStrictEqual(stretchCharacter(nine, 1), nine);

  // Stretch factor 2 makes each single pipe vertical 2 pipes high.
  const twoStretchedNine = [
    ` __ `,
    `|  |`,
    `|__|`,
    `   |`,
    ` __|`
  ];
  assert.deepStrictEqual(stretchCharacter(nine, 2), twoStretchedNine);

  // Stretch factor 3 makes each single pipe vertical 3 pipes high.
  const threeStretchedNine = [
    ` ___ `,
    `|   |`,
    `|   |`,
    `|___|`,
    `    |`,
    `    |`,
    ` ___|`
  ];
  assert.deepStrictEqual(stretchCharacter(nine, 3), threeStretchedNine);

  const dots = [
    `   `,
    ` • `,
    ` • `
  ];

  assert.deepStrictEqual(stretchCharacter(dots, 1), dots);

  const twoStretchedDots = [
    `    `,
    `    `,
    `  • `,
    `    `,
    `  • `
  ]

  assert.deepStrictEqual(stretchCharacter(dots, 2), twoStretchedDots);

  const threeStretchedDots = [
    `     `,
    `     `,
    `     `,
    `   • `,
    `     `,
    `     `,
    `   • `
  ]

  assert.deepStrictEqual(stretchCharacter(dots, 3), threeStretchedDots);
}