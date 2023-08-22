// arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] =fruits;
console.log(a, fruits[1]);

// Object destructuring
let user = { username: "Angel", age: 34 };
let { username, age } = user;

console.log(username, age);
console.log(username, user.age);

// spreed operator

let person = {  name: 'angel', age: 30 }
let country = 'Vzla';

let data = { id:1, ...person, country };
console.log(data);

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num +  values[0]);
    return num + values[0];
}

sum(5,1,3,8);