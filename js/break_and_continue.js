



const oddFifty = () => {
    let oddInput = prompt('Enter an odd number between 1 and 50');
    while (oddInput % 2 === 0) {
        oddInput = prompt('Enter an odd number between 1 and 50');
    }
    if (oddInput % 2 !== 0) {
        console.log("Number to skip is: "+oddInput);
        for (let i=1; i<=49; i+=2) {
            if (i === parseFloat(oddInput)) {
                console.log("Yikes! Lets skip number: " + oddInput)
                continue;
            }
            console.log("Here is an odd number: " + i)
        }
    }

}


oddFifty()

/*
var numberToStopAt = 5;

for (var i = 1; i < 100; i++) {

    console.log('Loop counter is: ' + i);

    if (i === numberToStopAt) {
        console.log('We have reached the stopping point: break!');
        // use the break keyword to exit from the while loop
        break;
        // nothing after the break will get processed
        console.log('You will never see this line.');
    }
}
 */