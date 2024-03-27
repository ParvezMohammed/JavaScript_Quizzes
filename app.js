// Quiz - 1:
// let x = 3 > 2 > 1;

// console.log(x);

// O/P : False
// Explanation:

// 3 > 2 = true
// true = 1
// 1 > 1 = False


// Quiz - 2:

// function sayHi(name) {
//     return `Hi There, ${name}`;
// }
// console.log(sayHi());

// O/P : Hi There, undefined

// Explanation:
// "name is undefined" as "nothing was passed as the argument" "while calling the function".


// Quiz - 3:

// let a = 10, b = 10, c = 10;
// if (a == b == c) {
//     console.log("Yes, it is true");
// } else {
//     console.log("No, it is false");
// }

// O/P : No, it is false

// Explanation:
// As we have 2 == operators, so they are executed from left to right.

// a == b == c
// ⇒ (a == b) == c
// ⇒ (10 == 10) == 10
// ⇒ true == 10
// ⇒ 1 == 10
// ⇒ false

// Why is true converted to 1?
// The rule for == says if one of the operands is boolean, it's converted to number before the comparison.
// true is converted to its number value, which is 1.

// Quiz - 4:

// const num = [1, 23, 4];
// num.sort();
// console.log(num[1]);

// O/P: 23.

// Explanation: The sort method use string comparisons by default. It works on Elements of the arrays as strings based on their Unicode.
// In order to make it properly work, you should use:
// num.sort(function(a,b){return a - b;}) will give answer 5, As it will treat array as numeric.
