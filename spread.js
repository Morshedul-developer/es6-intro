const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]

const person = { name: 'Alice', age: 30 };
const newPerson = { ...person, city: 'New York' };
person.isMarried = true; // Modifying the original object does not affect the new object

console.log(person); // Output: { name: 'Alice', age: 31, isMarried: true }
console.log(newPerson); // Output: { name: 'Alice', age: 30, city: 'New York' }