// ================ !! Mini-exercises !!

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


let user = prompt("Enter username")
let pw = prompt("Enter password")
if (user == "ginganinja" && pw == "codeup") {
    console.log("You have successfully logged in")
} else {
    console.log("Credentials incorrect")
}