// const mySym = Symbol("key1") // Decelaring symbols


// Objects literals:

// const tinderUser = {} // literals declaration of object

// const JsUser = { // decelaring object
//     name: "Roshan",
//     "Fullname": "Roshan Shah",
//     [mySym]: "myKey1",
//     agr: 20,
//     location: "Nepal",
//     email: "roshan@gmail.com",
//     isLoggedin: false,
//     lastLoginDay: ["Monday", "Sunday"]
// };

//  calling objects
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Fullname"]);
// console.log(JsUser[mySym]);

// overwriting object
// JsUser.age = 21;
// JsUser.name = "Roshu"

//  to freeze to change or overwrite
// Object.freeze(JsUser)

// function
// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greeting2 = function(){
//     console.log(`Hello Js user, ${this.name}`);
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());


// Objects Singleton:

// declar using constructor
// const tinderUser = new Object(); // singleton decelaration

// tinderUser.id = "123bvffbg";
// tinderUser.name = "Roshan";
// tinderUser.gender = "male";
// tinderUser.profilePicUrl = "www.google.com/pic1.jpg";
// console.log(tinderUser);


//  Declaring object inside object
// const user = {
//     email : "skljfd@gmail.com",
//     fullname : {
//         userFullname:{
//             firstname: "Roshan",
//             Lastname: "Shah"
//         }
//     }
// }


// //  Accessing object inside object using dot'.'
// console.log(user.fullname.userFullname.firstname);


// Merging objects
const ob1 = { 1: 'a', 2: 'b' };
const ob2 = { 3: 'c', 4: 'd' };

const ob3 = Object.assign({}, ob1, ob2) // First way
const ob4 = { ...ob1, ...ob2 } // Second way
console.log(ob3);
console.log(ob4);
