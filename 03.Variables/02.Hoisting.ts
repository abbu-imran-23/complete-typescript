/**
 ** Hoisting in TypeScript:
 * Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (function scope or global scope).
 * In TypeScript, hoisting follows the same rules as in JavaScript since TypeScript is a superset of JavaScript.
 */

/******************* 1. Function Hoisting *********************/
/**
 * Function declarations are hoisted to the top of their containing scope.
 */

greet(); // Output: "Hello, World!"

// Function declaration (hoisted)
function greet() {
  console.log("Hello, TypeScript!");
}

/******************* 2. Variable Hoisting (var) *********************/
/**
 * Variables declared with `var` are hoisted to the top of their containing function scope.
 * However, only the declaration is hoisted, not the initialization.
 */

// console.log(myVar); // Output: undefined (declaration is hoisted, but not the initialization)
var myVar = 10;
console.log("Var", myVar); // Output: 10

/******************* 3. Variable Hoisting (let and const) *********************/
/**
 * Variables declared with `let` and `const` are hoisted to the top of their block scope.
 * However, they are not initialized until their definition is evaluated.
 * Accessing them before the declaration results in a ReferenceError (Temporal Dead Zone).
 */

// console.log(myLet); // Error: Cannot access 'myLet' before initialization
let myLet = 20;
console.log("Let", myLet); // Output: 20

// console.log(myConst); // Error: Cannot access 'myConst' before initialization
const myConst = 30;
console.log("Const", myConst); // Output: 30

/******************* Summary *********************/
/**
 * - Function declarations are hoisted, so they can be called before their definition.
 * - `var` declarations are hoisted, but only the declaration (not the initialization).
 * - `let` and `const` declarations are hoisted, but accessing them before initialization results in a ReferenceError (Temporal Dead Zone).
 */

export {};
