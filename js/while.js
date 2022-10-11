"use strict";
(function () {
    const multiplyByTwo = (x) => {
        x=2
        while (x < 65535) {
            console.log(x *= 2);
        }
    }
    // multiplyByTwo()

let result = 5;
let totalCones = Math.floor(Math.random() * 50) + 50;
// _______________________
const iceCream = () => {
do {
    let conesSold = Math.floor(Math.random() * 5) + 1
    totalCones -= conesSold
    console.log(conesSold + " cones sold...");
} while (result < totalCones) {
        if (totalCones === 4 || totalCones === 3 || totalCones === 2 || totalCones === 1) {
            console.log("Cannot sell you " + totalCones + " more cone(s) " + "I have " + (totalCones-1) + " :-(")
        } else {
            console.log("Yay I sold them all!");
        }
    }

}
    iceCream();

})();

/*
An ice cream seller can't go home until she sells all of her cones.
First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop.
Inside the loop, your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients.
Use a do-while loop to log to the console the amount of cones sold to each person.

Outcome:
5 cones sold...  // if there are enough cones
Cannot sell you 6 cones I only have 3...  // If there are not enough cones
Yay! I sold them all! // If there are no more cones
 */