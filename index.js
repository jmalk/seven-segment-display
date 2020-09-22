const currentTime = require(`./current-time`);
const timeToString = require(`./time-to-string`);
const validateInput = require(`./validate-input`);
const convert = require(`./convert`);
const TickerTape = require(`./ticker-tape`);

const tickerTape = TickerTape();

function updateTime() {
  const string = timeToString(currentTime());
  const isValid = validateInput(string);

  if (isValid) {
    const result = convert(string);
    tickerTape.updateDisplay(result);
  } else {
    console.error(`Generated an invalid string from the current time. Please file a bug report at https://github.com/jmalk/seven-segment-display/issues`);
    process.exit(1);
  }
}

setInterval(updateTime, 500);
updateTime();
