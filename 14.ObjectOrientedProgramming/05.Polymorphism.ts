/******************* Polymorphism in TypeScript *********************/
/**
 * Polymorphism is an OOP concept that allows methods to take many forms.
 * - A single method can behave differently based on the object or parameters it interacts with.
 * - Achieved through method overriding, method overloading, and interfaces in TypeScript.
 *
 * **Key Benefits:**
 * - Promotes flexibility and scalability.
 * - Enhances code reusability.
 * - Enables dynamic behavior.
 */

/******************* 1. Method Overriding *********************/
/**
 * - Allows a derived class to provide a specific implementation of a method defined in its base class.
 * - The derived method must have the same name, parameters, and return type as the base method.
 */

class Animal {
  speak(): void {
    console.log("The animal makes a sound.");
  }
}

class Dog extends Animal {
  speak(): void {
    console.log("The dog barks.");
  }
}

class Cat extends Animal {
  speak(): void {
    console.log("The cat meows.");
  }
}

const animals: Animal[] = [new Dog(), new Cat()];
animals.forEach((animal) => animal.speak());
// Output:
// The dog barks.
// The cat meows.

/******************* 2. Method Overloading *********************/
/**
 * - A method with the same name but different parameter types or counts.
 * - TypeScript does not support true method overloading at runtime but allows it at compile time via function signatures.
 */

class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any): any {
    return a + b;
  }
}

const calculator = new Calculator();
console.log(calculator.add(10, 20)); // Output: 30
console.log(calculator.add("Hello, ", "World!")); // Output: Hello, World!

/******************* 3. Polymorphism with Interfaces *********************/
/**
 * - Interfaces define the structure that multiple classes can implement.
 * - Polymorphism allows treating objects of different classes uniformly if they implement the same interface.
 */

interface Shape {
  calculateArea(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  calculateArea(): number {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(10), new Rectangle(5, 10)];
shapes.forEach((shape) => console.log("Area:", shape.calculateArea()));
// Output:
// Area: 314.159...
// Area: 50

/******************* 4. Runtime Polymorphism *********************/
/**
 * - Achieved when the decision to call a particular method is made at runtime.
 * - This is typically accomplished through method overriding.
 */

class Employee {
  getDetails(): void {
    console.log("Employee details.");
  }
}

class Manager extends Employee {
  getDetails(): void {
    console.log("Manager details.");
  }
}

const employees: Employee[] = [new Employee(), new Manager()];
employees.forEach((employee) => employee.getDetails());
// Output:
// Employee details.
// Manager details.

/******************* 5. Compile-Time Polymorphism (Method Overloading) *********************/
/**
 * - Method overloading allows defining multiple methods with the same name but different parameter lists.
 * - Implemented via type unions and optional parameters.
 */

class Printer {
  print(message: string): void;
  print(message: number): void;
  print(message: any): void {
    console.log("Printing:", message);
  }
}

const printer = new Printer();
printer.print("Hello, TypeScript!"); // Output: Printing: Hello, TypeScript!
printer.print(42); // Output: Printing: 42

/******************* 6. Polymorphism with Abstract Classes *********************/
/**
 * - Abstract classes enforce a contract for derived classes while allowing polymorphism.
 */

abstract class Payment {
  abstract processPayment(amount: number): void;
}

class CreditCardPayment extends Payment {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of ${amount}`);
  }
}

class PayPalPayment extends Payment {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of ${amount}`);
  }
}

const payments: Payment[] = [new CreditCardPayment(), new PayPalPayment()];

payments.forEach((payment) => payment.processPayment(100));
// Output:
// Processing credit card payment of 100
// Processing PayPal payment of 100

/******************* 7. Key Points About Polymorphism *********************/
/**
 * 1. **Method Overriding**: Allows derived classes to modify the behavior of base class methods.
 * 2. **Method Overloading**: Enables multiple methods with the same name but different parameter types.
 * 3. **Interfaces**: Provide structure and promote polymorphic behavior.
 * 4. **Abstract Classes**: Allow shared functionality with abstract methods for polymorphism.
 * 5. Polymorphism enhances code flexibility by enabling dynamic method resolution at runtime.
 * 6. Use polymorphism wisely to avoid unnecessary complexity in your code.
 */

export {};
