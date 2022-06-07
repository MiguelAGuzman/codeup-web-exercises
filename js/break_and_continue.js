'use strict';


var stopNum = 27

for (var i =1; i <= 49; i+=2) {
    console.log('Here is an odd number: ' + i);

    if (i === stopNum) {
        console.log('Yikes! Skipping number: ' + i);
        break;
    }
}
for (i =29; i <= 49; i+=2) {
    if(i % 2 !== 0) {
        console.log('Here is an odd number: ' + i);
        continue;
    }
}




















