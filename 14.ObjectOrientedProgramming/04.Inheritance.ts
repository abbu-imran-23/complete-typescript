/******************* Inheritance in TypeScript *********************/
/**
 * Inheritance is a fundamental concept of OOP that allows a class to inherit properties and methods from
 * another class.
 * - The base class (or parent class) provides common functionality.
 * - The derived class (or child class) extends the base class and can add its own functionality or override
 *   base methods.
 *
 * **Key Benefits:**
 * - Promotes code reuse and reduces redundancy.
 * - Establishes a clear hierarchy and relationship between classes.
 * - Facilitates scalability by allowing extension of functionality without modifying the base class.
 */

/******************* 1. Basic Inheritance *********************/
/**
 * - The `extends` keyword is used to create a child class that inherits from a parent class.
 */

class Vehicle {
  constructor(public brand: string) {}

  move(): void {
    console.log(`${this.brand} is moving.`);
  }
}

class Car extends Vehicle {
  constructor(brand: string, public doors: number) {
    super(brand); // Calls the constructor of the parent class
  }

  honk(): void {
    console.log(`${this.brand} is honking!`);
  }
}

const myCar = new Car("Toyota", 4);
myCar.move(); // Output: Toyota is moving.
myCar.honk(); // Output: Toyota is honking!

/******************* 2. Method Overriding *********************/
/**
 * - A derived class can override a method from the base class to provide specific implementation.
 */

class Animal {
  eat(): void {
    console.log("This animal is eating.");
  }
}

class Dog extends Animal {
  eat(): void {
    console.log("The dog is eating dog food.");
  }
}

const dog = new Dog();
dog.eat(); // Output: The dog is eating dog food.

/******************* 3. Using `super` *********************/
/**
 * - The `super` keyword is used to access and call methods of the base class from the derived class.
 */

class Person {
  constructor(public name: string) {}

  greet(): void {
    console.log(`Hello, I am ${this.name}.`);
  }
}

class Employee extends Person {
  constructor(name: string, public role: string) {
    super(name); // Calls the constructor of the Person class
  }

  greet(): void {
    super.greet(); // Calls the greet method from the Person class
    console.log(`I work as a ${this.role}.`);
  }
}

const employee = new Employee("Alice", "Software Engineer");
employee.greet();
// Output:
// Hello, I am Alice.
// I work as a Software Engineer.

/******************* 4. Inheritance with Access Modifiers *********************/
/**
 * - Inherited properties and methods follow their original access modifiers.
 * - `public`: Accessible everywhere.
 * - `protected`: Accessible in the base and derived classes.
 * - `private`: Not inherited or accessible in the derived class.
 */

class Shape {
  protected type: string;

  constructor(type: string) {
    this.type = type;
  }

  displayType(): void {
    console.log(`Shape type: ${this.type}`);
  }
}

class Triangle extends Shape {
  constructor() {
    super("Triangle");
  }

  displayDetails(): void {
    console.log(`Details of ${this.type}`); // Protected property is accessible
  }
}

const triangle = new Triangle();
triangle.displayDetails(); // Output: Details of Triangle

// triangle.type; // Error: Protected property not accessible outside the class

/******************* 5. Multi-level Inheritance *********************/
/**
 * - TypeScript supports multi-level inheritance where a derived class can itself be extended.
 */

class LivingBeing {
  breathe(): void {
    console.log("Breathing...");
  }
}

class Mammal extends LivingBeing {
  walk(): void {
    console.log("Walking...");
  }
}

class Human extends Mammal {
  think(): void {
    console.log("Thinking...");
  }
}

const human = new Human();
human.breathe(); // Output: Breathing...
human.walk(); // Output: Walking...
human.think(); // Output: Thinking...

/******************* 6. Abstract Classes and Inheritance *********************/
/**
 * - Abstract classes can be extended but cannot be instantiated.
 * - Derived classes must implement abstract methods.
 */

abstract class Appliance {
  abstract turnOn(): void;

  turnOff(): void {
    console.log("Appliance turned off.");
  }
}

class Fan extends Appliance {
  turnOn(): void {
    console.log("Fan is now running.");
  }
}

const fan = new Fan();
fan.turnOn(); // Output: Fan is now running.
fan.turnOff(); // Output: Appliance turned off.

/******************* 7. Interfaces and Inheritance *********************/
/**
 * - Interfaces can extend other interfaces to create a hierarchical structure.
 */

interface AnimalActions {
  eat(): void;
}

interface MammalActions extends AnimalActions {
  walk(): void;
}

class Cat implements MammalActions {
  eat(): void {
    console.log("Cat is eating.");
  }

  walk(): void {
    console.log("Cat is walking.");
  }
}

const cat = new Cat();
cat.eat(); // Output: Cat is eating.
cat.walk(); // Output: Cat is walking.

/******************* 8. Key Points About Inheritance *********************/
/**
 * 1. Use inheritance to promote code reuse and create relationships between classes.
 * 2. Avoid excessive inheritance (deep hierarchies) to reduce complexity.
 * 3. Favor composition over inheritance when objects have a "has-a" relationship instead of "is-a."
 * 4. Use method overriding and `super` to customize or reuse parent functionality.
 * 5. Access modifiers (`public`, `private`, `protected`) control the accessibility of inherited members.
 */

export {};
