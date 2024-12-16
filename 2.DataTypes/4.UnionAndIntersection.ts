/**
 ** Union and Intersection Types in TypeScript:
 ** These types allow for combining multiple types in TypeScript for enhanced flexibility and type safety.
 *
 * 1. Union Type (`|`)
 * 2. Intersection Type (`&`)
 */

/******************* 1. Union Type *********************/
/**
 * A union type allows a variable to hold values of multiple types.
 * It is defined using the `|` (pipe) operator.
 *
 * Use Cases:
 * - When a value can be of multiple types.
 * - Simplifies handling mixed data types in variables or parameters.
 */

let employeeId: string | number;

employeeId = "Hello"; // Valid
employeeId = 42; // Valid
// employeeId = true; // Error: Type 'boolean' is not assignable to type 'string | number'.

/**
 * Example: Array with Union Type
 */
const mixedArray: (string | number)[] = ["Alice", 25, "Bob", 30];
console.log(mixedArray); // ['Alice', 25, 'Bob', 30]

/******************* 2. Intersection Type *********************/
/**
 * An intersection type allows combining multiple types into one.
 * It is defined using the `&` (ampersand) operator.
 *
 * Use Cases:
 * - When a value must satisfy multiple type requirements.
 * - Useful for creating complex types from multiple simpler ones.
 */

type User = {
  name: string;
  email: string;
};

type Admin = {
  role: "admin";
};

type AdminUser = User & Admin;

/**
 * Example: Intersection Type
 */
const admin: AdminUser = {
  name: "Admin",
  email: "admin@example.com",
  role: "admin",
};

console.log(admin); // { name: 'Admin', email: 'admin@example.com', role: 'admin' }

/******************* Summary *********************/
/**
 * Union Type (`|`):
 * - Represents a value that can be one of multiple types.
 * - Use for variables or parameters that accept multiple types.

 * Intersection Type (`&`):
 * - Represents a value that combines properties from multiple types.
 * - Use for creating composite types that satisfy multiple requirements.
 */
