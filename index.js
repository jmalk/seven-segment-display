const getInput = require(`./get-input`);
const validateInput = require(`./validate-input`);
const convert = require(`./convert`);
const output = require(`./output`);

const input = getInput();

const isValid = validateInput(input);

if (isValid) {
  const result = convert(input);
  output(result);
} else {
  console.error(`Please supply digits as argument, e.g. node index.js 123`);
  process.exit(1);
}
