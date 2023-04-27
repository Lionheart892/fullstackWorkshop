const timmy = {
    name: "Timmy",
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};
const sarah = {
    name: "Sarah",
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
};
const rocky = {
    name: "Rocky",
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
};
//Define a function named calculateRefillTotal that takes a customer object as an argument.
//Calculate the refill total by multiplying the price per refill by the number of refills.
//If the customer has a subscription, calculate the subscription discount by multiplying the refill total by 0.25 and subtracting that amount from the refill total.
//If the customer has a coupon, subtract $10 from the refill total.
//Return the final refill total.
//Define a function named checkout that takes a customer object as an argument.
//Call the calculateRefillTotal function with the customer object as an argument and the final total.
//Return a string that includes the customer's name and the final refill total formatted as currency.
//Console log each customer name.
function calculateRefillTotal(customer) {
    let refillTotal = customer.pricePerRefill * customer.refills;
    if (customer.subscription){ 
        refillTotal -= (refillTotal * 0.25);
    }
    if (customer.coupon){
        refillTotal -= 10;
    }
    return refillTotal;
}
function checkout(customer) {
    const finalAmount = calculateRefillTotal(customer);
    return `your grand total is ${finalAmount.toFixed(2)}.`;
}

console.log('Timmy',checkout(timmy)); // "Your grand total is $65.00."
console.log('Sarah',checkout(sarah)); // "Your grand total is $37.50."
console.log('Rocky',checkout(rocky)); // "Your grand total is $102.50."