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
    ` _ `,
    `| |`,
    `|_|`,
    `  |`,
    ` _|`
  ];
  assert.deepStrictEqual(stretchCharacter(nine, 2), twoStretchedNine);

  // Stretch factor 3 makes each single pipe vertical 3 pipes high.
  const threeStretchedNine = [
    ` _ `,
    `| |`,
    `| |`,
    `|_|`,
    `  |`,
    `  |`,
    ` _|`
  ];
  assert.deepStrictEqual(stretchCharacter(nine, 3), threeStretchedNine);
}