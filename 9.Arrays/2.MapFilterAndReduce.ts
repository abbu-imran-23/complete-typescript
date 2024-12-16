/**
 * TypeScript Array Higher-Order Methods:
 * 1. `map()`   - Transforms each element in an array and creates a new array.
 * 2. `filter()` - Filters elements in an array based on a condition.
 * 3. `reduce()` - Reduces an array to a single value by applying a function.
 */

/******************* 1. map() *********************/
/**
 * The `map()` method creates a new array by transforming each element of the original array.
 * It does not modify the original array.
 */

const nonSquaredNumbers: number[] = [1, 2, 3, 4, 5];

// Example 1: Squaring each number
const squaredNumbers = nonSquaredNumbers.map((num) => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// Example 2: Transforming to a boolean array (true if even, false if odd)
const booleanNumbers = nonSquaredNumbers.map((num) => num % 2 === 0);
console.log(booleanNumbers); // [false, true, false, true, false]

/**
 * The callback function in `map()` takes three parameters:
 * - `currentValue`: The current element being processed.
 * - `index` (optional): The index of the current element.
 * - `array` (optional): The entire array being traversed.
 */

const numbersWithIndices = nonSquaredNumbers.map(
  (num, index) => `Index ${index}: ${num}`
);
console.log(numbersWithIndices); // ["Index 0: 1", "Index 1: 2", "Index 2: 3", "Index 3: 4", "Index 4: 5"]

/******************* Difference between forEach and map *********************/
/**
 **   1. Purpose:
 *    - `map()`: Used for transformation of elements to create a new array.
 *    - `forEach()`: Used for **iteration** or executing side effects (e.g., logging, updating external state).
 *
 **   2. Return Value:
 *    - `map()`: Returns a new array containing the transformed elements.
 *    - `forEach()`: Returns `undefined`.
 *
 **   3. Usage:
 *    - `map()`: Use when you need a new array of transformed elements.
 *    - `forEach()`: Use when you want to iterate through an array but don’t need to store the results.
 *
 **   4. Immutability:
 *    - `map()`: Does not mutate the original array.
 *    - `forEach()`: Does not mutate the original array but is typically used to update external variables or
 *                   perform operations with side effects.
 * */

/******************* 2. filter() *********************/
/**
 * The `filter()` method creates a new array containing only the elements that satisfy a given condition.
 * It does not modify the original array.
 */

const rawArray: (number | string)[] = [1, "TypeScript", 2, "JavaScript", 3];

// Example 1: Filtering only numbers
const onlyNumbers = rawArray.filter(
  (item): item is number => typeof item === "number"
);
console.log(onlyNumbers); // [1, 2, 3]

// Example 2: Filtering strings
const scripts = rawArray.filter(
  (item): item is string => typeof item === "string" && item.includes("Script")
);
console.log(scripts); // ["TypeScript", "JavaScript"]

/**
 * The callback function in `filter()` takes three parameters:
 * - `currentValue`: The current element being processed.
 * - `index` (optional): The index of the current element.
 * - `array` (optional): The entire array being traversed.
 */

const numbersGreaterThanTwo = nonSquaredNumbers.filter(
  (num, index) => num > 2 && index % 2 === 0
);
console.log(numbersGreaterThanTwo); // [3, 5]

/******************* 3. reduce() *********************/
/**
 * The `reduce()` method reduces an array to a single value by applying a reducer function.
 * The reducer function is applied to each element of the array.
 */

const expenses: number[] = [100, 200, 300];

// Example 1: Calculating the total sum
const totalExpense = expenses.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(totalExpense); // 600

// Example 2: Finding the maximum value
const maxExpense = expenses.reduce(
  (max, currentValue) => (currentValue > max ? currentValue : max),
  expenses[0]
);
console.log(maxExpense); // 300

/**
 * The reducer function in `reduce()` takes four parameters:
 * - `accumulator`: The accumulated value from the previous iteration.
 * - `currentValue`: The current element being processed.
 * - `index` (optional): The index of the current element.
 * - `array` (optional): The entire array being traversed.
 */

/**
 * Notes:
 * - Use `map()` for transforming data.
 * - Use `filter()` for selecting specific data.
 * - Use `reduce()` for aggregating data into a single result.
 */
