/********************* Encapsulation ***********************/
/**
 * Encapsulation is one of the four pillars of OOP.
 * It involves bundling data (properties) and methods (functions) that operate on the data into a single unit
 * (class).
 * Encapsulation also restricts direct access to certain components of an object and exposes only what is
 * necessary.
 *
 * **Key Benefits:**
 * - Protects object integrity by preventing unauthorized access or modification of its data.
 * - Simplifies maintenance and reduces complexity.
 * - Enables controlled access to properties through methods (getters and setters).
 *
 * TypeScript achieves encapsulation using **access modifiers**: `private`, `protected`, and `public`.
 */

/******************* 1. Access Modifiers *********************/
/**
 * - **`public`**: The default access modifier. Members are accessible everywhere.
 * - **`private`**: Members are accessible only within the class.
 * - **`protected`**: Members are accessible within the class and its subclasses.
 */

class Person {
  public name: string; // Public: Accessible everywhere
  private age: number; // Private: Accessible only within this class
  protected address: string; // Protected: Accessible within this class and subclasses

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  public greet(): void {
    console.log(`Hello, my name is ${this.name}.`);
  }

  private calculateYearsToRetirement(): number {
    return 65 - this.age;
  }

  protected getAddress(): string {
    return this.address;
  }
}

const person = new Person("John", 30, "123 Main Street");
person.greet(); // Output: Hello, my name is John.
// person.calculateYearsToRetirement(); // Error: Private method not accessible
// console.log(person.address); // Error: Protected property not accessible

/******************* 2. Encapsulation with Getters and Setters *********************/
/**
 * TypeScript provides `get` and `set` keywords to define getter and setter methods,
 * enabling controlled access and modification of private properties.
 */

class BankAccount {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  // Getter for balance
  public get balance(): number {
    return this._balance;
  }

  // Setter for balance with validation
  public set balance(amount: number) {
    if (amount < 0) {
      console.log("Invalid amount. Balance cannot be negative.");
    } else {
      this._balance = amount;
    }
  }
}

const account = new BankAccount(1000);
console.log("Initial Balance:", account.balance); // Output: Initial Balance: 1000
account.balance = 500;
console.log("Updated Balance:", account.balance); // Output: Updated Balance: 500
account.balance = -100; // Output: Invalid amount. Balance cannot be negative.

/******************* 3. Example: Encapsulation in a Real-world Scenario *********************/
/**
 * Example: Managing a user profile with encapsulated data and controlled access.
 */

class UserProfile {
  private password: string;

  constructor(public username: string, password: string) {
    this.password = password;
  }

  public updatePassword(oldPassword: string, newPassword: string): void {
    if (this.password === oldPassword) {
      this.password = newPassword;
      console.log("Password updated successfully.");
    } else {
      console.log("Error: Old password is incorrect.");
    }
  }

  public validatePassword(inputPassword: string): boolean {
    return this.password === inputPassword;
  }
}

const user = new UserProfile("johndoe", "secret123");
console.log(user.username); // Output: johndoe
// console.log(user.password); // Error: Private property not accessible
user.updatePassword("secret123", "newSecret"); // Output: Password updated successfully.
console.log(user.validatePassword("newSecret")); // Output: true

/******************* 4. Key Points About Encapsulation *********************/
/**
 * - Use `private` and `protected` access modifiers to restrict direct access to class members.
 * - Employ getter and setter methods to provide controlled access to private properties.
 * - Encapsulation ensures better control over the integrity of an object's data.
 * - Promotes a modular approach, making classes easier to maintain and debug.
 */

export {};
