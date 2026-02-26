const person = {
  name: 'John Doe',
  age: 30,
  isMarried: true,
  hobbies: ['reading', 'traveling', 'cooking'],
};

// Object destructuring
const { name, age, isMarried, hobbies: hobbiesList } = person;
console.log(name); // Output: John Doe
console.log(age); // Output: 30
console.log(isMarried); // Output: true
console.log(hobbiesList); // Output: ['reading', 'traveling', 'cooking']

// Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]