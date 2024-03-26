// function mul (a=5, b=10) {
//     return a*b;
// }
// let m = mul(10, 20);
// console.log(m);


// function rollDie (n = 6) {
//     return Math.floor(Math.random () * n) + 1;
// }
// let r = rollDie();
// console.log(r);


// var b = function () {
//     return function c () {
//     }
// }
// console.log(b());


// async function getData () {
//     return "Namaste JS"
// }
// const data = getData ();
// console.log(data);
// data.then(res => console.log(res));


// const p = new Promise ((resolve, reject) => {
//     resolve ("Promise Resolved Value");    
//     reject ("Promise Rejected Value");
// });
// async function pro () {
//     return p;
// }
// const data = pro ();
// data.then(res => console.log(res));
// data.catch(err => console.error(err));


// const p = new Promise ((resolve, reject) => {
//     setTimeout (() => {
//         resolve ("Promise Resolved Value");    
//     }, 5000);
// });
// function getData () {
//     p.then(res => console.log(res));
//     console.log("Namaste JS");
// }
// getData();


//By Using Aysnc & Await

// const p = new Promise ((resolve, reject) => {
//     setTimeout (() => {
//         resolve ("Promise Resolved Value");    
//     }, 5000);
// });
// async function getData () {
//     const val = await p;
//     console.log("Namaste JS");
//     console.log(val);
// }
// getData();

// const p = new Promise ((resolve, reject) => {
//     setTimeout (() => {
//         resolve ("Promise Resolved Value");    
//     }, 5000);
// });
// async function getData () {
//     console.log("Hello World");
//     const val = await p;
//     console.log("Namaste JS");
//     console.log(val);
//     const val1 = await p;
//     console.log("Namaste JS1");
//     console.log(val1);
// }
// getData();

//By Using two promises

// const p1 = new Promise ((resolve, reject) => {
//     setTimeout (() => {
//         resolve ("Promise Resolved Value 1");    
//     }, 10000);
// });
// const p2 = new Promise ((resolve, reject) => {
//     setTimeout (() => {
//         resolve ("Promise Resolved Value 2");    
//     }, 5000);       
// });
// async function getData () {
//     console.log("Hello World");
//     const val1 = await p1;
//     console.log("Namaste JS1");
//     console.log(val1);
//     const val2 = await p2;
//     console.log("Namaste JS2");
//     console.log(val2);
// }
// getData();


//Reversing the logic here

// const p1 = new Promise ((resolve, reject) => {
//     setTimeout (() => {
//         resolve ("Promise Resolved Value 1");    
//     }, 5000);
// });
// const p2 = new Promise ((resolve, reject) => {
//     setTimeout (() => {
//         resolve ("Promise Resolved Value 2");    
//     }, 10000);       
// });
// async function getData () {
//     console.log("Hello World");
//     const val1 = await p1;
//     console.log("Namaste JS1");
//     console.log(val1);
//     const val2 = await p2;
//     console.log("Namaste JS2");
//     console.log(val2);
// }
// getData();

//By using fetch API

// const API_URL = "https://api.github.com/users/mojombo";

// async function getData () {
//         const data = await fetch (API_URL);
//         const jsonValue = await data.json();
//         console.log(jsonValue);
// }
// getData();


//Handling errors By using fetch API (try and catch methods)

// const API_URL = "https://api.github.com/users/mojombo";

// async function getData () {
//     try{
//         const data = await fetch (API_URL);
//         const jsonValue = await data.json();
//         console.log(jsonValue);
//     }
//     catch (err){
//         console.log(err);
//     }
// }
// getData();


//Promise API's

//Promise.all ();

//If three are successful, it will log the three promise values in the form of outpur Array

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise 1 Success"), 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise 2 Success"), 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise 3 Success"), 2000);
// });

// Promise.all([p1, p2, p3])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error(err);
//     });

// //Output
// //Array(3) [ "Promise 1 Success", "Promise 2 Success", "Promise 3 Success" ]
// // 0: "Promise 1 Success"
// // 1: "Promise 2 Success"
// // 2: "Promise 3 Success"
// // length: 3


//If any promise is failed, the other promises wont run and it logs the error output

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise 1 Success"), 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Promise 2 Rejected"), 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise 3 Success"), 2000);
// });

// Promise.all([p1, p2, p3])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error(err);
//     })

// //Output:
// //Promise 2 Rejected


//Promise.allSettled ();

//It will wait until all the promises to get settled and logs the value in the output whether if the promise is success or fail

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise 1 Success"), 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Promise 2 Rejected"), 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise 3 Success"), 2000);
// });

// Promise.allSettled([p1, p2, p3])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error(err);
//     })


// //Output:

// Array(3) [ {…}, {…}, {…} ]
// 0: Object { status: "fulfilled", value: "Promise 1 Success" }
// 1: Object { status: "rejected", reason: "Promise 2 Rejected" }
// 2: Object { status: "fulfilled", value: "Promise 3 Success" }
// length: 3


// //Promise.race();
// //The output will be the first settled promise, whether if the promise is success or fail, it will log that promise value.

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise 1 Success"), 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Promise 2 Rejected"), 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise 3 Success"), 2000);
// });

// Promise.race([p1, p2, p3])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error(err);
//     })

// //Output:
// //Promise 2 Rejected



// //Promise.any();

// //The output will be the first resolved or first success promise

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise 1 Success"), 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Promise 2 Rejected"), 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise 3 Success"), 2000);
// });

// Promise.any([p1, p2, p3])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error(err);
//     })

// //Output:
// //Promise 3 Success

// for (let i=0; i<4; i++) {
//     setTimeout(() => console.log(i), 5000);
// }

// for (var i=0; i<4; i++) {
//     setTimeout(() => console.log(i), 6000);
// }

// async function getRestautants() {
//     const data = await fetch("http://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//     const json = await data.json();
//     console.log(json);
// };

// getRestautants();

// let x = 3 > 2 > 1;

// console.log(x);

// O/P : False

// Explanation:

// 3 > 2 = true
// true = 1
// 1 > 1 = False
