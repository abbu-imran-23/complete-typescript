/******************* Classes and Objects in TypeScript *********************/
/**
 * Classes are blueprints for creating objects. They encapsulate data and methods that operate on that data.
 * Objects are instances of classes.
 */

/******************* 1. Defining a Class *********************/
/** Basic class with properties and methods */
class Person {
  name: string; // Property
  age: number; // Property

  constructor(name: string, age: number) {
    // Constructor
    this.name = name;
    this.age = age;
  }

  greet(): string {
    // Method
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Creating an object (instance of the class)
const person1 = new Person("Alice", 25);
console.log(person1.greet()); // Hello, my name is Alice and I am 25 years old.

/******************* 2. Access Modifiers *********************/
/**
 * TypeScript provides access modifiers to control the visibility of class members:
 *  - `public`: Accessible everywhere (default).
 *  - `private`: Accessible only within the class.
 *  - `protected`: Accessible within the class and its subclasses.
 */
class BankAccount {
  public accountNumber: number; // Public property
  private balance: number; // Private property

  constructor(accountNumber: number, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  public getBalance(): number {
    // Public method
    return this.balance;
  }

  private updateBalance(amount: number): void {
    // Private method
    this.balance += amount;
  }

  public deposit(amount: number): void {
    this.updateBalance(amount);
  }
}

const account = new BankAccount(123456, 1000);
console.log(account.getBalance()); // Allowed
// console.log(account.balance); // Error: Property 'balance' is private

/******************* 3. Getters and Setters *********************/
/** Getters and setters allow controlled access to class properties. */
class Circle {
  private _radius: number;

  constructor(radius: number) {
    this._radius = radius;
  }

  get radius(): number {
    // Getter
    return this._radius;
  }

  set radius(value: number) {
    // Setter
    if (value <= 0) throw new Error("Radius must be positive.");
    this._radius = value;
  }

  area(): number {
    return Math.PI * this._radius * this._radius;
  }
}

const circle = new Circle(10);
console.log(circle.radius); // Access using getter
circle.radius = 20; // Update using setter
console.log(circle.area());

/******************* 4. Readonly Properties *********************/
/** Properties declared with `readonly` can only be initialized and not modified later. */
class Book {
  readonly title: string;
  readonly author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const book = new Book("1984", "George Orwell");
console.log(book.title);
// book.title = "Animal Farm"; // Error: Cannot assign to 'title' because it is a read-only property

/******************* 5. Static Members *********************/
/** Static members belong to the class itself and not to any instance. */
class MathUtils {
  static pi = 3.14;

  static calculateCircumference(radius: number): number {
    return 2 * MathUtils.pi * radius;
  }
}

console.log(MathUtils.pi); // Accessing static property
console.log(MathUtils.calculateCircumference(10)); // Calling static method

/******************* 6. Classes and TypeScript Interfaces *********************/
/** Classes can implement interfaces to ensure they follow a specific structure. */
interface Vehicle {
  make: string;
  model: string;
  getDetails(): string;
}

class Car implements Vehicle {
  constructor(public make: string, public model: string) {}

  getDetails(): string {
    return `${this.make} ${this.model}`;
  }
}

const myCar = new Car("Tesla", "Model 3");
console.log(myCar.getDetails());

export {};
