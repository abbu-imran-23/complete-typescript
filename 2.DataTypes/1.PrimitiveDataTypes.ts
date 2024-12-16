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

/******************* 2. String *********************/
/** Represents textual data. */
const language: string = "TypeScript";

/******************* 3. Boolean *********************/
/** Represents true/false values. */
const isLoggedIn: boolean = true;
const isMarried: boolean = false;

/******************* 4. BigInt *********************/
/** Represents arbitrarily large integers. */
const bigNumber: bigint = 1234567890123456789012345678901234567890n;

/******************* 5. Symbol *********************/
/**
 * Represents a unique and immutable value, often used as object keys to ensure uniqueness.
 */
const uniqueId: symbol = Symbol("id");
const anotherUniqueId: symbol = Symbol("id");

/******************* 6. Null *********************/
/**
 * Represents the intentional absence of any value.
 * Variables explicitly assigned `null` indicate an empty or non-existent value.
 */
const emptyValue: null = null;

/******************* 7. Undefined *********************/
/**
 * Represents a variable that has been declared but not assigned a value.
 * It is the default value for uninitialized variables.
 */
let uninitializedVariable;
console.log(uninitializedVariable); // undefined
