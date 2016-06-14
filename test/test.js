const assert = require('assert')
const generator = require('../dist/ease-generator.min.js')
console.time('test')

const numbers = generator('backIn', 50, 2, 4)
const numbers2 = generator('backIn', 50, 3, 6)

assert(_typeof(numbers) === '[object Array]')
assert(_typeof(numbers2) === '[object Array]')
assert(numbers[1].toString().replace(/.+?\./, '').length === 4)
assert(numbers2[1].toString().replace(/.+?\./, '').length === 6)

console.timeEnd('test')

function _typeof(ele){
  return Object.prototype.toString.call(ele)
}