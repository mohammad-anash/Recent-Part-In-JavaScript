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