// let myname = "Rodgers";

/* myname = "Hawona";



myname = 5 */

// let mynum = "8";
// if (mynum === 5){
//     console.log('True');
// }
// else{
//     console.log('False');
// }

// console.log(myname);

// let a, b;

// a = 6
// b=4

// let sum = a+b;
// let product = a*b;
// let quotient = a/b;
// let subtraction = a -b;

// console.log("\n","sum:",sum, "\n","product:",product, "\n", "Division:", quotient, "\n","subtraction:", subtraction);

// console.log("\nsum:", sum);
// console.log("\nproduct:", product);
// console.log("\nDivision:", quotient);
// console.log("\nsubtraction:", subtraction);

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     console.log(result);
//     // return result;
//   }

// multiply(5, 8)

// function Sum(a,b){
//     console.log("Sum is:", a+b);
// }

// Sum(5, 5);

//Functions
/* 
    Take drivers name and age
    If age between 18 and 72 - Issue licence
    otherwise - Error
    Retun Name and message
*/

function DriversLicense(name, age){
    if (age >= 18 && age <=72){
        console.log("\nDriver:", name, "-Eligible");
    }else{
        console.log("\nDriver:", name, "-Not Eligible");
    }
}

DriversLicense("John", 15)

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What is your name? ', (name) => {
//   console.log(`Hello, ${name}!`);
//   rl.close();
// });
