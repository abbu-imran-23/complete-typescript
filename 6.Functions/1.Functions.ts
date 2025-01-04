/**
 ** Functions:
 ** Functions are reusable blocks of code designed to perform a specific task.
 ** They can take input (parameters), perform an operation, and return an output.

 * TypeScript supports the following types of functions:
 * 1. Function without Parameters
 * 2. Function with Parameters
 * 3. Function with Default Parameters
 * 4. Function with Optional Parameters
 * 5. Function with REST Operator
 */

/******************* 1. Function without Parameters *********************/
/**
 * A function that does not accept any parameters and performs a specific task.
 */

function greet(): void {
  console.log("Hello TypeScript!");
}

greet(); // Hello TypeScript!

/******************* 2. Function with Parameters *********************/
/**
 * A function that accepts parameters to perform specific tasks using input values.
 */

function addTwoNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(addTwoNumbers(2, 3)); // 5

/******************* 3. Function with Default Parameters *********************/
/**
 * A function where a parameter is assigned a default value if no value is passed.
 */

function addThreeNumbers(num1: number, num2: number, num3: number = 5): number {
  return num1 + num2 + num3;
}

console.log(addThreeNumbers(5, 5)); // 15
console.log(addThreeNumbers(5, 5, 10)); // 20

/******************* 4. Function with Optional Parameters *********************/
/**
 * A function where some parameters are optional (denoted by `?`).
 */

function addNumbers(num1: number, num2: number, num3?: number): number {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(addNumbers(5, 5)); // 10
console.log(addNumbers(5, 5, 5)); // 15

/******************* 5. Function with REST Parameter *********************/
/**
 * A function that accepts a variable number of arguments using the REST operator (`...`).
 */

function calculateTotalPrice(...prices: number[]): number {
  let totalPrice = 0;
  for (const price of prices) {
    totalPrice += price;
  }
  return totalPrice;
}

console.log(calculateTotalPrice(10, 20, 5, 30, 5, 50)); // 120

export {};
