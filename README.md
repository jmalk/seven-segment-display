# README

## Run

`node index.js 0123456789`

## Test

`node *.test.js`

## Notes

### Part One

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
