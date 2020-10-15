module.exports = function ({ blank, vertical, horizontal, dot }) {
  return {
    rowHeight: 3,
    characters: {
      0: [ `${blank}${horizontal}${blank}`,
          `${vertical}${blank}${vertical}`,
          `${vertical}${horizontal}${vertical}` ],

      1: [ `${blank}${blank}${blank}`,
          `${blank}${blank}${vertical}`,
          `${blank}${blank}${vertical}` ],

      2: [ `${blank}${horizontal}${blank}`,
          `${blank}${horizontal}${vertical}`,
          `${vertical}${horizontal}${blank}` ],

      3: [ `${blank}${horizontal}${blank}`,
          `${blank}${horizontal}${vertical}`,
          `${blank}${horizontal}${vertical}` ],

      4: [ `${blank}${blank}${blank}`,
          `${vertical}${horizontal}${vertical}`,
          `${blank}${blank}${vertical}` ],

      5: [ `${blank}${horizontal}${blank}`,
          `${vertical}${horizontal}${blank}`,
          `${blank}${horizontal}${vertical}` ],

      6: [ `${blank}${horizontal}${blank}`,
          `${vertical}${horizontal}${blank}`,
          `${vertical}${horizontal}${vertical}` ],

      7: [ `${blank}${horizontal}${blank}`,
          `${blank}${blank}${vertical}`,
          `${blank}${blank}${vertical}` ],

      8: [ `${blank}${horizontal}${blank}`,
          `${vertical}${horizontal}${vertical}`,
          `${vertical}${horizontal}${vertical}` ],

      9: [ `${blank}${horizontal}${blank}`,
          `${vertical}${horizontal}${vertical}`,
          `${blank}${horizontal}${vertical}` ],

      ":": [ `${blank}${blank}${blank}`,
            `${blank}${dot}${blank}`,
            `${blank}${dot}${blank}` ]
    }
  }
}