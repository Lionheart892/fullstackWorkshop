const coffeeMenu = require("./coffee_data");
console.log(coffeeMenu);

// Print an array of all the drinks on the menu.
console.log(coffeeMenu.map(drink => drink.name));

// Print an array of drinks that cost 5 and under.
console.log(coffeeMenu.filter(drink => drink.price <= 5));

// Print an array of drinks that are priced at an even number.
console.log(coffeeMenu.filter(drink => drink.price % 2 === 0));

// Print the total if you were to order one of every drink.
const total = coffeeMenu.reduce((acc, drink) => acc + drink.price, 0);
console.log(total);

// Print an array with all the drinks that are seasonal.
console.log(coffeeMenu.filter(drink => drink.seasonal));

// Print all the seasonal drinks with the words "with imported beans" after the item name
const seasonaldrink = coffeeMenu.filter(drink => drink.seasonal);
const seasonalwithbeans = seasonaldrink.map(drink => drink.name + 'with imported beans');
console.log(seasonalwithbeans);