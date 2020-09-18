const assert = require(`assert`).strict;
const leftPad = require(`./left-pad`);

module.exports = function run () {
  console.log(`Running tests from ${__filename}`)

  assert.strictEqual(leftPad('1', 2), '01');
  assert.strictEqual(leftPad('1', 3), '001');
  assert.strictEqual(leftPad('1', 1), '1');
  assert.strictEqual(leftPad('1', 0), '1');
  assert.strictEqual(leftPad('1', -1), '1');
}