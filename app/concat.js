const _ = require('lodash')

const fs = require('fs')

let numbersFromJson = fs.readFileSync('array.json')

let numbersJson = JSON.parse(numbersFromJson)

const numbers = numbersJson.number


function concat(arr) {
    return _.concat(arr, numbers)
}

module.exports.concat = concat
