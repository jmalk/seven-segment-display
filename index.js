const getInput = require(`./get-input`);
const validateInput = require(`./validate-input`);
const convert = require(`./convert`);

const input = getInput();

const isValid = validateInput(input);

if (isValid) {
  const output = convert(input);
  console.log(output);
} else {
  console.error(`Please supply digits as argument, e.g. node index.js 123`);
  process.exit(1);
}
