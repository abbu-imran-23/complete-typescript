/**
 * TypeScript has 4 Non-Primitive Data Types:
 * 1. Array     - Represents a collection of elements.
 * 2. Object    - Represents instances of classes, plain objects, or functions.
 * 3. Tuple     - Represents a fixed number of elements with known types.
 * 4. Enum      - Represents a set of named constants.
 */

/******************* 1. Array *********************/
/**
 * Represents a collection of elements of the same type.
 */
const numbers: number[] = [1, 2, 3, 4, 5];
const languages: string[] = ["JavaScript", "TypeScript", "Python"];

/******************* 2. Object *********************/
/**
 * Represents an instance of a class, a plain object, or a function.
 */
type Person = {
  name: string;
  age: number;
};
const person: Person = { name: "John", age: 30 };

/******************* 3. Tuple *********************/
/**
 * Represents a fixed number of elements, where each element has a known type.
 */
const user: [string, number] = ["Alice", 25];

/******************* 4. Enum *********************/
/**
 * Represents a set of named constants.
 */
enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}
const statusCode: HttpStatusCode = HttpStatusCode.OK;
console.log(statusCode); // 200
