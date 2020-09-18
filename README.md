# README

A seven segment display kata with evolving requirements.

## Run

`node clock.js`

## Test

`node all-tests.test.js`

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

### Part Two: Clock

Requirements: Instead of taking a number as an argument make it render the current time and get it to update at least every second.

- Don’t let the console fill up, have it update in place by clearing it
- Format hh:mm:ss (yes the colons need to be included.)