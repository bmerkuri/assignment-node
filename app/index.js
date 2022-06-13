const concat = require('./concat')
const sum = require('./sum')

const numbersToConcat = [1, 2, 3, 4, 5]
const numbersToAdd = [1, 2, 3, 4, 5]

const result = concat.concat(numbersToConcat)
const result2 = sum.sum(numbersToAdd)

console.log(`The result of the concat is: [ ${result} ]`)
console.log(`The result of the sum is: ${result2}`)