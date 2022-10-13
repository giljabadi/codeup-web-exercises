// ================ !! Mini-exercises !!

"use strict"
// Write a function, returnFive, that returns the number five. No inputs should be defined.
const returnFive = () => 5;



// Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.

const isFive = (x) => x == 5

// how many inputs should the function have? 1
// what are the data types for the inputs? num or string
// what is the data type of the output/return value? boolean



// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.

const isShortWord = (x) => x.length < 5


// how many inputs? 1
// what data type for inputs? string
// what is the return type? boolean


// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.

const isSameLength = (x, y) => x.length == y.length

// How many inputs? 2
// What type of input? str
// What type of output? boolean

//
// let user = prompt("Enter username");
// let pw = prompt("Enter password");
// if (user == "ginganinja" && pw == "codeup") {
//     console.log("You have successfully logged in")
// } else {
//     console.log("Credentials incorrect")
// }

/*
Write a function that takes in a number and returns the number passed multiplied by the number 5. If we pass anything other than a number into the function, the function should return the number 0.
 */

const multFive = (x) => {
    if (parseFloat(x) !== x){
        return 0
    }
    return x*5
}
// console.log(multFive(0));


/*
Warm-Up:
Write a function named "inBetween" that accepts three inputs: min, max, num, and returns a boolean determining whether or not the "num" parameter is in between the min and max numbers.

EX:
inBetween(1, 10, 5) returns true
inBetween(25, 26, 25) returns false
inBetween(0, 1, 0.5) returns true
 */

const inBetween = (min, max, num) => num > min && num < max

// console.log(inBetween(1, 10, 5));
// console.log(inBetween(25, 26, 25));
// console.log(inBetween(0, 1, 0.5));

/*
Create a variable called num that is equal to 0. Write a while loop that increments "num" by 5 so long as num is less than 100. Do the same thing with a do-while.
 */

let i = 0;
while (i < 100) {
    console.log(i);
    i+=5
}
