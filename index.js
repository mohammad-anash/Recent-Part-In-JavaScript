// // Recent Part In Javascript

// // Table Of Content
// // Symbol
// // hoisting and scope
// // nested Destructuring of array and object
// // generator & iterator
// // promise & async await
// // FlatMap In Javascript

// // Symbol In JavaScript
// // In Javascript, symbols are unique value and primitive data type that can be used as an object Property. symbols are introduced in ECMAScript(ES6) and provided way to create unique identifier for object properties ensuring that no property ans keys collide, even if diffrent piece of code use the same string as a propertyKey.

// // What is a Symbol

// // UNIQUE VALUE => every time you create symbol, it is unique if you create two symbol with the same description they are not equal.

// // PRIMITYPE DATATYPE => symbols are one of the primitype type in javascript. along with string, number, boolean, undefined, null and Bigint.

// // IMMUTABLE DATA TYPE => A Immutable data type mean once a symbol create they connot be changed.

// // You can create a symbol with symbol function

// // EXAMPLE:-
// let name = Symbol("anash");
// // console.log(name) => Symbol(anash)

// // If you want to get only symbol value you can get with description method

// // EXAMPLE

// const userName = Symbol("Michael");
// // userName.description => Michael

// // Symbal can be user for object properteis. this is particurlary usefull for creating properties and that won't accidentally collide with other property names.

// let mySymbol = Symbol("anash");
// let myObject = {};
// myObject[mySymbol] = "value";
// // myObject => value

// // Why Use Symbol?

// // Avoid Property Name Collision => symbols ensure that property keys are unique accidental collisions with other keys.

// // REAL LIFE EXAMPLE => imagine you work on large project with multiple team. each team is responsilbe for adding diffrent feature to a user. thers is risk that two team might accidentally use the same string as a property key,which can lead bug

// // EXAMPLE => Let's say Team A adds a property called id to the user object:

// let userPerson = {
//   name: "Alice",
//   age: 30,
// };

// userPerson.id = "teamA-id-12345";

// // Now, Team B also decides to add an id property for their feature:

// userPerson.id = "teamB-id-67890";

// // In this case team'B overwrite Team'A id causing a collision

// // console.log(user.id) => teamB-id-67890

// // TO PREVENT with collision, each team user symbol for their property

// // EXAMPLE:-

// let user = {
//   name: "Alice",
//   age: 30,
// };

// let teamAId = Symbol("id");
// let teamBId = Symbol("id");

// user[teamAId] = "teamA-id-12345";
// user[teamBId] = "teamB-id-67890";

// // Now even thought both team used same string Id to describe thier Symbols, the property are unique do not collide

// console.log(user[teamAId]); // Outputs: 'teamA-id-12345'
// console.log(user[teamBId]); // Outputs: 'teamB-id-67890'

// // SCOPE AND HOSITING IN JAVASCRIPRT

// // Scope => scope in javascripte are determine where variable and function are accessible. think of scope asa a contaiern for varialbe and function.

// // There are two main type of scope

// // GLOBAL SCOPE =>  varialble are declared outside  any function and varialeble. they can acces anywhere is the code
// // LOCAL SCOPE => varialble are declared inside the function. they can only accessible inside the function or block

// // GLOBAL SCOPE EXAMPLE:-

// // if you declare variable outside of any function , it has global scope

// var globalVar = "I am a global variable";

// function testFunction() {
//   console.log(globalVar); // Accessible here
// }

// console.log(globalVar); // Accessible here too

// // FUNCTION SCOPE:- Variables declared inside a function are in the local (or function) scope.
// // They Cannot Access Outside The Function.

// function testFunction() {
//   var localVar = "I am a local variable";
//   console.log(localVar); // Accessible here
// }

// console.log(localVar); // Error: localVar is not defined

// // BLOCK SCOPE:- With Let And Const Javascript Introduced Block Scope
// // Variable declare with let and const  inside a blockare only acceesible within that scope.

// if (true) {
//   let blockVar = "I am a block-scoped variable";
//   console.log(blockVar); // Accessible here
// }

// console.log(blockVar); // Error: blockVar is not defined

// // HOISTING IN JAVASCRIPT
// // hoisting in javascript is a behaviouse where variable and function declaration are move to the top their containing scope. during complie phase. this means you can use function and varialbe before they are actual declare in the code.

// // VARIABLE HOISTING:- varialble declare with var are hoisted of the top of their scope but only the declaration on the intialiation

// console.log(hoistedVar); // Undefined, not an error
// var hoistedVar = "I am hoisted";
// console.log(hoistedVar); // "I am hoisted"

// // FUNCTION HOISTING:- function declaration are completely hoisted with function body  are moved to the top of their scope.

// hoistedFunction(); // "I am a hoisted function"

// function hoistedFunction() {
//   console.log("I am a hoisted function");
// }

