// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas seperating them.
// d. Connect the coffee_data.js file to the index.js file.

const coffeeMenu = [
    {
        name: "cappuccino",
        price: 8, // remove quotes to make a number
        seasonal: false,
    },
    {
        name: "espresso", // add quotes to make a string
        price: 5,
        seasonal: false,
    },  // add a comma to separate 
    {
        name: "latte",
        price: 5,
        seasonal: false,
    },
    {
        name: "affogato", // add quotes to make a string
        price: 9, // remove quotes to make a number
        seasonal: true,
    }, 
    {
        name: "macchiato",
        price: 6, // remove quotes to make a number
        seasonal: false,
    },  // add a comma to separate 
    {
        name: "americano", // add quotes to make a string
        price: 7,
        seasonal: false,
    },  // add a comma to separate 
    {
        name: "iced coffee",
        price: 6, // remove quotes to make a number
        seasonal: false,
    },
    {
        name: "frappe", // add quotes to make a string
        price: 8, // remove quotes to make a number
        seasonal: false,
    },  // add a comma to separate 
    {
        name: "cuban espresso",
        price: 10,
        seasonal: true,
    }
];

module.exports = coffeeMenu;