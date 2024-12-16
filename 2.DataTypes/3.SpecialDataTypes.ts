/**
 * TypeScript has some Special Data Types:
 * 1. Any      - Represents a dynamic type that can hold any value.
 * 2. Unknown  - Represents a value whose type is not known at compile time.
 * 3. Void     - Represents the absence of any type, typically used for functions that do not return a value.
 * 4. Never    - Represents a type that never occurs, often used for functions that throw errors or
 *               infinite loops.
 */

/******************* 1. Any *********************/
/**
 * Represents a dynamic type that can hold any value.
 * Use sparingly as it defeats the purpose of static typing.
 */
let dynamicValue: any = "Hello";
dynamicValue = 42;
dynamicValue = true;

/******************* 2. Unknown *********************/
/**
 * Represents a value with an unknown type.
 * You need to perform type checking before using it.
 */
let unknownValue: unknown = "Hello";
if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase()); // "HELLO"
}

/******************* 7. Void *********************/
/**
 * Represents the absence of any type.
 * Typically used for functions that do not return a value.
 */
function logMessage(message: string): void {
  console.log(message);
}
logMessage("Hello Typescript!"); // Hello Typescript!

/******************* 8. Never *********************/
/**
 * The `never` type is used for functions that always throw errors or never return.
 * Commonly used for functions that throw errors or run infinitely.
 */
function throwErrorMessage(errorMessage: string): never {
  throw new Error(errorMessage);
}
throwErrorMessage("Invalid Function");