// // LET AND CONST:- varialble declare with let and const are hoisted but they are not initalize unitl theris definition are encountered. they are in "Temporal Dead Zone" from the start of the block until the declaration in encountered.

// console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
// let hoistedLet = "I am hoisted but not initialized";

// // console.log(hoistedConst); // ReferenceError: Cannot access 'hoistedConst' before initialization
// // const hoistedConst = "I am hoisted but not initialized";

// // NESTED DSTRUCUTRING IN JAVASCRIPT ARRAYS AND OBJECT

// // What is the means of Destructuring ?

// // The mean of Destructuring is very simple take large part and divide into small parts is called Detructuring

// // SEE EXAMPLE

// const nums = [1, 2, 3, 4];

// const [x, y, w, z] = nums;
// // answer x = 1, y = 2 w = 3, z = 4;

// // let's take an simple example first then we try four three level object and array destructuring in nested;

// // EXAMPLE => in this example i have A 2D Array.
// const arr = [1, [2, 3], 4];

// const [a, [b, c], d] = arr;
// // answers => a = 1, b = 2, c = 3, d = 4;

// // in the example i have a array [1, [2, 3], 4];
// // first i open brackets and then i write a the value a is 1 because the first value in arr is 1 so first 1 value is assign in a variable and so on.

// // NESTED DESTRUCURING WITH OBJECT

// const person = {
//   name: "anash",
//   address: {
//     city: "New York",
//     zip: 10001,
//   },
// };
// const {
//   name,
//   address: { city, zip },
// } = person;

// // console.log(name, city, zip);

// // in this example i have a person object the first property is name property and one more called address.
// // when i write const {name} it's means the first value of person object is name : "anash", this properties
// //  is assign in name and when i write address. address: { city, zip } . you can see in my person object i have a object called address inside this i have two property city and zip this two property are assign is address: { city, zip }

// // I hope now you can easily understand Destructuring with any level

// // let's Destructuring ARRAY OF OBJECT

// const data = {
//   users: [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 25 },
//   ],
// };
// const {
//   users: [{ name: firstUserName, age: firstUserAge }],
// } = data;
// console.log(firstUserAge); // John
// console.log(firstUserAge); // 25

// // You can see how Destructure ARRAY OF OBJECT

// // NOW LET'S DEEP DIVE INTO OBJECT DSTRUCTURING

// const complexData = {
//   id: 1,
//   info: {
//     personal: {
//       name: "John",
//       age: 30,
//     },
//     address: {
//       city: "New York",
//       coordinates: [40.7128, -74.006],
//     },
//   },
// };
// const {
//   info: {
//     personal: { userName, age },
//     address: {
//       userCity,
//       coordinates: [lat, long],
//     },
//   },
// } = complexData;
// console.log(name); // John
// console.log(age); // 30
// console.log(userCity); // New York
// console.log(lat); // 40.7128
// console.log(long); // -74.0060

// // WHAT IS PROMISES IN JAVASCRIPT ?

// // A Promises in javascript like containr for future value . think of its gurantee that you will get some result. either a succes or failure at some point in the future. promises help you handle aynchronus operation more easily such as loading data from a server , reading a file or waiting for a timeout.

// // THE THREE STATE OF PROMISES

// // PENDING => the promises still waiting for result. it has'nt been fullfilled  or rejected yet.
// // FULFILLED => the promises has completed successfully and you have value.
// // REJECTED => the promises has failed and you have a reason for the future (usaully an error).

// // HOW TO CREATE A PROMISES
// // to create a promises using promis constructor.
// let myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Data fetched successfully!");
//   } else {
//     reject("Error fetching data.");
//   }
// });

// // the resolve and reject statment basis on the codition
// // if condition was true then resolve function call either reject function call.

// // you handle promises using the then, catch and finally

// // then handle the success case (fullfilled)
// // catch handle the failure case (rejected)

// myPromise
//   .then((result) => {
//     console.log(result); // "Data fetched successfully!"
//   })
//   .catch((error) => {
//     console.error(error); // "Error fetching data."
//   });

// // Chain Promises

// // you can chain multiple then methods to handle a squence  of asynchronus operations
// myPromise
//   .then((result) => {
//     console.log(result); // "Data fetched successfully!"
//     return new Promise((resolve) => resolve("Another promise resolved!"));
//   })
//   .then((newResult) => {
//     console.log(newResult); // "Another promise resolved!"
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// // ASYNC AWAIT IN JAVASCRIPT

// // async and await keywords in programming that help you work with  asynchronus operation in simple terms and redeaable way.

// // ASYNC KEYWORD
// //  you put async keyword in front of function declaration  to indicate that it is an asynchronus function.
// // An Async Functiona Return always Promise

// // ASYNC FUNCTION EXAMPLE

