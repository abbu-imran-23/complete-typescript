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
const numberList: number[] = [1, 2, 3, 4, 5];

/** Using the generic type: */
const cricketPlayers: Array<string> = [
  "Virat Kohli",
  "MS Dhoni",
  "Sachin Tendulkar",
];

console.log(numberList); // [1, 2, 3, 4, 5]
console.log(cricketPlayers); // ["Virat Kohli","MS Dhoni","Sachin Tendulkar"]

/******************* 2. Mixed-Type Arrays *********************/
/**
 * Arrays can store elements of multiple types using union types.
 */
const mixedTypeArray: (number | string)[] = [1, "TypeScript", 3];

console.log(mixedTypeArray); // [1, "TypeScript", 3]

/******************* 3. Array Methods *********************/
/** TypeScript provides all JavaScript array methods while maintaining type safety. */

// 3.1 Adding elements at last
numberList.push(6); // Adds to the end
console.log(numberList); // [1, 2, 3, 4, 5, 6]

// 3.2 Removing elements from last
numbers.pop(); // Removes the last element 6
console.log(numbers); // [1, 2, 3, 4, 5]

// 3.3 Adding elements at start
numberList.unshift(0); // Adds 0 to the beginning
console.log(numberList); // [0, 1, 2, 3, 4, 5, 6]

// 3.4 Removing elements from start
numberList.shift(); // Removes the first element 0
console.log(numberList); // [1, 2, 3, 4, 5]

// 3.5 Finding the length of an array
console.log(numberList.length); // 5

// 3.6 Accessing elements by index
console.log(cricketPlayers[0]); // "Virat Kohli"

// 3.7 Checking if an array includes an element
const hasNumberThree = numberList.includes(3);
console.log(hasNumberThree); // true

// 3.8 Finding the index of an element
const index = cricketPlayers.indexOf("MS Dhoni");
console.log(index); // 1

// 3.9 Reversing an array
const reversedNumbers = [...numberList].reverse();
console.log(reversedNumbers); // [5, 4, 3, 2, 1]

// 3.10 Sorting an array
const sortedNumbers = [...numberList].sort((a, b) => b - a); // Descending order
console.log(sortedNumbers); // [5, 4, 3, 2, 1]

// 3.11 Splicing an array (add/remove elements)
const splicedArray = [...numberList];
splicedArray.splice(2, 1, 10); // Removes 1 element at index 2 and adds 10
console.log(splicedArray); // [1, 2, 10, 4, 5]

// 3.12 Slicing an array (extracting a section)
const slicedArray = numberList.slice(1, 4); // Extracts elements from index 1 to 3
console.log(slicedArray); // [2, 3, 4]

// 3.13 Joining array elements into a string
const joinedCricketPlayers = cricketPlayers.join(", ");
console.log(joinedCricketPlayers); // "Virat Kohli, MS Dhoni, Sachin Tendulkar"

// 3.14 Concatenating arrays
const allNumbers = numberList.concat([6, 7, 8]);
console.log(allNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]

// 3.15 Copying elements within an array
const copiedNumbers = [...numberList];
copiedNumbers.copyWithin(0, 2, 4); // Copies elements at index 2 to 4 to the beginning
console.log(copiedNumbers); // [3, 4, 3, 4, 5]

// 3.16 Filling an array with a static value
const filledArray = new Array(5).fill(0);
console.log(filledArray); // [0, 0, 0, 0, 0]

// 3.17 Iterating over an array with `forEach`
cricketPlayers.forEach((player, index) => {
  console.log(`Player ${index + 1}: ${player}`);
});

// 3.18 Finding an element with `find`
const playerWithM = cricketPlayers.find((player) => player.startsWith("M"));
console.log(playerWithM); // "MS Dhoni"

// 3.19 Finding the index of an element with `findIndex`
const indexOfM = cricketPlayers.findIndex((player) => player.startsWith("M"));
console.log(indexOfM); // 1

// 3.20 Checking if all elements satisfy a condition with `every`
const areAllNumbersPositive = numberList.every((num) => num > 0);
console.log(areAllNumbersPositive); // true

// 3.21 Checking if some elements satisfy a condition with `some`
const hasLargeNumbers = numberList.some((num) => num > 4);
console.log(hasLargeNumbers); // true

// 3.22 Flattening a nested array with `flat`
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = nestedArray.flat(2);
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]

// 3.23 Transforming elements with `flatMap`
const flatMappedArray = nestedArray.flatMap((val) =>
  Array.isArray(val) ? val : [val]
);
console.log(flatMappedArray); // [1, 2, 3, 4, 5, 6]

// 3.24 Converting an array to a string
const numberListString = numberList.toString();
console.log(numberListString); // "1,2,3,4,5"

/******************* 4. Multidimensional Arrays *********************/
/**
 * Arrays can have multiple dimensions (arrays of arrays).
 */
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][2]); // Accesses the element 6

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
console.log(flexibleTuple); // ["Options", 10, true, false]
