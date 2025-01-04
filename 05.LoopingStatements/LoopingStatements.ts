/**
 ** Looping Statements:
 ** Looping statements are used to repeatedly execute a block of code as long as a specified condition is met.

 * TypeScript supports the following looping statements:
 * 1. for loop
 * 2. for...of loop
 * 3. for...in loop
 * 4. forEach loop
 * 5. while loop
 * 6. do...while loop
 */

/******************* 1. for Loop *********************/
/**
 * The `for` loop is used when the number of iterations is known beforehand.
 * Syntax:
 * for (initialization; condition; increment/decrement) {
      // Code to be executed
 * }
 */

const codingLanguages: string[] = ["JavaScript", "TypeScript", "Python"];
for (let i = 0; i < codingLanguages.length; i++) {
  console.log(`Language: ${codingLanguages[i]}`);
}
// Output: Language: JavaScript, Language: TypeScript, Language: Python

/******************* 2. for...of Loop *********************/
/**
 * The `for...of` loop is used to iterate over iterable objects like arrays, strings, etc.
 * Syntax:
 * for (element of iterable) {
      // Code to be executed
 * }
 */

const footballClubs: string[] = [
  "Real Madrid FC",
  "Barcelona FC",
  "Manchestar United FC",
  "Liver Pool FC",
];
for (const club of footballClubs) {
  console.log(`Club: ${club}`);
}
// Output: Club: Real Madrid FC, Club: Barcelona FC, Club: Manchestar United FC, Club: Liver Pool FC

/******************* 3. for...in Loop *********************/
/**
 * The `for...in` loop is used to iterate over the enumerable properties of an object or indices of an array.
 * Syntax:
 * for (key in object/array) {
 *    // Code to be executed
 * }
 */

type UserDetails = {
  name: string;
  age: number;
  city: string;
};

const userDetails: UserDetails = {
  name: "John",
  age: 30,
  city: "New York",
};

for (const key in userDetails) {
  console.log(`${key}: ${userDetails[key]}`);
}
// Output: name: John, age: 30, city: New York

const fruits: string[] = ["Apple", "Banana", "Cherry"];
for (const index in fruits) {
  console.log(`Index ${index}: ${fruits[index]}`);
}
// Output: Index 0: Apple, Index 1: Banana, Index 2: Cherry

/******************* 4. forEach Loop *********************/
/**
 * The `forEach` loop is a higher-order function available on arrays that executes a provided function once for each array element.
 * Syntax:
 * array.forEach((element, index, array) => {
      // Code to be executed
 * });
 */

const celebraties: string[] = [
  "Leonardo DiCaprio",
  "Scarlett Johansson",
  "Robert Downey Jr.",
  "Emma Watson",
  "Will Smith",
];

celebraties.forEach((celebrity, index) => {
  console.log(`Index ${index}: ${celebrity}`);
});
// Output: Index 0: Leonardo DiCaprio, Index 1: Scarlett Johansson, Index 2: Robert Downey Jr.,
// Index 3: Emma Watson, Index 4: Will Smith

/******************* 5. while Loop *********************/
/**
 * The `while` loop is used to execute a block of code as long as a specified condition is true.
 * Syntax:
 * while (condition) {
      // Code to be executed
 * }
 */

let counter: number = 0;
while (counter < 3) {
  console.log(`Counter: ${counter}`);
  counter++;
}
// Output: Counter: 0, Counter: 1, Counter: 2

/******************* 6. do...while Loop *********************/
/**
 * The `do...while` loop is similar to the `while` loop, but it guarantees that the block of code will be executed at least once.
 * Syntax:
 * do {
 *    // Code to be executed
 * } while (condition);
 */

let count: number = 0;
do {
  console.log(`Count: ${count}`);
  count++;
} while (count < 3);
// Output: Count: 0, Count: 1, Count: 2

/**
 * Summary:
 * - Use `for` for a definite number of iterations.
 * - Use `for...of` to iterate over elements in an iterable.
 * - Use `for...in` to iterate over object properties or array indices.
 * - Use `while` when the condition needs to be checked before each iteration.
 * - Use `do...while` when the block should execute at least once.
 */

export {};
