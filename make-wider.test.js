const assert = require(`assert`).strict;
const makeWider = require(`./make-wider`);

// TODO: Use these within the tests too instead of having hardcoded characters.
const fakeSegments = {
  blank: ` `,
  vertical: `|`,
  horizontal: `_`,
  dot: `•`
}

module.exports = function run () {
  console.log(`Running tests from ${__filename}`)

  // Stretch underscores by adding more
  assert.strictEqual(makeWider(` _ `, 1, fakeSegments), ` _ `);
  assert.strictEqual(makeWider(` _ `, 2, fakeSegments), ` __ `);
  assert.strictEqual(makeWider(`|_ `, 2, fakeSegments), `|__ `);
  assert.strictEqual(makeWider(` _ `, 3, fakeSegments), ` ___ `);
  assert.strictEqual(makeWider(` _|`, 3, fakeSegments), ` ___|`);

  // Don't stretch dots, just move them
  assert.strictEqual(makeWider(` • `, 1, fakeSegments), ` • `);
  assert.strictEqual(makeWider(` • `, 2, fakeSegments), `  • `);
  assert.strictEqual(makeWider(` • `, 3, fakeSegments), `   • `);
  assert.strictEqual(makeWider(` • `, 4, fakeSegments), `    • `);

  // Stretch spaces by adding more
  assert.strictEqual(makeWider(`   `, 1, fakeSegments), `   `); // three spaces => three spaces
  assert.strictEqual(makeWider(`   `, 2, fakeSegments), `    `); // three spaces => four spaces
  assert.strictEqual(makeWider(`  |`, 2, fakeSegments), `   |`);
  assert.strictEqual(makeWider(`   `, 3, fakeSegments), `     `); // three spaces => five spaces
  assert.strictEqual(makeWider(`|  `, 3, fakeSegments), `|    `);
}