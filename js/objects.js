(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
let person = new Object();
    person.firstName = "Gil";
    person.lastName = "Abadi";

    // console.log(person);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
person.sayHello = function () {
    console.log("Hello from " + person.firstName + " "+ person.lastName)
};
// person.sayHello()

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200.
     * If a shopper spends more than $200, they get a 12% discount.
     *
     * Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay.
     *
     * We know that Cameron bought $180,
     * Ryan $250
     * and George $320.
     *
     * Your program will have to
     * display a line with the name of the person,
     * the amount before the discount,
     * the discount, if any,
     * and the amount after the discount.
     *
     * Use a foreach loop to iterate through the array, and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    const discount = (x) => {
        shoppers.forEach(function (element) {
            let discountTotal = element.amount * .12
            // console.log(discountTotal)
            if (element.amount < 200) {
                console.log(element.name);
                console.log(element.amount + " before discount")
                console.log("There is no discount for " + element.name + ". They need " + (200 - element.amount) + " more dollars to get 12% off.");
            } else {
                console.log(element.name);
                console.log(element.amount + " before discount");
                console.log(discountTotal + " is your discount amount after 12% off your purchase price.");
                console.log(element.amount-discountTotal + " is your total amount after discount");
            }
        })
        
    }
    // discount()

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            "title": "Think and Grow Rich",
            "author": {
                "firstName": "Napoleon",
                "lastName": "Hill"
            }
        },
        {
            "title": "Atomic Habits",
            "author": {
                "firstName": "James",
                "lastName": "Clear"
            }
        },
        {
            "title": "The Art of War",
            "author": {
                "firstName": "Sun",
                "lastName": "Tzu"
            }
        },
        {
            "title": "Meditations",
            "author": {
                "firstName": "Marcus",
                "lastName": "Aurelius"
            }
        },
        {
            "title": "Rich Dad, Poor Dad",
            "author": {
                "firstName": "Robert",
                "lastName": "Kiyosaki"
            }
        }
    ]

const bookLoop = () => {
        books.forEach(function (input) {
            console.log("Book # " + (books.indexOf(input)+1));
            console.log("Title: " + input.title);
            console.log("Author: " + input.author.firstName + " " + input.author.lastName);
            console.log("---");
        })
}
bookLoop()
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // const createBook = (newTitle, newAuthor) => {
    //     books.title.push(newTitle)
    //     books.author.firstName.push(newAuthor)
    // }

    const createBook = (title, fn, ln) => {
        let newBook = {
            title: title,
            author: {
                firstName: fn,
                lastName: ln
            }
        }
        return newBook
    }

    let hp = createBook("Harry Potter", "JK", "Rowling");
    console.log(hp);

    const showBookInfo = (obj) => {
        if (typeof obj === 'object') {
            console.log("Title: " + obj.title);
            console.log("Author's First Name: " + obj.author.firstName);
            console.log("Author's Last Name: " + obj.author.lastName);
        }
        else {
            console.log("You didn't input an object");
        }
    }
    showBookInfo(hp);
    showBookInfo(books[0]);

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     *
     * - Create a function named `showBookInfo`
     * that accepts a book object and
     *  outputs the information described above. (aka title, fn & ln)
     *
     *  Refactor your loop to use your
     *  `showBookInfo` function.
     */
})();
