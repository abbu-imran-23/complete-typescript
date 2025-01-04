/******************* Interfaces in TypeScript *********************/
/**
 * Interfaces in TypeScript define the structure of an object or a class.
 * They are used for type-checking during development and are not compiled into JavaScript.
 */

/******************* 1. Defining Interfaces *********************/
/** Basic Interface */
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

console.log("User", user); // { id: 1, name: "Alice", email: "alice@example.com" }

/******************* 2. Optional Properties *********************/
/** Properties can be optional using the `?` operator. */
interface Product {
  id: number;
  name: string;
  description?: string; // Optional property
}

const product: Product = {
  id: 101,
  name: "Laptop",
};

console.log("Product", product); // { id: 101, name: "Laptop" }

/******************* 3. Readonly Properties *********************/
/** Use `readonly` to prevent modification of properties. */
interface Config {
  readonly apiKey: string;
  timeout: number;
}

const config: Config = {
  apiKey: "12345-ABCDE",
  timeout: 3000,
};

// config.apiKey = "new-key"; // Error: Cannot assign to 'apiKey' because it is a read-only property.

console.log("Config", config);
// {
//     apiKey: "12345-ABCDE",
//     timeout: 3000,
//   }

/******************* 4. Extending Interfaces *********************/
/** Interfaces can inherit from other interfaces. */
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  canWalk: boolean;
}

interface Bird extends Animal {
  canFly: boolean;
}

const dog: Dog = {
  name: "Buddy",
  age: 5,
  canWalk: true,
};

const bird: Bird = {
  name: "Parrot",
  age: 2,
  canFly: true,
};

console.log("Dog", dog); // { name: "Buddy", age: 5, canWalk: true }
console.log("Bird", bird); // { name: "Parrot", age: 2, canFly: true }

/******************* 5. Function Interfaces *********************/
/** Define the structure of a function using an interface. */
interface Add {
  (a: number, b: number): number;
}

const add: Add = (a, b) => a + b;
console.log("Sum", add(5, 3));

/******************* 6. Index Signatures *********************/
/** Define dynamic properties using index signatures. */
interface StringMap {
  [key: string]: string;
}

const translations: StringMap = {
  hello: "Hola",
  goodbye: "Adiós",
};

console.log("Translations", translations);

/******************* 7. Class Implementations *********************/
/** Classes can implement interfaces. */
interface Shape {
  area(): number;
  perimeter(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(10, 5);
console.log("Rectangle Area", rectangle.area()); // 50
console.log("Rectangle Perimeter", rectangle.perimeter()); // 30

/******************* 8. Interface vs Type *********************/
/**
 * Both `interface` and `type` can define object shapes, but they have some differences.
 */

/**
 * 1. Declaration Merging:
 *    - `interface` allows declaration merging.
 *    - `type` does not allow declaration merging.
 */
interface Car {
  brand: string;
}
interface Car {
  model: string;
}
const car: Car = { brand: "Toyota", model: "Corolla" };
console.log("Car", car); // { brand: "Toyota", model: "Corolla" }

// `type` cannot be merged
// type MergedType = { property1: string; };
// type MergedType = { property2: number; }; // Error: Duplicate identifier

/**
 * 2. Union and Intersection Types:
 *    - `type` can define union or intersection types.
 *    - `interface` cannot define union types directly because it is used for object shapes.
 */

type StringOrNumber = string | number; // Union type
const unionExample: StringOrNumber = "Hello";
console.log("Union Example", unionExample); // "Hello"

/**
 * 3. When to Use `interface` vs `type`:
 *    - Use `interface` when you want to define an object shape, especially for class or object-oriented
 *     programming.
 *    - Use `type` for more complex scenarios like unions, intersections, or when defining primitive types and
 *    aliases.
 */

/******************* 9. Utility Types with Interfaces *********************/
/** TypeScript provides utility types like `Partial`, `Pick`, and `Omit` to work with interfaces. */
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

const partialPerson: Partial<Person> = {
  firstName: "John",
};

console.log("Partial Person", partialPerson); // { firstName: "John" }

const pickedPerson: Pick<Person, "firstName" | "lastName"> = {
  firstName: "Jane",
  lastName: "Doe",
};

console.log("Picked Person", pickedPerson); // { firstName: "Jane", lastName: "Doe" }

const omittedPerson: Omit<Person, "age"> = {
  firstName: "Alice",
  lastName: "Smith",
};

console.log("Omitted Person", omittedPerson); // { firstName: "Alice", lastName: "Smith" }

export {};
