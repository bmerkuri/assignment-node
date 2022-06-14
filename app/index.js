
const fs = require('fs')

const concat = require('./concat')

const sum = require('./sum')



const data = JSON.parse(fs.readFileSync('array.json', 'utf8')).array;

const numbersToAdd = [1, 2, 3, 4, 5]

const con = concat.concat(numbersToAdd);

const sumTotale = sum.sum(con);


console.log(`The result of the concat is: [ ${con} ]`)


console.log("Total sum is:" + sumTotale);



function resolveAfter2Seconds() {

    return new Promise(concat => {

        setTimeout(() => {

            concat(con);

        }, 2000);

    });

}



async function asyncCall() {


    const result = await resolveAfter2Seconds();

    console.log(result);



}

asyncCall();