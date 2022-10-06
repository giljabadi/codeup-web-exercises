"use strict";

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];

// const analyzeColor = (str) => {
//     let result
//     if (str == 'red') {
//         result = 'Strawberries are red'
//     }
//     else if (str == 'orange') {
//         result = 'Gils hair is orange'
//     }
//     else if (str == 'yellow') {
//         result = 'Dandelions are yellow'
//     }
//     else if (str == 'green') {
//         result = 'Green cups means you"re done'
//     }
//     else if (str == 'blue') {
//         result = 'The sky is blue'
//     }
//     else if (str == 'indigo') {
//         result = 'Indigo is groovy'
//     }
//     else if (str == 'violet') {
//         result = 'Violet or vioolent?!!?'
//     }
//     else {
//         result = 'I dont know anything about ' + str
//     }
//     return result
// }
// console.log(analyzeColor(randomColor));

let result

switch (colors) {
    case 'red':
        result = 'Strawberries are red'
        break;
    case "orange":
        result = 'Gils hair is orange'
        break;
    case "yellow":
        result = 'Dandelions are yellow'
        break;
    case "green":
        result = "Green cups means you're done"
        break;
    case "blue":
        result = 'The sky is blue'
        break;
    case "indigo":
        result = 'Indigo is groovy'
        break;
    case "violet":
        result = 'Violet or violent?!!?'
        break;
    default: {
        result = 'I dont know anything about ' + 'color'
    }

}


/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */