const leftPad = require(`./left-pad`);
const moveFirstNCharsToEnd = require(`./move-first-n-chars-to-end`);

const tapeWidth = 120;
const itemWidth = 30;

function repeatUntilFull(string, width) {
  let result = string;
  while (result.length < width) {
    result += string;
  }
  return result;
}

function render (string, tickerProgress) {
  console.clear();

  const lines = string.split(`\n`).filter((ln) => ln.length > 0);

  const paddedLines = lines.map((line) => leftPad(line, itemWidth, ` `));

  const repeatedLines = paddedLines.map((line) => repeatUntilFull(line, tapeWidth))

  const mover = moveFirstNCharsToEnd.bind(null, tickerProgress);
  const movedLines = repeatedLines.map(mover);

  const output = movedLines.join(`\n`);

  console.log(output);
}

module.exports = function TickerTape () {
  let value = ` `;
  let tickerProgress = 0;

  setInterval(() => {
    render(value, tickerProgress);
    tickerProgress = (tickerProgress + 1) % tapeWidth;
  }, 100);

  return {
    updateDisplay(newValue) {
      value = newValue;
    }
  }
}