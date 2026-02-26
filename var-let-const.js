console.log(city); // Undefined, because var declarations are hoisted but not initialized

const name = "John Doe"; // This variable cannot be reassigned
// name = "Jane Doe"; // This will throw an error

let age = 30; // This variable can be reassigned
age = 31; // This is allowed

var city = "New York"; // This variable can be reassigned and has function scope
city = "Los Angeles"; // This is allowed


var city = "Chicago"; // This will not throw an error, but it will overwrite the previous declaration of city