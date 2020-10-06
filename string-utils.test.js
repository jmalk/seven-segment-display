const assert = require(`assert`).strict;
const { leftPad, widen } = require(`./string-utils`);

module.exports = function run () {
  console.log(`Running tests from ${__filename}`)

  assert.strictEqual(leftPad(`1`, 2), `01`);
  assert.strictEqual(leftPad(`1`, 3), `001`);
  assert.strictEqual(leftPad(`1`, 1), `1`);
  assert.strictEqual(leftPad(`1`, 0), `1`);
  assert.strictEqual(leftPad(`1`, -1), `1`);

  // Stretch underscores by adding more
  assert.strictEqual(widen(` _ `, 1), ` _ `);
  assert.strictEqual(widen(` _ `, 2), ` __ `);
  assert.strictEqual(widen(`|_ `, 2), `|__ `);
  assert.strictEqual(widen(` _ `, 3), ` ___ `);
  assert.strictEqual(widen(` _|`, 3), ` ___|`);

  // Don't stretch dots, just move them
  assert.strictEqual(widen(` • `, 1), ` • `);
  assert.strictEqual(widen(` • `, 2), `  • `);
  assert.strictEqual(widen(` • `, 3), `   • `);
  assert.strictEqual(widen(` • `, 4), `    • `);

  // Stretch spaces by adding more
  assert.strictEqual(widen(`   `, 1), `   `); // three spaces => three spaces
  assert.strictEqual(widen(`   `, 2), `    `); // three spaces => four spaces
  assert.strictEqual(widen(`  |`, 2), `   |`); // three spaces => four spaces
  assert.strictEqual(widen(`   `, 3), `     `); // three spaces => five spaces
  assert.strictEqual(widen(`|  `, 3), `|    `); // three spaces => five spaces
}