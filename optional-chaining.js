const user = {
  name: "John",
};
console.log(user?.name); // John
console.log(user?.age); // undefined

const user2 = null;
console.log(user2?.name); // undefined

console.log(typeof(null)); // object
console.log(typeof(undefined)); // undefined