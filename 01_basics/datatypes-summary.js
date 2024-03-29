// JS is dynamically typed languages, type checking takes place at runtime or execution time. 
// This means that variables are checked against types only when the program is executing. 
// Some examples of programming languages that belong to this category are Python, JavaScript, 
// Lisp, PHP, Ruby, Perl, Lua, and Tcl.

// how to place data in memory & access data there are 2 types Primitive & non primitive

//  Primitive - call by value (changes in copy not original one)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) - call by Reference

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let myYouTubeName = "hiteshchoudharydotcom";
let anotherName = myYouTubeName;
anotherName = "chaiaurcode";

console.log(myYouTubeName);
console.log(anotherName);

let userOne = {
    email: 'abc@gmail.com',
    upi: 'user@ybl',
}

let userTwo = userOne;
userTwo.email = "user@google.com";
console.log(userOne.email);
console.log(userTwo.email);