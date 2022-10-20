/*
Warm-Up:

Create a function named "average" that takes in an array of numeric values, and returns the average. If any of the elements in the array are non-numeric, the function should return false.

Ex:
average(["6", 5, 3, 2, 9])                       // returns 5
average([true, 6, 9, 3, 10])                     // returns false
average([{name: "Codey the Duck}, 10, 3, false]) // returns false
average([1, 2, 3, 4, 5])                         // returns 3
average(["5.5", "five", 3, 6, 7])                // returns false
 */

"use strict";
(function () {

    const isNumeric = (x) => !isNaN(parseFloat(x));

    let sum = 0
    function average (arr) {
        arr.forEach(function (num) {
            if (isNumeric(num)) {
                sum += parseFloat(num);
            } else {
                return false
            }
        })
        console.log(sum);
        return sum/arr.length
    }

    console.log(average(["6", 5, 3, 2, 9]));                       // returns 5
    console.log(average([true, 6, 9, 3, 10]));                     // returns false
    console.log(average([{name: "Codey the Duck"}, 10, 3, false])); // returns false
    console.log(average([1, 2, 3, 4, 5]));                       // returns 3
    console.log(average(["5.5", "five", 3, 6, 7]));                // returns false

})()