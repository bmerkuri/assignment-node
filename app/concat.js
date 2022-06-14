
const _ = require('lodash')

const arr1 = [6, 7, 8, 9, 10]

const concat = (arr) => {
    return _.concat(arr, arr1);
}

module.exports.concat = concat;