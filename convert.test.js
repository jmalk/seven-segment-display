const assert = require(`assert`).strict;
const convert = require(`./convert`);

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

