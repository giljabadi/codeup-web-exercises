"use strict";
(function () {


// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// let randomColor = colors[Math.floor(Math.random() * colors.length)];

let str = prompt("What's your favorite color?")
const analyzeColor = (str) => {

    if (str == 'red') {
        alert('Strawberries are red')
    }
    else if (str == 'orange') {
        alert('Gils hair is orange')
    }
    else if (str == 'yellow') {
        alert('Dandelions are yellow')
    }
    else if (str == 'green') {
        alert('Green cups means you"re done')
    }
    else if (str == 'blue') {
        alert('The sky is blue')
    }
    else if (str == 'indigo') {
        alert('Indigo is groovy')
    }
    else if (str == 'violet') {
        alert('Violet or violent?!!?')
    }
    else {
        alert('I dont know anything about ' + str)
    }
    return str
}
    console.log(analyzeColor(str));


// let alert(prompt("What's your favorite color?");
// switch (result) {
//     case 'red':
//         alert('Strawberries are red')
//         break;
//     case "orange":
//         alert('Gils hair is orange')
//         break;
//     case "yellow":
//         alert('Dandelions are yellow')
//         break;
//     case "green":
//         alert("Green cups means you're done")
//         break;
//     case "blue":
//         alert('The sky is blue')
//         break;
//     case "indigo":
//         alert('Indigo is groovy')
//         break;
//     case "violet":
//         alert('Violet or violent?!!?')
//         break;
//     default: {
//         alert('I dont know anything about ' + 'color')
//     }
//
// }

let discount = Math.floor(Math.random() * 5) + 1;
alert("Your lucky number is: " + discount)
let total = prompt("What's your total checkout price at Walmart?")
const calculateTotal = (total, discount) => {
    if (discount == 0 || discount >5) {
        alert("You didn't receive a discount")
    }
    else if (discount == 1) {
        alert("Your total was $" + total + " & after your lucky discount is: $" + (total - (total*.1)))
    }
    else if (discount == 2) {
        alert("Your total was $" + total + " & after your lucky discount is: $" + (total - (total*.25)))
    }
    else if (discount == 3) {
        alert("Your total was $" + total + " & after your lucky discount is: $" + (total - (total*.35)))
    }
    else if (discount == 4) {
        alert("Your total was $" + total + " & after your lucky discount is: $" + (total - (total*.50)))
    }
    else if (discount == 5) {
        alert("Your total was $" + total + " & after your lucky discount is: FREE!")
    }
}
calculateTotal(total, discount)



const numberPrompt = (num) => {
    let confirmNumber = confirm("Would you like to enter a number? Press 'Ok' if yes, and 'Cancel' if no.")
    if (confirmNumber === true) {
        let num = parseInt(prompt("Enter your number here:"))
            if (Number.isInteger(num) === false) {
                alert("Incorrect input data type!")
            }
            if (num % 2 === 0) {
                alert("Your number is even!")
            }
            else {
                alert("Your number is odd!")
            }
        alert(num + 100)
            if (Math.sign(num) === -1) {
                alert("Your number is negative!")
            }
            else {
                alert("Your number is positive!")
            }
    }
    else {
        alert("No problem, have a great day!")
    }
        return num
}
numberPrompt()
}())