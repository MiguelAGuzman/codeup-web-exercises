'use strict';

// var x = 2;
//
//  while (x < 65537) {
//
//      console.log(x);
//      x *= 2;
//  }


function icecreamCo() {
    var allCones = Math.floor(Math.random() * 50) + 50;
    var customers = 0

    do {
        customers++;
        let conesSold = (Math.floor(Math.random() * 5) + 1);
        console.log('Customer buys ' + conesSold + ' cones. We have ' +
        allCones + ' left');
        if (conesSold > allCones) {
            console.log('Not enough cones!');
        } else {
            allCones -= conesSold;
            console.log('Cannot sell cones, only have ' + allCones);
        }
    } while (allCones > 0);
    console.log('All cones are sold.');
}
icecreamCo();



