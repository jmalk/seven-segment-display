const leftPad = require(`./left-pad`);

const tapeWidth = 120;
const itemWidth = 30;

function moveFirstNCharsToEnd(n, string) {
  const start = string.substring(0, n);
  const rest = string.substring(n);
  const result = `${rest}${start}`;

  return result;
}

function render (string, tickerProgress) {
  console.clear();

  const lines = string.split(`\n`).filter((ln) => ln.length > 0);

  const paddedLines = lines.map((line) => leftPad(line, itemWidth, ` `));

  // TODO: Use tape width instead of line line line line... maybe?
  const repeatedLines = paddedLines.map((line) => `${line}${line}${line}${line}`)

  const mover = moveFirstNCharsToEnd.bind(null, tickerProgress);
  const movedLines = repeatedLines.map(mover);

  const output = movedLines.join(`\n`);

  console.log(output);
}

module.exports = function Ticker () {
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