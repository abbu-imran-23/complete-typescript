/**
 * TypeScript Objects:
 * Objects in TypeScript are used to store collections of properties and methods.
 * They provide type safety by allowing you to define the shape of the object using interfaces or type aliases.
 */

/******************* 1. Declaring Objects *********************/
/** Using an object literal with inferred types: */
const person = {
  name: "John Doe",
  age: 30,
  isEmployed: true,
};

console.log("Person", person); // { name: "John Doe", age: 30, isEmployed: true }

/** Explicitly typing an object using an inline type annotation: */
type Car = {
  brand: string;
  model: string;
  year: number;
};

const car: Car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
};

console.log("Car", car); // { brand: "Toyota", model: "Camry", year: 2020 }

/******************* 2. Optional and Readonly Properties *********************/
/** Optional properties: */
type Book = {
  title: string;
  author?: string;
};

const book: Book = {
  title: "TypeScript Handbook",
};

console.log("Book", book); // { title: "TypeScript Handbook" }

/** Readonly properties: */
type Point = {
  readonly x: number;
  readonly y: number;
};

const point: Point = { x: 10, y: 20 };
// point.x = 15; // Error: Cannot assign to 'x' because it is a read-only property.
console.log("Point", point); // { x: 10, y: 20 }

/******************* 3. Using Interfaces *********************/
/** Defining an object structure using an interface: */
interface Employee {
  id: number;
  name: string;
  department?: string; // Optional property
}

const employee: Employee = {
  id: 101,
  name: "Alice",
};

console.log("Employee", employee); // { id: 101, name: "Alice" }

/******************* 4. Using Type Aliases *********************/
/** Defining an object structure using a type alias: */
type Product = {
  id: number;
  name: string;
  price: number;
};

const product: Product = {
  id: 1,
  name: "Laptop",
  price: 1000,
};

console.log("Product", product); // { id: 1, name: "Laptop", price: 1000 }

/******************* 5. Nested Objects *********************/
/** Objects can contain other objects as properties: */
const company = {
  name: "Tech Solutions Inc.",
  address: {
    street: "789 Technology Way",
    city: "Innovationville",
    state: "CA",
    zip: "90001",
    building: {
      name: "Tech Hub",
      floor: {
        number: 5,
        office: {
          roomNumber: 501,
          desk: {
            id: "A123",
            type: "Standing Desk",
          },
        },
      },
    },
  },
};

console.log("Company", company); // prints till the first level of nesting
console.log("Company:", JSON.stringify(company, null, 2)); // prints the entire nested object
console.dir(company, { depth: null, color: true }); // prints the entire nested object

/* Output:
  {
    orderId: 12345,
    customer: { name: "John", address: "123 Main St" },
    items: [ { productId: 1, quantity: 2 }, { productId: 2, quantity: 1 } ]
  }
  */

/******************* 6. Methods in Objects *********************/
/** Objects can contain methods as properties: */
const calculator = {
  add(a: number, b: number): number {
    return a + b;
  },
  subtract(a: number, b: number): number {
    return a - b;
  },
};

console.log("Add", calculator.add(5, 3)); // 8
console.log("Subtract", calculator.subtract(5, 3)); // 2

/******************* 7. Extending Object Types *********************/
/** Extending interfaces: */
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  name: "Buddy",
  age: 3,
  breed: "Golden Retriever",
};

console.log("Dog", dog); // { name: "Buddy", age: 3, breed: "Golden Retriever" }

/** Combining type aliases with intersections: */
type Position = {
  x: number;
  y: number;
};

type Dimensions = {
  width: number;
  height: number;
};

type Rectangle = Position & Dimensions;

const rectangle: Rectangle = {
  x: 0,
  y: 0,
  width: 100,
  height: 50,
};

console.log("Rectangle", rectangle); // { x: 0, y: 0, width: 100, height: 50 }

/******************* 8. Index Signatures *********************/
/** Allow objects to have arbitrary property names: */
type UserPreferences = {
  [key: string]: string;
};

const userPreferences: UserPreferences = {
  theme: "dark",
  language: "en",
};

console.log("User Preferences", userPreferences); // { theme: "dark", language: "en" }

/******************* 9. Object Destructuring *********************/
/** Extract properties from objects using destructuring: */
const { name, age } = dog;
console.log("Dog's Name", name); // "Buddy"
console.log("Dog's Age", age); // 3

/******************* 10. Object.freeze *********************/
/** Prevent modification of an object's properties: */
const user = { id: 1, name: "Alice" };
const frozenObject = Object.freeze(user);
// frozenObject.id = 2; // Error: Cannot assign to read only property 'id' of object
console.log("Frozen Object", frozenObject); // { id: 1, name: "Alice" }

/******************* 11. Object.assign *********************/
/** Copy properties from one or more source objects to a target object: */
const target = { a: 1 };
const source = { b: 2, c: 3 };
const result = Object.assign(target, source);
console.log("Result Object", result); // { a: 1, b: 2, c: 3 }

export {};
