import {expect} from 'chai'
import kingdomHeartsNames from '.'

describe('kingdomhearts-names', () => {
  it('should have a list of all available names', () => {
    expect(kingdomHeartsNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(kingdomHeartsNames.random()).to.satisfy(isIncludedIn(kingdomHeartsNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
