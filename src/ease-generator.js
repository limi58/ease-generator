import eases from './ease-lib/index.js'

function getNumbers(fn, count, times = 1, point = 4){
  const numbers = []
  for(let i = 0; i <= count; i += 1){
    let number = eases[fn](i / count).toFixed(point) * times
    numbers.push(number)
  }
  return numbers
}

module.exports = getNumbers
