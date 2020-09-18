const convert = require(`./convert`);

const input = process.argv[2];

// TODO: Check valid input, i.e. string of digits 0-9

const output = convert(input);

console.log(output);