const assert = require(`assert`).strict;
const convert = require(`./convert`);

module.exports = function run () {
  console.log(`Running tests from ${__filename}`)

  assert.strictEqual(convert(`1`),
  `   ` + `\n` +
  `  |` + `\n` +
  `  |` + `\n`
  );

  assert.strictEqual(convert(`12`),
  `    _ ` + `\n` +
  `  | _|` + `\n` +
  `  ||_ ` + `\n`
  );

  assert.strictEqual(convert(`1:2`),
  `       _ ` + `\n` +
  `  | •  _|` + `\n` +
  `  | • |_ ` + `\n`
  );
}