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

for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i + 1}`);
}

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

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

const fruits: string[] = ["Apple", "Banana", "Cherry"];
for (const index in fruits) {
  console.log(`Index ${index}: ${fruits[index]}`);
}

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

/**
 * Summary:
 * - Use `for` for a definite number of iterations.
 * - Use `for...of` to iterate over elements in an iterable.
 * - Use `for...in` to iterate over object properties or array indices.
 * - Use `while` when the condition needs to be checked before each iteration.
 * - Use `do...while` when the block should execute at least once.
 */
