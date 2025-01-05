/******************* Object-Oriented Programming in TypeScript *********************/
/**
 * Object-Oriented Programming (OOP) is a programming paradigm based on the concept of objects.
 * OOP in TypeScript is built on four main pillars:
 *
 * 1. **Abstraction**:
 *    - Hides the internal implementation details and shows only the essential features.
 *    - Implemented using abstract classes and interfaces in TypeScript.
 *
 * 2. **Encapsulation**:
 *    - Groups related properties and methods into objects and restricts direct access to some of the object's
 *     components.
 *    - Achieved using access modifiers like `private`, `protected`, and `public`.
 *
 * 3. **Inheritance**:
 *    - Allows one class to inherit the properties and methods of another class.
 *    - TypeScript supports inheritance using the `extends` keyword.
 *
 * 4. **Polymorphism**:
 *    - Allows a single interface or function to be used with different types.
 *    - Achieved through method overriding or interfaces in TypeScript.
 */

/********************* Abstraction ***********************/
/**
 * Abstraction is a fundamental OOP concept that focuses on hiding implementation details
 * and exposing only the essential features of an object.
 * TypeScript achieves abstraction using abstract classes and interfaces.
 */

/******************* 1. Abstract Classes *********************/
/**
 * - Abstract classes cannot be instantiated directly.
 * - They provide a base structure with concrete (implemented) and abstract (unimplemented) methods.
 * - Classes inheriting from an abstract class must implement all its abstract methods.
 */

abstract class Shape {
  abstract calculateArea(): number; // Abstract method
  abstract calculatePerimeter(): number; // Abstract method
}

// concrete class
class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

// concrete class
class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const circle = new Circle(10);
console.log("Circle Area:", circle.calculateArea()); // Output: 314.1592653589793
console.log("Circle Perimeter:", circle.calculatePerimeter()); // Output: 62.83185307179586

const rectangle = new Rectangle(20, 10);
console.log("Rectangle Area:", rectangle.calculateArea()); // Output: 200
console.log("Rectangle Perimeter:", rectangle.calculatePerimeter()); // Output: 60

/******************* 2. Abstract Classes with Properties *********************/
/**
 * Abstract classes can define both properties and methods to be inherited.
 * Child classes can override these properties.
 */
abstract class Animal {
  abstract name: string;

  abstract makeSound(): void;

  move(): void {
    console.log(`${this.name} is moving.`);
  }
}

class Dog extends Animal {
  name = "Dog";

  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog();
dog.makeSound(); // Output: Woof! Woof!
dog.move(); // Output: Dog is moving.

/******************* 3. Abstraction Using Interfaces *********************/
/**
 * Interfaces can also be used to achieve abstraction.
 * They define the structure of an object or class without providing the implementation.
 */

interface Vehicle {
  speed: number;

  start(): void;
  stop(): void;
}

class Car implements Vehicle {
  constructor(public speed: number) {}

  start(): void {
    console.log("Car is starting with speed:", this.speed);
  }

  stop(): void {
    console.log("Car is stopping.");
  }
}

const car = new Car(120);
car.start(); // Output: Car is starting with speed: 120
car.stop(); // Output: Car is stopping

/******************* 4. Key Points About Abstraction *********************/
/**
 * 1. Abstract classes allow shared functionality (via concrete methods) and enforce rules
 *    (via abstract methods) for derived classes.
 * 2. Interfaces provide pure abstraction and focus solely on the structure of objects.
 * 3. Use abstract classes when you need shared implementation details and abstraction together.
 * 4. Use interfaces when you want to define only the structure of an object or class.
 */

export {};
