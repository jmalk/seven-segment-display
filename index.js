const main = require(`./convert`);
const input = process.argv[2];
// TODO: Check valid input, i.e. string of digits 0-9
const output = main(input);
console.log(output);