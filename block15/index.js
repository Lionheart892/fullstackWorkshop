// 1. Open VS Code and create a file named: index.js.
// 2. Create a object name Customer and add keys/ values.
const customer = {
    firstName: 'jake',
    lastName: 'smith',
    email: 'jaekSmih!aol.com',
    phone: undefined,
    zipCode: '631',
    favoriteFlavors: 32,
    cupSize: 'medium',
    favoriteStore: 'Target',
    firstVisit: false
};
console.log(customer);

// 3. Modifty the object (email, phone, zipCode, favoriteFlavors)
customer['email'] = 'Jak3Smith1992@email.com';
customer['phone'] = '3195551234';
customer['zipCode'] = '63132';
customer['favoriteFlavors'] = 'coffee', 'strawberry', 'matcha'
console.log(customer);

// 4. Delete 2 keys(zipCode, favoriteStore)
delete customer['zipCode'];
delete customer['favoriteStore'];
console.log(customer);

// 5. Add 3 keys and values using dot notation
customer.toppings = 'chocolate sprinkles', 'wafer straws', 'gummy bears';
customer.futureFlavors = 'mango'
customer.todaysPurchaseCost = 5.32
console.log(customer);

// 6. Show your keys in an array
const customerKeys = Object.keys(customer);
console.log(customerKeys);
