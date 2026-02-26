const person = {
  name: 'Kamal',
  age: 30,
  religion: 'Islam',
  occupation: 'Software Engineer'
};

Object.seal(person);
person.address = '123 Main St'; // This will not be added
delete person.age; // This will not delete the age property
person.name = 'Ahmet'; // This will update the name property
console.log(person);

