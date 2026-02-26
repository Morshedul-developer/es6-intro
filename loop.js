const numbers = [1, 2, 3, 4, 5];

// Using for of loop
for(const number of numbers) {
    console.log(number);
}

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Using for in loop
for(const key in person) {
    const value = person[key];
    console.log(key, value);
}