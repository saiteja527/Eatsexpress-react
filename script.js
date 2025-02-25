"use strict";
//Finding the duplicates in the array
// const arr = [1, 2, 3, 4, 5, 3, 2, 4];
// const res = []
// for (const elm of arr) {
//     if (arr.indexOf(elm) !== arr.lastIndexOf(elm) && !res.includes(elm)) {
//         res.push(elm)
//     }
// }
// console.log(res) 

// for (let i = 0; i < arr.length; i++){
//     for (let j = i + 1; j < arr.length; j++){
//         if (arr[i] === arr[j] && !res.includes(arr[j])) {
//             res.push(arr[j])
//         }
//     }
// }
// console.log(res)

//removes duplicates using set
// const res = (arr) => [...new Set(arr)];

// const obj = [1,23,3]
// const obj1 = [...obj]
// obj1.unshift(8)
// console.log(obj)
// console.log(obj1)

// inserting space between the words
// const str = "MyNameIsTeja"
// let res = ""
// for (let i = 0; i < str.length; i++){
//     if (str[i] === str[i].toUpperCase() && i !== 0) {
//         res+= " "
//     }
//     res += str[i]
// }
// console.log(res)
// str.split("").forEach((elm,idx) => {
//     if (elm === elm.toUpperCase() && idx !== 0) {
//         res+= " "
//     }
//     res += elm
// });
// console.log(res)

// const arr = [1, 2, 3, 4, 5]
// arr.splice(4, 1,"a","n")
// console.log(arr)

// const arr = [1, 2, 3, 4, 5]
// const newArr = arr.filter(elm => elm % 2 === 0)
// console.log(newArr)

// const arr = [1, 2, 3, 4, 5]
// const resSum = arr.reduce((sum, elm) => sum + elm, 0)
// console.log(resSum)

//optional chaining where in js it allows safely access deeply nested properties of an object without worrying about whether the properties are existed or not.
// const user = {
//     area: {
//         country: {
//             city: {
//                 town:"vizag"
//             }
//         }
//     }
// }
// console.log(user?.area?.country?.city?.town)

// const arr = [1, 2, 3, 4]
// console.log(arr?.[5])
// let user = {
//   details: {
//     "first-name": "Sai",
//   },
// };
// console.log(user?.details?.["first-name"]); // Output: "Sai"
// console.log(user?.details?.["last-name"]);  // Output: it returns undefined instead of throwing new error and even the property is not present in the object.

//converting object to array
// const obj = {
//   name: "Teja",
//   age: 25,
// };
// const newArr = Object.entries(obj)
// console.log(newArr)

//shallow copy
// let obj = [1, 2, 3];
// console.log({ ...obj });

//Infinite Currying
// function add(a) {
//   return function (b) {
//     if (b !== undefined) {
//       return add(a + b);
//     }
//     return a;
//   };
// }
// console.log(add(5)(4)(10)(10)(10)(10)())

// const add = (a) => (b) => a + b;
// console.log(add(3)(3));

// const obj = {
//   sum: 200,
// };
// console.log(obj.sum)
// delete obj.sum // where in js the delete opertor is applied for the properties of the object but not for the deletion of the object.
// console.log(obj.sum) // it return undefined where the property is remove permanently from the object

// const arr = [1, 2, 3, 4, 5]
// const [first,third] = arr
// console.log(first,third)

// console.log("" < 1) // it returns true bcoz in js where an empty string will be converted into a number as zero then in this case it will be converted as 0 < 1.

// console.log("greater" > "elephant") // it returns true where js will compare the value of the first letter in the strings if the first letter is similar then it compares with the next letter in lexicographic order to check the value of the letter.

// console.log(![] + []) // it returns false because in js [] is truthy value where the truthy value is combined with negation it becomes false.

// a = 10
// let a
// console.log(a)

//Fibnooci Series
// const n = 5;
// let arr = [0, 1];
// for (let i = 2; i <= n; i++) {
//   arr[i] = arr[i - 1] + arr[i - 2];
// }
// console.log(arr)

// Generator Function
// function* add() {
//   const a = 10;
//   const b = 20;
//   yield a;
//   yield b;
// }
// const generator = add();
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);

