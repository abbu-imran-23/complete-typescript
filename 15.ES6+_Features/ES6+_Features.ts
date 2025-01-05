/******************* ES6+ Features in TypeScript *********************/
/**
 * TypeScript builds upon JavaScript and supports all ES6+ features with type-checking.
 * These features make the language more expressive, concise, and powerful.
 */

/******************* 1. Let and Const *********************/
/** Block-scoped variable declarations with `let` and `const`. */
let mutableVariable = "I can change";
mutableVariable = "Changed!";

const constantVariable = "I cannot change";
// constantVariable = "Attempt to change"; // Error: Assignment to constant variable

console.log("Mutable", mutableVariable); // Changed!
console.log("Constant", constantVariable); // I cannot change

/******************* 2. Arrow Functions *********************/
/** Concise syntax for writing functions. */
const add = (a: number, b: number): number => a + b;
const greet = (name: string): string => `Hello, ${name}!`;

console.log("Sum", add(5, 3)); // 8
console.log("Greeting", greet("TypeScript")); // Hello, TypeScript!

/******************* 3. Template Literals *********************/
/** String interpolation using backticks and `${}`. */
const name = "John";
const age = 30;

const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log("Message", message); // Hello, my name is John and I am 30 years old.

/******************* 4. Default Parameters *********************/
/** Set default values for function parameters. */
function multiply(a: number, b: number = 1): number {
  return a * b;
}

console.log("Multiply with default", multiply(5)); // 5 * 1 = 5
console.log("Multiply without default", multiply(5, 3)); // 5 * 3 = 15

/******************* 5. Destructuring *********************/
/** Extract values from arrays or objects into variables. */
const [x, y] = [10, 20];
console.log("Destructured Array", x, y);

const { username, email } = { username: "user1", email: "user1@example.com" };
console.log("Destructured Object", username, email); // user1

/******************* 6. Rest and Spread Operators *********************/
/** Collect or spread elements using `...`. */

/* Rest Operator: Collects multiple elements into an array. */
const numbers = [1, 2, 3, 4, 5];
const [first, ...rest] = numbers;
console.log("First", first); // 1
console.log("Rest", rest); // [2, 3, 4, 5]

/* Spread Operator: Spreads elements of an array or object. */
const mergedArray = [...numbers, 6, 7, 8];
console.log("Merged Array", mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8]

const user = { id: 1, name: "Alice" };
const updatedUser = { ...user, email: "alice@example.com" };
console.log("Updated User", updatedUser); // { id: 1, name: "Alice", email: "alice@example.com: }

/******************* 7. Classes *********************/
/** ES6 classes with constructors, methods, and inheritance. */
class Person {
  constructor(public name: string, public age: number) {}

  introduce(): string {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
}

const person = new Person("John", 25);
console.log(person.introduce());

class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }

  introduce(): string {
    return `${super.introduce()} I study in grade ${this.grade}.`;
  }
}

const student = new Student("Jane", 20, "10th");
console.log(student.introduce());

/******************* 8. Modules *********************/
/** Use `import` and `export` for modular code. */
// File: mathUtils.ts
// export function add(a: number, b: number): number {
//   return a + b;
// }

// File: app.ts
// import { add } from "./mathUtils";
// console.log(add(2, 3));

/******************* 9. Promises *********************/
/** Handle asynchronous operations using Promises. */
const fetchData = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched!"), 1000);
  });
};

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

/******************* 10. Async/Await *********************/
/** Syntactic sugar over Promises for asynchronous code. */
const getData = async (): Promise<void> => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

getData();

/******************* 11. Symbol *********************/
/** Unique and immutable primitive values. */
const sym1: symbol = Symbol("id");
const sym2: symbol = Symbol("id");
console.log("Symbols Equal?", sym1 === sym2); // false

const obj = {
  [sym1]: "value1",
  [sym2]: "value2",
};
console.log("Symbol Property Access", obj[sym1]);

/******************* 12. Iterators and Generators *********************/
/** Create custom iterators using generators. */
function* numberGenerator(): Generator<number> {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log("Generator Output", gen.next().value); // 1
console.log("Generator Output", gen.next().value); // 2
console.log("Generator Output", gen.next().value); // 3

/******************* 13. Map and Set *********************/
/** Collections with unique values and key-value pairs. */
const uniqueSet = new Set<number>([1, 2, 3, 2]);
console.log("Set", uniqueSet); // {1, 2, 3}

const keyValueMap = new Map<string, number>([
  ["a", 1],
  ["b", 2],
]);
console.log("Map", keyValueMap); // {a => 1, b => 2}

/******************* 14. Optional Chaining and Nullish Coalescing *********************/
/** Handle undefined or null values gracefully. */
const userObj = { profile: { name: "Alice" } };
console.log("Optional Chaining", userObj?.profile?.name); // Alice
// console.log("Optional Chaining", userObj?.address?.city); // undefined

const nullValue = null;
console.log("Nullish Coalescing", nullValue ?? "Default Value"); // Default Value

export {};
