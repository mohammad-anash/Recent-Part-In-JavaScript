// Recent Part In Javascript

// Table Of Content
// Symbol
// hoisting and scope
// nested Destructuring of array and object
// generator & iterator
// promise & async await
// FlatMap In Javascript

// Symbol In JavaScript
// In Javascript, symbols are unique value and primitive data type that can be used as an object Property. symbols are introduced in ECMAScript(ES6) and provided way to create unique identifier for object properties ensuring that no property ans keys collide, even if diffrent piece of code use the same string as a propertyKey.

// What is a Symbol

// UNIQUE VALUE => every time you create symbol, it is unique if you create two symbol with the same description they are not equal.

// PRIMITYPE DATATYPE => symbols are one of the primitype type in javascript. along with string, number, boolean, undefined, null and Bigint.

// IMMUTABLE DATA TYPE => A Immutable data type mean once a symbol create they connot be changed.

// You can create a symbol with symbol function

// EXAMPLE:-
let name = Symbol("anash");
// console.log(name) => Symbol(anash)

// If you want to get only symbol value you can get with description method

// EXAMPLE

const userName = Symbol("Michael");
// userName.description => Michael

// Symbal can be user for object properteis. this is particurlary usefull for creating properties and that won't accidentally collide with other property names.

let mySymbol = Symbol("anash");
let myObject = {};
myObject[mySymbol] = "value";
// myObject => value

// Why Use Symbol?

// Avoid Property Name Collision => symbols ensure that property keys are unique accidental collisions with other keys.

// REAL LIFE EXAMPLE => imagine you work on large project with multiple team. each team is responsilbe for adding diffrent feature to a user. thers is risk that two team might accidentally use the same string as a property key,which can lead bug

// EXAMPLE => Let's say Team A adds a property called id to the user object:

let userPerson = {
  name: "Alice",
  age: 30,
};

userPerson.id = "teamA-id-12345";

// Now, Team B also decides to add an id property for their feature:

userPerson.id = "teamB-id-67890";

// In this case team'B overwrite Team'A id causing a collision

// console.log(user.id) => teamB-id-67890

// TO PREVENT with collision, each team user symbol for their property

// EXAMPLE:-

let user = {
  name: "Alice",
  age: 30,
};

let teamAId = Symbol("id");
let teamBId = Symbol("id");

user[teamAId] = "teamA-id-12345";
user[teamBId] = "teamB-id-67890";

// Now even thought both team used same string Id to describe thier Symbols, the property are unique do not collide

console.log(user[teamAId]); // Outputs: 'teamA-id-12345'
console.log(user[teamBId]); // Outputs: 'teamB-id-67890'

// SCOPE AND HOSITING IN JAVASCRIPRT

// Scope => scope in javascripte are determine where variable and function are accessible. think of scope asa a contaiern for varialbe and function.

// There are two main type of scope

// GLOBAL SCOPE =>  varialble are declared outside  any function and varialeble. they can acces anywhere is the code
// LOCAL SCOPE => varialble are declared inside the function. they can only accessible inside the function or block

// GLOBAL SCOPE EXAMPLE:-

// if you declare variable outside of any function , it has global scope

var globalVar = "I am a global variable";

function testFunction() {
  console.log(globalVar); // Accessible here
}

console.log(globalVar); // Accessible here too

// FUNCTION SCOPE:- Variables declared inside a function are in the local (or function) scope.
// They Cannot Access Outside The Function.

function testFunction() {
  var localVar = "I am a local variable";
  console.log(localVar); // Accessible here
}

console.log(localVar); // Error: localVar is not defined

// BLOCK SCOPE:- With Let And Const Javascript Introduced Block Scope
// Variable declare with let and const  inside a blockare only acceesible within that scope.

if (true) {
  let blockVar = "I am a block-scoped variable";
  console.log(blockVar); // Accessible here
}

console.log(blockVar); // Error: blockVar is not defined

// HOISTING IN JAVASCRIPT
// hoisting in javascript is a behaviouse where variable and function declaration are move to the top their containing scope. during complie phase. this means you can use function and varialbe before they are actual declare in the code.

// VARIABLE HOISTING:- varialble declare with var are hoisted of the top of their scope but only the declaration on the intialiation

console.log(hoistedVar); // Undefined, not an error
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // "I am hoisted"

// FUNCTION HOISTING:- function declaration are completely hoisted with function body  are moved to the top of their scope.

hoistedFunction(); // "I am a hoisted function"

function hoistedFunction() {
  console.log("I am a hoisted function");
}

// LET AND CONST:- varialble declare with let and const are hoisted but they are not initalize unitl theris definition are encountered. they are in "Temporal Dead Zone" from the start of the block until the declaration in encountered.

console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am hoisted but not initialized";

console.log(hoistedConst); // ReferenceError: Cannot access 'hoistedConst' before initialization
const hoistedConst = "I am hoisted but not initialized";