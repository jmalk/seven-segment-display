const leftPad = require(`./left-pad`);

const tapeWidth = 120;
const itemWidth = 30;

let tickerProgress = 0;

function moveFirstNCharsToEnd(n, string) {
  const start = string.substring(0, n);
  const rest = string.substring(n);
  const result = `${rest}${start}`;

  return result;
}

function update (result) {
  console.clear();

  const lines = result.split(`\n`).filter((ln) => ln.length > 0);

  const paddedLines = lines.map((line) => leftPad(line, itemWidth, ` `));

  // TODO: Use tape width instead of line line line line... maybe?
  const repeatedLines = paddedLines.map((line) => `${line}${line}${line}${line}`)

  const mover = moveFirstNCharsToEnd.bind(null, tickerProgress);
  const loopedLines = repeatedLines.map(mover);

  const output = loopedLines.join(`\n`);

  console.log(output);
}

module.exports = function Ticker () {
  let value = ` `;

  setInterval(() => {
    update(value);
    tickerProgress = (tickerProgress + 1) % tapeWidth;
  }, 100);

  return {
    updateDisplay(newValue) {
      value = newValue;
    }
  }
}