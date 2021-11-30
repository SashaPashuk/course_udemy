'use strict';
// TASK13-------------------------------------------------------------
if (4 == 4) {
    console.log('OK!');
} else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log("Багато");
} else {
    console.log('Ok!');
};

(num == 50) ? console.log('Ok!') : console.log('Error');


const num = 50;

switch (num) {
    case 49: 
        console.log("Невірно")
        break;
    case 100:
        console.log("Невірно")
        break;
    case 50:
        console.log("в точку")
}