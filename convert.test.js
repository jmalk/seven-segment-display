const assert = require(`assert`).strict;
const convert = require(`./convert`);

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

