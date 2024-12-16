/**
 ** Functions:
 ** Functions are reusable blocks of code designed to perform a specific task.
 ** They can take input (parameters), perform an operation, and return an output.

 * TypeScript supports the following types of functions:
 * 1. Arrow Functions
 * 2. Anonymous Functions
 * 3. Callback Functions
 * 4. Immediately Invoked Function Expressions (IIFE)
 */

/******************* 1. Arrow Functions *********************/

/**
 * Traditional Function:
 * The standard way of defining functions, supports dynamic `this` binding.
 */
function sumTwoNumbers(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(sumTwoNumbers(3, 7)); // 10

/**
 * Arrow Function:
 * A concise syntax for defining functions, commonly used for callbacks and short functions.
 */
const multiplyNumbers = (num1: number, num2: number): number => num1 * num2;

console.log(multiplyNumbers(4, 5)); // 20

/**
 * Difference between Traditional Function and Arrow Function:
 *
 * 1. Syntax:
 *    - Traditional functions use the `function` keyword.
 *    - Arrow functions use the `=>` arrow operator.
 *
 * 2. `this` Binding:
 *    - Traditional functions bind `this` dynamically based on the caller.
 *    - Arrow functions inherit `this` from their surrounding lexical scope.
 *
 * 3. Use Cases:
 *    - Traditional functions are ideal for object methods, constructors, or when dynamic `this` is needed.
 *    - Arrow functions are best for callbacks, short functions, and maintaining lexical `this`.
 *
 * 4. Arguments Object:
 *    - Traditional functions have an `arguments` object to access all arguments.
 *    - Arrow functions do not have an `arguments` object; use the REST operator (`...args`) instead.
 */

/******************* 2. Anonymous Functions *********************/
/**
 * A function without a name, often used as a value for a variable or in callbacks.
 */
const divideNumbers = function (num1: number, num2: number): number {
  return num1 / num2;
};

console.log(divideNumbers(10, 2)); // 5

/******************* 3. Callback Functions *********************/
/**
 * A function passed as an argument to another function, invoked at a later time.
 */
function executeCallback(callback: (message: string) => void): void {
  callback("This is a callback function!");
}

executeCallback((message: string) => console.log(message)); // This is a callback function!

/******************* 4. Immediately Invoked Function Expressions (IIFE) *********************/
/**
 * A function that is executed immediately after it is defined.
 */
(function () {
  console.log("IIFE executed!");
})(); // Outputs: IIFE executed!
