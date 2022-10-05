"use strict"
alert("Welcome to my website!")
let color = prompt("What's your favorite color?")
alert("Great! " + color + " is my favorite color too!")


// Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

alert("You have rented some movies for your kids:")
let mermaid = prompt("The little mermaid for how many days?")
let brotherBear = prompt("The brother bear for how many days?")
let hercules = prompt("The hercules for how many days?")
alert("Every day of rental is $3 so your total will be: " +  (mermaid*3 + brotherBear*3 + hercules*3))

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

alert("Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?")
let google = prompt("How many hours did you work at Google this week?")
let facebook = prompt("How many hours did you work at Facebook this week?")
let amazon = prompt("How many hours did you work at Amazon this week?")
alert("Your weekly salary is " +  (google*400 + facebook*350 + amazon*380))


// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.



alert("You can be enrolled in a class only if the class is not full and the class schedule does not conflict with your current schedule.")
let fullClass = confirm("Is the class full? Press 'ok' if its full & cancel if it's not")
let conflict = confirm("Does your schedule conflict? Press 'ok' if its in conflict & cancel if it's not")
if (fullClass == true) {
    alert("Can't enroll ya!")
}
if (conflict == true) {
    alert("Can't enroll ya!")
}
else {
    alert("ENROLLED! :)")
}



//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
alert("A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.")
let amount = prompt("How many products are you buying?");
let premium = confirm("Are you a Premium Member? Press 'Ok' if you are, and 'Cancel' if not:");
let expired = confirm("Is the offer expired? Press 'Ok' if it's expired, and 'Cancel' if not:");

    if (amount > 2 || premium == true && expired == false) {
        alert("The offer can be applied! :)")
    }
    else {
        alert("The offer cannot be applied :(")
    }



