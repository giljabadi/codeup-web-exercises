"use strict";
(function () {
    const oddFifty = () => {
        let oddInput = prompt('Enter an odd number between 1 and 50');
        while (oddInput % 2 === 0) {
            oddInput = prompt('Enter an odd number between 1 and 50');
        }
        if (oddInput % 2 !== 0) {
            console.log("Number to skip is: "+ oddInput);
            for (let i=1; i<=49; i+=2) {
                if (i === parseFloat(oddInput)) {
                    console.log("Yikes! Lets skip number: " + oddInput)
                }
                console.log("Here is an odd number: " + i)
            }
        }
    }
oddFifty()
})()



