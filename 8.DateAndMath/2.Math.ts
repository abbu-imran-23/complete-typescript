/**
 ** Math in TypeScript:
 ** TypeScript provides the built-in `Math` object for performing mathematical operations.
 ** These operations include simple arithmetic, random number generation, rounding, and more.
 **
 ** Key Methods:
 ** 1. `Math.abs()`: Returns the absolute value of a number.
 ** 2. `Math.round()`: Rounds a number to the nearest integer.
 ** 3. `Math.ceil()`: Rounds a number UP to the nearest integer.
 ** 4. `Math.floor()`: Rounds a number DOWN to the nearest integer.
 ** 5. `Math.sqrt()`: Returns the square root of a number.
 ** 6. `Math.min()`: Returns the smallest value from a set of numbers.
 ** 7. `Math.max()`: Returns the largest value from a set of numbers.
 ** 8. `Math.random()`: Generates a random number between 0 (inclusive) and 1 (exclusive).
 ** 9. `Math.pow()`: Returns the value of a number raised to the power of another number.
 ** 10. `Math.PI`: The constant π (Pi), the ratio of a circle’s circumference to its diameter.
 ** 11. `Math.log()`: Returns the natural logarithm (base e) of a number.
 ** 12. `Math.log10()`: Returns the base-10 logarithm of a number.
 */

/******************* 1. Number Conversions *********************/
// Convert a number to a string
const someNumber = 100;
console.log(typeof someNumber.toString()); // "string"

// Fixed decimal points
const balance = new Number(200);
console.log(balance.toFixed(2)); // "200.00"

// Convert number to localized string format
const amount = 100000;
console.log(amount.toLocaleString()); // "100,000" (US format)
console.log(amount.toLocaleString("en-IN")); // "1,00,000" (Indian format)

/******************* 2. Math Methods *********************/
// Absolute value
console.log(Math.abs(-5)); // 5

// Rounding
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.6)); // 5

// Rounding UP and DOWN
console.log(Math.ceil(7.2)); // 8 (Rounds up)
console.log(Math.floor(7.8)); // 7 (Rounds down)

// Square root
console.log(Math.sqrt(16)); // 4

// Find minimum and maximum values
console.log(Math.min(20, 10, 40)); // 10
console.log(Math.max(20, 10, 40)); // 40

/******************* 3. Random Number Generation *********************/
// Generate random number between 1 - 10
console.log(Math.floor(Math.random() * 10 + 1)); // Random number between 1 and 10

// Generate random number between a specified range
const minRange = 20;
const maxRange = 40;
const randomValue = Math.floor(
  Math.random() * (maxRange - minRange + 1) + minRange
);
console.log(randomValue); // Random number between 20 and 40

/******************* 4. Additional Math Methods *********************/
// Exponentiation (raising a number to the power)
console.log(Math.pow(2, 3)); // 8 (2^3)

// Mathematical constants
console.log(Math.PI); // 3.141592653589793 (Pi constant)

// Logarithms
console.log(Math.log(10)); // 2.302585092994046 (Natural log of 10)
console.log(Math.log10(10)); // 1 (Log base 10 of 10)
