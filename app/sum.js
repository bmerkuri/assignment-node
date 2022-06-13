const fs = require('fs')

let numbersFromJson = fs.readFileSync('array.json')

let numbersJson = JSON.parse(numbersFromJson)

const numbers = numbersJson.number

const sumJson = numbers.reduce((sum, nums) => sum + nums, 0)

function sum(arr) {
    return arr.reduce(function(a, b) {
        return a + b
    }, sumJson)
}

module.exports.sum = sum