// async function asyncFunctionExample() {
//   // statment
// }

// // AWAIT KEYWORD

// // Inside async function you use await only inside async function
// // Await pauses the execution of the async function until the promise it is waiting for result (either resolve, reject)

// // // EXAMPLE

// async function myFunction() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("working"), 2000);
//   });

//   let result = await promise;

//   console.log(result);
// }

// myFunction();

// async function getUserData(userId) {
//   try {
//     let userResponse = await fetch(`https://api.example.com/users/${userId}`);
//     let userData = await userResponse.json();

//     let postsResponse = await fetch(
//       `https://api.example.com/users/${userId}/posts`
//     );
//     let userPosts = await postsResponse.json();

//     console.log(userData, userPosts);
//   } catch (error) {
//     // console.error("Error fetching data:", error);
//   }
// }

// getUserData(1);
// // // fetch: Asynchronously fetches data from the server.
// // // await fetch(...): Waits for the fetch operation to complete and returns the response object.
// // // await response.json(): Waits for the response to be parsed as JSON.

// // let's practise with promises

// // Print Promises start when you start code
// // create a promise that resolve  after 3 second.
// // log uout promise while it's pending.
// // print out "program in process" as well.
// // print put "program complete " when promise is complete after 3 second

// console.log("Program start");

// const practisePromises = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Program complete"), 3000);
// });

// practisePromises.then((value) => console.log(value));

// // NEXT EXERCISE

// // the next exercise is similar to previose
// // what you do  create a promise that resolve after 3 second and then reject after 2 second;

// // const userPromise = new Promise((resolve, reject) => {
// //   setTimeout(() => resolve("run after 3 second"), 3000);
// //   setTimeout(() => reject("run after 2 second"), 2000);
// // });

// // userPromise.then((value) => console.log(value));
// // userPromise.catch((value) => console.log(value));

// // ASYNC AWAIT EXERCISE

// // create a function called fetchPokemon that returns a promise that resolve after 2 second with this value
// // {data: {data: "pokemon", "power": 3}}

// // print out program starting

// // create async function that uses await to wait for the data come back from fetchPokemon then log out tha data

// // call the async function you created
// // log out  "Program complete";

// const fetchPokemon = new Promise((resolve, reject) => {
//   setTimeout(() => resolve({ data: { data: "pokemon", power: 3 } }), 2000);
// });
// console.log("program start");

// async function getData() {
//   try {
//     let result = await fetchPokemon;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// console.log("Program complete");
// getData();

// // NEXT EXERCISE

// // create a function called fetchUser that returns a promise that resolve after 2 second with this value
// // {data: {user: "monkey", admin: true}}

// // print out program starting

// // create a function called login that takes as object as an argument. if the object has property "admin" with a value of true . then log out "successfully" logged in  otherwise  log out "Failed to log" please try again

// // Print out "program start..."

// // Create async function that uses await to wait for the data to comes back from fetchuser

// // call the async function you created
// // log out  "Program complete";

// const fetchUser = new Promise((resolve, reject) => {
//   setTimeout(() => resolve({ user: { user: "monkey", admin: true } }), 3000);
// });

// const login = (user) => {
//   console.log(user.admin);
//   if (user.admin === true) {
//     console.log("successfully");
//   } else {
//     console.log("failed to log in please try again");
//   }
// };

// const fetchData = async () => {
//   const data = await fetchUser;
//   login(data.user); // Pass the nested user object to the login function
// };

// fetchData();

// NEXT EXERCISE

// 1. Create a function called "fetchFast" that returns
//    a Promise that resolves with the String "Fast Done!"
//    after 2 seconds
// 2. Create a function called "fetchSlow" that returns
//    a Promise that resolves with the String "Slow Done"
//    after 6 seconds
// 3. Print out "Program starting..."

// 4. Create an async function that uses await to wait for
//    the data to comes back from "fetchFast" then log out
//    the data. Then use await to wait for the data to come
//    back from "fetchSlow" and log it out right after.

// 5. Call the async function you created
// 6. Log out "Program complete!"

// 7. How long does this take and why?
// 8. How could you speed it up?

const fetchFast = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fast Done!");
    }, 2000);
  });
};
//6
const fetchSlow = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Slow Done!");
    }, 6000);
  });
};

console.log("Program starting...");
const firstTimestamp = new Date();

const useData = async () => {
  const fastResult = fetchFast();
  console.log(fastResult);
  // ??
  const slowResult = fetchSlow();
  console.log(slowResult);

  const result = await Promise.all([fastResult, slowResult]);
  console.log(result);

  const secondTimestamp = new Date();
  const timeElapsed = secondTimestamp - firstTimestamp;
  console.log("Program complete!", timeElapsed);
};

useData();

// Fetch Data From User

async function fetchDataFromUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchDataFromUser();
