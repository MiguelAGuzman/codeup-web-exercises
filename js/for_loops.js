'use strict';


// function showMultiplicationTable(num) {
// for (let x = 1; x <= 10; x++) {
//     let answer = num * x;
//     console.log(num + "x" + x + "=" + answer);
//     }
// }
// showMultiplicationTable(7);



for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 180) + 20;

    if (randomNumber % 2 === 0) {
        console.log(randomNumber + ' is even.')
    } else {
        console.log(randomNumber + ' is odd.')
    }
}












