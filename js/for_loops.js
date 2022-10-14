"use strict";
(function () {

    const showMulitplicationTable =(x) => {

        console.log(x * 1)
        console.log(x * 2)
        console.log(x * 3)
        console.log(x * 4)
        console.log(x * 5)
        console.log(x * 6)
        console.log(x * 7)
        console.log(x * 8)
        console.log(x * 9)
        console.log(x * 10)

    }

    const randomForLoop = () => {

        for (let x=1; x<=10; x++) {
            let rand = Math.floor(Math.random() * 200) + 20;
            if (rand % 2 == 0) {
                console.log(rand + " is even")
            }
            else {
                console.log(rand + " is odd")
            }
        }
    }
// randomForLoop()

    const pyramid = () => {
        for (let i=1; i<=9; i++){
            let codeup = ""
            for (let j=1; j<=i; j++) {
                codeup+=i
            }
            console.log(codeup);
        }
    }
pyramid()

/////////////////////////////////

    const minusFive = () => {
        for (let i=100; i>=5; i-=5) {
            console.log(i)
        }
    }
// minusFive()


})()