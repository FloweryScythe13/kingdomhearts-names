import uniqueRandomArray from 'unique-random-array'
const kingdomHeartsNames = require('./starwars-names.json')

const mainExport = {
  all: kingdomHeartsNames,
  random: uniqueRandomArray(kingdomHeartsNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
