const leftPad = require("./left-pad");

const tapeWidth = 120;
const itemWidth = 30;

let chunk = 0;

function moveFirstNCharsToEnd(n, string) {
  const start = string.substring(0, n);
  const rest = string.substring(n);
  const result = `${rest}${start}`;

  return result;
}

function update (result) {
  console.clear();

  const lines = result.split(`\n`).filter((ln) => ln.length > 0);

  const paddedLines = lines.map((line) => leftPad(line, itemWidth, ' '));

  // TODO: Use tape width instead of line line line line... maybe?
  const repeatedLines = paddedLines.map((line) => `${line}${line}${line}${line}`)

  const mover = moveFirstNCharsToEnd.bind(null, chunk);
  const loopedLines = repeatedLines.map(mover);

  const output = loopedLines.join(`\n`);

  console.log(output);
}

module.exports = function ticker (result) {
  const interval = setInterval(() => {
    update(result);
    chunk = (chunk + 1) % tapeWidth;
  }, 100);
}