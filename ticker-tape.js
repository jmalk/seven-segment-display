const {
  leftPad,
  moveFirstNCharsToEnd,
  repeatString
} = require(`./string-utils`);

function render (string, tickerProgress, tapeWidth, itemWidth) {
  console.clear();

  const lines = string.split(`\n`).filter((ln) => ln.length > 0);

  const paddedLines = lines.map((line) => leftPad(line, itemWidth, ` `));

  const repeatedLines = paddedLines.map((line) => repeatString(line, tapeWidth))

  const mover = moveFirstNCharsToEnd.bind(null, tickerProgress);
  const movedLines = repeatedLines.map(mover);

  const output = movedLines.join(`\n`);

  console.log(output);
}

module.exports = function TickerTape () {
  const tapeWidth = 120;
  const itemWidth = 30;
  const tickRate = 100;
  let value = ` `;
  let tickerProgress = 0;

  setInterval(() => {
    render(value, tickerProgress, tapeWidth, itemWidth);
    tickerProgress = (tickerProgress + 1) % tapeWidth;
  }, tickRate);

  return {
    updateDisplay(newValue) {
      value = newValue;
    }
  }
}