const assert = require(`assert`).strict;
const makeWider = require(`./make-wider`);

module.exports = function run () {
  console.log(`Running tests from ${__filename}`)

  // Stretch underscores by adding more
  assert.strictEqual(makeWider(` _ `, 1), ` _ `);
  assert.strictEqual(makeWider(` _ `, 2), ` __ `);
  assert.strictEqual(makeWider(`|_ `, 2), `|__ `);
  assert.strictEqual(makeWider(` _ `, 3), ` ___ `);
  assert.strictEqual(makeWider(` _|`, 3), ` ___|`);

  // Don't stretch dots, just move them
  assert.strictEqual(makeWider(` • `, 1), ` • `);
  assert.strictEqual(makeWider(` • `, 2), `  • `);
  assert.strictEqual(makeWider(` • `, 3), `   • `);
  assert.strictEqual(makeWider(` • `, 4), `    • `);

  // Stretch spaces by adding more
  assert.strictEqual(makeWider(`   `, 1), `   `); // three spaces => three spaces
  assert.strictEqual(makeWider(`   `, 2), `    `); // three spaces => four spaces
  assert.strictEqual(makeWider(`  |`, 2), `   |`);
  assert.strictEqual(makeWider(`   `, 3), `     `); // three spaces => five spaces
  assert.strictEqual(makeWider(`|  `, 3), `|    `);
}