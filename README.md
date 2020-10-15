# README

A seven segment display kata with evolving requirements.

## Run

`node index.js`

## Test

`node run-tests.js`

## Churn between each set of requirements:

- Part One: https://github.com/jmalk/seven-segment-display/tree/v1.0
- Part One to Two: https://github.com/jmalk/seven-segment-display/compare/v1.0...v2.0
- Part Two to Three: https://github.com/jmalk/seven-segment-display/compare/v2.0...v3.0
- Part Three to Four: https://github.com/jmalk/seven-segment-display/compare/v3.0...v4.0

## Draw a graph

```
brew install graphviz
npx madge --image graph.svg index.js
open graph.svg -a "Google Chrome"
```

## Notes

### Part One: IO

Requirements: An command-line arg of a string of digits should result in logging out a string with seven-segment numbers. e.g.

```
> node index.js 123
    _  _
  | _| _|
  ||_  _|
```

Spent a while chasing things round until I settled on where my tests were going to sit. (After collecting input, but around all conversion).

Divided into:

- Collect input
- Check input is valid
- Do conversion
  - Get characters from a dictionary, including line-height as an explicit value on the object.
    - Dictionary of characters.
  - Pass those characters into a function to collect the top row, then the middle, then the bottom, and group them together appropriately with newlines.
- Output result of conversion

### Part Two: Clock

Requirements: Instead of taking a number as an argument make it render the current time and get it to update at least every second.

- Don’t let the console fill up, have it update in place by clearing it
- Format hh:mm:ss (yes the colons need to be included.)

There's been lots of churn as I discover bits of part 1 that weren't actually working as intended. But overall, the separation of gather input, convert it, output it has survived reasonably well. Instead of gather input you now have a `setInterval` which grabs the current time every half second. It is made into a string by `function timeToString({hours: number, minutes: number, seconds: number}): string` so that formatting logic could easily be changed in isolation.

My main concern at the moment is that I'm generating too many files. E.g. left-pad could quite happily live inside time-to-string, since that's purely a formatting concern, not yet shared.

### Part Three: Ticker Tape

The input / process / output split has worked out quite well. Part one was all about process, i.e. getting from input string `'123'` to an output of seven-segment characters. Part two replaced the command line input with checking the current time.

In this part we replace the straightforward `console.log` output with a more complex ticker tape.

The main coupling I see is that the ticker tape expects data in a particular format - a string broken up by new lines. This is very tied to how I chose to implement the "process" bit of the code.

There's also lots of sneakier bits of coupling in there. Such as, if the itemWidth divided by tickerTapeWidth is not a whole number, it doesn't scroll smoothly forever. If the intervals of the time-checking interval and the ticker updating interval were radically different, who knows what might happen? They're in different files so it'd be easy to change one, unaware of the other.

One tactic I chose in this section was to extract string-manipulating functions into a single helper library. Hopefully that keeps the intent of "business logic" modules more clear.

### Part Four: Size

At this point I wish I'd stored the characters as nested arrays for as long as possible before deciding how to output them. I feel like the "process" part of the programme should work on arrays then the "output" (ticker tape) bit should decide how to turn those into strings.

I was able to do re-sizing at the point where you get characters, then pass it on to the ticker tape to be outputted, without having to refactor the ticker tape. So I must've done something good for myself there.

### Connascence

The next challenge is to find an example of connascence in the code and refactor it to a less severe form.

* Question: What is the difference between connascence of meaning and of value? It seems subtle to me.

One example of connascence in v4.0 of the code is that `make-taller`, `make-wider` and `font` all have to agree on what characters are used for different parts of the output. So if you go into the font and replace underscores with dashes, pipes with the letter `l` and the `•` dots with full stops, your output breaks.

This seems like an example of primitive obsession; connascence of meaning. Multiple files are assuming that the `|` means "vertical component of a segmented character".

To make this assumption explicit, we can extract the actual values and define them in a variable at the highest level that shares the understanding. Something like:

```
const segments = {
  vertical: `|`,
  horizontal: `_`,
  dot: `•`
}
```

### Resources

- https://connascence.io/
- [Talk: Red, Green... what now?!](https://youtu.be/fSr8LDcb0Y0) by Kevin Rutherford and James Jeffries.
- [GeePawHill's thread](https://twitter.com/geepawhill/status/1279758377573285888) - "Turning implicit understanding into explicit code is a great productivity & quality step."