// const str1 = "hello 1234"
// const str2 = "world1"
// let i = 0
// let j = 0
// let res = ""

//using for loop
// for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
//     if (i < str1.length) res += str1[i]
//     if (i < str2.length) res += str2[i]
// }
// console.log(res)

//using while loop
// while (i < str1.length && j < str2.length) {
//     res += str1[i]
//     i += 1
//     res += str2[j]
//     j += 1
// }
// while (i < str1.length) {
//     res += str1[i]
//     i += 1
// }
// while (j < str2.length) {
//   res += str1[j];
//   j += 1;
// }
// console.log(res)

// var a = []
// var b = []
// console.log(a == b) // returns false bcoz it wont compares value instead it will compare the reference of the object
// console.log(JSON.stringify(a) == JSON.stringify(b)) // returns true

// let arr = [1, 2, 3, 4, 5]
// console.log(delete arr[3]);
// console.log(arr);

//Immediately Invoked Function Expression
// (function () {
//   console.log("hello world");
// })();

//fetching the data using promises and methods
// const data = { name: "SaiTeja", age: 20 };
// const err = "Error! while fetching the data";
// const state = true;
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     if (state) {
//       resolve(data);
//     } else {
//       reject(err);
//     }
//   });
// }
// fetchData()
//   .then((data) =>
//     console.log(`My name is ${data.name} and my age is ${data.age}`)
//   )
//   .catch((err) => console.log(err));

// Fetch the local JSON file using async/await
// async function fetchData() {
//   try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/11`);
//     if (!response.ok) {
//       throw new Error(`HTTP Error: ${response.status}`);
//     }
//       const result = await response.json();
//       console.log(result.title)
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//   }
// }
// fetchData();

//call : Runs the functions immediately, passing each arguments seperately
//apply : Runs the functions immediately, passing arguments as an array
//bind : Creates a new function with preset this and arguments, which you can call later

// function cook(inp1, inp2, inp3) {
//   console.log(
//     `My name ${this.name} is having meals list as ${inp1}, ${inp2}, ${inp3}`
//   );
// }
// const data1 = { name: "Sai" };
// const data2 = { name: "Teja" };
// const data3 = { name: "Hanuman" };
// cook.call(data1, "rice", "paneer", "sambar");
// cook.apply(data2, ["rice", "paneer", "sambar"]);
// const newCook = cook.bind(data3, "rice", "paneer", "sambar");
// newCook();

//callBack Hell or pyramid of doom
// function getUser(id, callback) {
//   setTimeout(() => {
//     console.log("Fetched User Data");
//     callback({ id, name: "saiTeja" });
//   }, 1000);
// }

// function getOrders(userId, callback) {
//   setTimeout(() => {
//     console.log("Fetched orders for user", userId);
//     callback(["order1", "order2"]);
//   }, 1000);
// }

// function getOrderDetails(orderId, callback) {
//   setTimeout(() => {
//     console.log("Fetched details for order", orderId);
//     callback({ orderId, price: 500 });
//   }, 1000);
// }

// getUser(1, (user) => {
//   getOrders(user.id, (order) => {
//     getOrderDetails(order[1], (details) => {
//       console.log(`Details of ${user.name}:`, details);
//     });
//   });
// });

// closure is feature in js which allows inner functions to access the outer scope of a function
// function outerFunction() {
//   let cnt = 0;
//   return function innerfunction() {
//     cnt++;
//     console.log("Count:", cnt);
//   };
// }

// const counter = outerFunction()
// counter()
// counter()
// counter()

// const fetchData = new Promise((resolve, reject) => {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => res.json())
//     .then((data) => resolve(data))
//     .catch((err) => reject(err));
// });
// fetchData
//   .then((data) => console.log("Fetched Data:", data.id + " " + "-" + " " + data.title))
//   .catch((err) => console.error("Error", err));

// async function fetchData() {
//   try {
//     let response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     let data = await response.json();
//     console.log("Fetched Daata:",data.id);
//   } catch (error) {
//       console.log(error)
//   }
// }
// fetchData()

// fetch("https://jsonplaceholder.typicode.com/posts/11")
//   .then((res) => res.json())
//   .then((data) => console.log("Fetched data:", data.id))
//   .catch((err) => console.error(err));


