/**
 * TypeScript Arrays:
 * Arrays in TypeScript are used to store multiple values in a single variable.
 * They can hold elements of a specific type or a union of types, ensuring type safety.
 *
 * TypeScript supports two syntaxes for defining arrays:
 * 1. Using square brackets `[]`.
 * 2. Using the `Array<type>` generic type.
 */

/******************* 1. Declaring Arrays *********************/
/** Using square brackets: */
const numbers: number[] = [1, 2, 3, 4, 5];

/** Using the generic type: */
const cricketPlayers: Array<string> = [
  "Virat Kohli",
  "MS Dhoni",
  "Sachin Tendulkar",
];

console.log("Numbers array", numbers); // [1, 2, 3, 4, 5]
console.log("Cricket Players", cricketPlayers); // ["Virat Kohli","MS Dhoni","Sachin Tendulkar"]

/******************* 2. Mixed-Type Arrays *********************/
/**
 * Arrays can store elements of multiple types using union types.
 */

const mixedTypeArray: (number | string)[] = [1, "TypeScript", 3];

console.log("Mexed Type array", mixedTypeArray); // [1, "TypeScript", 3]

/******************* 3. Array Methods *********************/
/** TypeScript provides all JavaScript array methods while maintaining type safety. */

// 3.1 Adding elements at last
numbers.push(6); // Adds to the end
console.log("Numbers Array after pushing 6", numbers); // [1, 2, 3, 4, 5, 6]

// 3.2 Removing elements from last
numbers.pop(); // Removes the last element 6
console.log("Numbers array after poping last element", numbers); // [1, 2, 3, 4, 5]

// 3.3 Adding elements at start
numbers.unshift(0); // Adds 0 to the beginning
console.log("Numbers array after Unshifing", numbers); // [0, 1, 2, 3, 4, 5, 6]

// 3.4 Removing elements from start
numbers.shift(); // Removes the first element 0
console.log("Numbers array after shifting", numbers); // [1, 2, 3, 4, 5]

// 3.5 Finding the length of an array
console.log("Length of Numbers array", numbers.length); // 5

// 3.6 Accessing elements by index
console.log("Cricket Player at 0th index is: ", cricketPlayers[0]); // "Virat Kohli"

// 3.7 Checking if an array includes an element
const hasNumberThree = numbers.includes(3);
console.log("Numbers array has 3", hasNumberThree); // true

// 3.8 Finding the index of an element
const index = cricketPlayers.indexOf("MS Dhoni");
console.log("Index of MS Dhoni is: ", index); // 1

// 3.9 Reversing an array
const reversedNumbers = numbers.reverse();
console.log("Numbers array after reversing is ", reversedNumbers); // [5, 4, 3, 2, 1]

// 3.10 Sorting an array
const numbersSortedInDescendingOrder = numbers.sort((a, b) => b - a); // Descending order
console.log(
  "Numbers array after sorting in descending order is ",
  numbersSortedInDescendingOrder
); // [5, 4, 3, 2, 1]

const numbersSortedInAscendingOrder = numbers.sort(); // Ascending order
console.log(
  "Numbers array after sorting in ascending order is ",
  numbersSortedInAscendingOrder
); // [1, 2, 3, 4, 5]

// 3.11 Splicing an array (add/remove elements) - Modify the original array
// const splicedArray = numbers.splice(2, 1, 10); // Removes 1 element at index 2 and adds 10
// console.log("Spliced Array ", splicedArray); // [1, 2, 10, 4, 5]

// 3.12 Slicing an array (extracting a section) - Does not modify the original array
const slicedArray = numbers.slice(1, 4); // Extracts elements from index 1 to 3
console.log("Sliced Array ", slicedArray); // [2, 3, 4]

// 3.13 Concatenating arrays
const allNumbers = numbers.concat([6, 7, 8]);
console.log("Numbers array after concatenation ", allNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]

// 3.14 Filling an array with a static value
const filledArray = new Array(5).fill(0);
console.log("Filled array", filledArray); // [0, 0, 0, 0, 0]

// 3.15 Iterating over an array with `forEach`
cricketPlayers.forEach((player, index) => {
  console.log(`Player ${index + 1}: ${player}`);
}); // Output: Player 1: Virat Kohli, Player 2: MS Dhoni, Player 3: Sachin Tendulkar

// 3.16 Finding an element with `find`
const playerWithM = cricketPlayers.find((player) => player.startsWith("M"));
console.log("Player whose name start with 'M' is: ", playerWithM); // "MS Dhoni"

// 3.17 Finding the index of an element with `findIndex`
const indexOfM = cricketPlayers.findIndex((player) => player.startsWith("M"));
console.log("Index of Player whose name start with 'M' is: ", indexOfM); // 1

// 3.18 Checking if all elements satisfy a condition with `every`
const areAllNumbersPositive = numbers.every((num) => num > 0);
console.log(
  "Does Numbers array contains all positive numbers: ",
  areAllNumbersPositive
); // true

// 3.19 Checking if some elements satisfy a condition with `some`
const hasLargeNumbers = numbers.some((num) => num > 4);
console.log(
  "Does some elements in the Numbers array are greater than 4: ",
  hasLargeNumbers
); // true

// 3.20 Flattening a nested array with `flat`
const nestedArray = [1, [2, 3], [4, [5, [6]]]];
const flattenedArray = nestedArray.flat(Infinity);
console.log("Flattened Array: ", flattenedArray); // [1, 2, 3, 4, 5, 6]

// 3.21 Converting an array to a string
const numberListString = numbers.toString();
console.log("Numbers array after converting to string: ", numberListString); // "1,2,3,4,5"

/******************* 4. Multidimensional Arrays *********************/
/**
 * Arrays can have multiple dimensions (arrays of arrays).
 */
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("2D (3x3) Matrix", matrix); // Accesses the element 6
console.log("The element at row 1 and col 2 is: ", matrix[1][2]); // Accesses the element 6

/******************* 5. Readonly Arrays *********************/
/**
 * Arrays can be marked as `readonly` to prevent modification.
 */
const readonlyNumbers: readonly number[] = [1, 2, 3];
// readonlyNumbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.

/******************* 6. Tuple Arrays *********************/
/**
 * Tuples are fixed-length arrays with specific types for each position.
 */
const tuple: [string, number] = ["Age", 24];
console.log(tuple[0]); // "Age"
console.log(tuple[1]); // 24

/**
 * Tuples support optional elements and rest parameters.
 */
const flexibleTuple: [string, number?, ...boolean[]] = [
  "Options",
  10,
  true,
  false,
];

console.log("Flexible Tuple ", flexibleTuple); // ["Options", 10, true, false]

export {};
