/******************* Generics in TypeScript *********************/
/**
 * Generics provide a way to create reusable and flexible components in TypeScript.
 * They allow you to define types that can adapt to the requirements of the caller.
 */

/******************* 1. Generic Functions *********************/
/** A function that returns the input value. */
function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(42)); // 42
console.log(identity<string>("Hello, Generics!")); // "Hello, Generics!"

/******************* 2. Generic Interfaces *********************/
/** Interfaces can also use generics to define flexible structures. */
interface Box<T> {
  content: T;
}

const numberBox: Box<number> = { content: 100 };
const stringBox: Box<string> = { content: "TypeScript" };

console.log("Number Box", numberBox); // { content: 100 }
console.log("String Box", stringBox); // { content: "TypeScript" }

/******************* 3. Generic Classes *********************/
/** Classes can use generics to define reusable and type-safe components. */
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}

  display(): void {
    console.log(`${this.key}: ${this.value}`);
  }
}

const pair = new KeyValuePair<string, number>("age", 30);
pair.display(); // "age: 30"

/******************* 4. Generic Constraints *********************/
/** Generics can be constrained to ensure a specific structure or behavior. */
interface Lengthwise {
  length: number;
}

function logWithLength<T extends Lengthwise>(value: T): void {
  console.log(`Value: ${value}, Length: ${value.length}`);
}

logWithLength("Generics"); // "Value: Generics, Length: 8"
logWithLength([1, 2, 3]); // "Value: 1,2,3, Length: 3"
// logWithLength(42); // Error: Type 'number' does not satisfy the constraint 'Lengthwise'.

/******************* 5. Default Generic Types *********************/
/** Default types can be assigned to generics. */
interface ResponseData<T = string> {
  status: number;
  data: T;
}

const response: ResponseData = { status: 200, data: "Success" };
const jsonResponse: ResponseData<object> = {
  status: 200,
  data: { success: true },
};

console.log(response); // { status: 200, data: "Success" }
console.log(jsonResponse); // { status: 200, data: { success: true } }

/******************* 6. Using Generics with Functions *********************/
/** Combine generics and other parameters in functions. */
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const mergedObject = merge({ name: "TypeScript" }, { version: 4.9 });
console.log(mergedObject); // { name: "TypeScript", version: 4.9 }

/******************* 7. Generic Utility Types *********************/
/** TypeScript offers utility types that work seamlessly with generics. */
interface User {
  id: number;
  name: string;
  email: string;
}

const partialUser: Partial<User> = { name: "Alice" };
console.log("Partial User", partialUser);

const readOnlyUser: Readonly<User> = {
  id: 1,
  name: "Bob",
  email: "bob@example.com",
};
// readOnlyUser.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

console.log("ReadOnly User", readOnlyUser); // { id: 1, name: "Bob", email: "bob@example.com" }

/******************* 8. Real-World Example *********************/
/** A generic fetch function that works with different types. */
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  const data: T = await response.json();
  return data;
}

interface ApiResponse {
  id: number;
  title: string;
  completed: boolean;
}

fetchData<ApiResponse[]>("https://jsonplaceholder.typicode.com/todos")
  .then((todos) => {
    console.log("Fetched Todos:", todos);
  })
  .catch((error) => console.error("Error:", error));

/******************* 9. Generics with Arrays *********************/
/** Generics can ensure consistent types in arrays. */
function filterArray<T>(array: T[], predicate: (value: T) => boolean): T[] {
  return array.filter(predicate);
}

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log("Even Numbers", evenNumbers); // [2, 4]

/******************* 10. Advanced Generic Features *********************/
/** Advanced use cases with keyof and mapped types. */
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const userObj = { id: 1, name: "Charlie", age: 25 };
const userName = getProperty(userObj, "name");
console.log("User Name", userName); // "Charlie"

// const invalidKey = getProperty(userObj, "nonExistentKey"); // Error: Argument of type 'nonExistentKey' is not assignable to parameter of type 'keyof typeof userObj'.

/******************* Summary *********************/
/**
 * 1. Generics enable reusable, flexible, and type-safe components.
 * 2. Use constraints to restrict types and ensure safety.
 * 3. Combine generics with utility types and real-world examples for better coding.
 */

export {};
