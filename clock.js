const currentTime = require(`./current-time`);
const timeToString = require(`./time-to-string`);
const validateInput = require(`./validate-input`);
const convert = require(`./convert`);
const output = require(`./output`);

function update() {
  const string = timeToString(currentTime());
  const isValid = validateInput(string);

  if (isValid) {
    const result = convert(string);
    output(result);
  } else {
    console.error(`Please supply digits as argument, e.g. node index.js 123`);
    process.exit(1);
  }
}

const tick = setInterval(update, 500);