function add(a, b = 0) {
    const total = a + b;
    console.log(total);
}
add(5, 10);
add(5);

function fullName(firstName,lastName=''){
    const name = firstName + ' ' + lastName;
    console.log(name);
}
fullName('John', 'Doe');
fullName('John');