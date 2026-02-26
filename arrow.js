const add = (a, b) => a + b;

const square = (x) => x * x;

const pi = () => 3.1416;

console.log(add(2, 3)); // Output: 5
console.log(square(4)); // Output: 16
console.log(pi()); // Output: 3.1416

document.getElementById("btn").addEventListener("click", (e) => {
  console.log("Button clicked!", e.target);
});
