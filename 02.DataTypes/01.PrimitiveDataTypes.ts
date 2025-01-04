/**
 * TypeScript has 7 Primitive Data Types:
 * 1. Number   - Represents both integer and floating-point numbers.
 * 2. String   - Represents textual data.
 * 3. Boolean  - Represents true/false values.
 * 4. BigInt   - Used for arbitrarily large integers.
 * 5. Symbol   - A unique and immutable primitive value used as object keys.
 * 6. Null     - Represents the intentional absence of a value.
 * 7. Undefined - Represents a variable that has been declared but not assigned a value.
 */

/******************* 1. Number *********************/
/** Represents numeric values. */
const age: number = 24;
const weight: number = 65.4;

console.log("Age", age); // 24
console.log("Weight", weight); // 65.4

/******************* 2. String *********************/
/** Represents textual data. */
const language: string = "TypeScript";

console.log("Language", language); // TypeScript

/******************* 3. Boolean *********************/
/** Represents true/false values. */
const isLoggedIn: boolean = true;
const isMarried: boolean = false;

console.log("Is Logged In?", isLoggedIn); // true
console.log("Is Married?", isMarried); // false

/******************* 4. BigInt *********************/
/** Represents arbitrarily large integers. */
const bigNumber: bigint = 1234567890123456789012345678901234567890n;

console.log("Big Number", bigNumber); // 1234567890123456789012345678901234567890n

/******************* 5. Symbol *********************/
/**
 * Represents a unique and immutable value, often used as object keys to ensure uniqueness.
 */
const uniqueId: symbol = Symbol("id");
const anotherUniqueId: symbol = Symbol("id");

console.log(uniqueId === anotherUniqueId); // Output: false
console.log("Unique ID", uniqueId); // Symbol(id)
console.log("Another Unique ID", anotherUniqueId); // Symbol(id)

// Using symbols as object keys
const user = { [uniqueId]: 12345, [anotherUniqueId]: 67890, name: "Alice" };

// Accessing symbol properties
console.log(user[uniqueId]); // Output: 12345
console.log(user[anotherUniqueId]); // Output: 67890

// Symbols ensure unique keys, even with the same description
user[uniqueId] = 54321;
console.log(user[uniqueId]); // Output: 54321

/******************* 6. Null *********************/
/**
 * Represents the intentional absence of any value.
 * Variables explicitly assigned `null` indicate an empty or non-existent value.
 */
const emptyValue: null = null;

console.log("Empty Value", emptyValue); // null

/******************* 7. Undefined *********************/
/**
 * Represents a variable that has been declared but not assigned a value.
 * It is the default value for uninitialized variables.
 */
let uninitializedVariable;

console.log("UnInitializedVariable", uninitializedVariable); // undefined

export {};
