// IMMUTABILITY 
const numbers = [10, 20, 30, 40];
console.log(numbers)
// ADDING ITEMS
const addNumbers = [50, ...numbers]
console.log(addNumbers)

// REPLACE 50 IN PLACE OF 30 

const index = numbers.indexOf(30);
const addNumbers2 = [...numbers.slice(0, index), 50, ...numbers.slice(index)]
console.log(addNumbers2)

// UPDATING ITEMS 
const updated = numbers.map(a => a === 40 ? 80 : a);
console.log(updated)

// REMOVING ITEMS 
const removed = numbers.filter(a => a != 30)
console.log(removed)