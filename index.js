const convert = require(`./convert`);
const validateInput = require(`./validate-input`);

const input = process.argv[2];

const isValid = validateInput(input);

if (isValid) {
  const output = convert(input);
  console.log(output);
} else {
  console.error(`Please supply digits as argument, e.g. node index.js 123`);
  process.exit(1);
}
