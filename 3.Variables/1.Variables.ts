/**
 ** Variable Declaration in TypeScript:
 * TypeScript provides three keywords to declare variables:
 * 1. let  - Used to declare block-scoped variables that can be reassigned.
 * 2. const - Used to declare block-scoped constants that cannot be reassigned.
 * 3. var  - Used to declare function-scoped variables (legacy, avoid using it).
 */

/******************* 1. let *********************/
/**
 * Preferred for variables that need to be updated.
 * Block-scoped variable that can be reassigned.
 */

// Primitive
let value: number = 0;
console.log("Count Before Reassigned", value); // 0

value = 10; // Reassigning is allowed
console.log("Count After Reassigned", value); // 10

// Non-Primitive
let countries: string[] = ["India", "Russia", "USA", "China"];
console.log("Countries Before Modification", countries); // [ 'India', 'Russia', 'USA', 'China' ]

countries[3] = "Japan";
console.log("Countries After Modification", countries); // [ 'India', 'Russia', 'USA', 'Japan' ]

countries = ["Norway", "Italy", "France"];
console.log("Countries After Reassigned", countries); // [ 'Norway', 'Italy', 'France' ]

{
  let blockScopedVariable: string = "I'm inside the block for let";
  console.log(blockScopedVariable); // Accessible here and prints - I'm inside the block for let
}
// console.log(blockScopedVariable); // Error: blockScopedVariable is not defined

/******************* 2. const *********************/
/**
 * Used for values that should remain constant.
 * Block-scoped constant that cannot be reassigned.
 */

// Primitive
const pi: number = 3.14;
console.log("Value of Pi", pi); // 3.14
// pi = 3.15; // Error: Cannot assign to 'piValue' because it is a constant

// Non-Primitive
type UserInfo = { name: string; age: number };
const userInfo: UserInfo = { name: "John", age: 30 };
console.log("userInfo Before Modification", userInfo); // { name: 'John', age: 30 }

userInfo.age = 31; // Allowed: Properties of objects can be modified
console.log("userInfo After Modification", userInfo); // { name: 'John', age: 31 }

// userInfo = { name: "Alice", age: 25 }; // Error: Cannot reassign a constant object

const cities: string[] = ["Bangalore", "Hyderabad", "Delhi", "Mumbai"];
console.log("cities Before Modification", cities); // [ 'Bangalore', 'Hyderabad', 'Delhi', 'Mumbai' ]

cities[2] = "Gurugram"; // Allowed: elements of the array can be modified
console.log("cities After Modification", cities); // [ 'Bangalore', 'Hyderabad', 'Gurugram', 'Mumbai' ]

// cities = ["Pune"]; // Cannot assign to 'cities' because it is a constant

{
  const blockScopedVariable: string = "I'm inside the block for const";
  console.log(blockScopedVariable); // Accessible here and prints - I'm inside the block for const
}
// console.log(blockScopedVariable); // Error: blockScopedVariable is not defined

/******************* 3. var *********************/
/**
 * Function-scoped variable (legacy keyword).
 * Avoid using 'var' due to potential scoping issues.
 */

// Primitive
var count: number = 0;
console.log("Count Before Reassigned", count); // 0

count = 10; // Reassigning is allowed
console.log("Count After Reassigned", count); // 10

// Non-Primitive
var codingLanguages: string[] = ["JavaScript", "TypeScript", "Python"];
console.log("Languages Before Modification", codingLanguages); // [ 'JavaScript', 'TypeScript', 'Python' ]

codingLanguages[2] = "Java";
console.log("Languages After Modification", codingLanguages); // [ 'JavaScript', 'TypeScript', 'Java' ]

codingLanguages = ["Ruby", "Go", "Rust"];
console.log("Languages After Reassigned", codingLanguages); // [ 'Ruby', 'Go', 'Rust' ]

var legacyVariable: string = "I'm a legacy variable";
console.log(legacyVariable);

{
  var globalScopedVariable: string = "I'm accessible outside the block!";
  console.log(globalScopedVariable);
}
console.log(globalScopedVariable); // Accessible here (global-scoped, not block-scoped)

/**
 * Summary:
 * - Use `let` for variables that need to be reassigned.
 * - Use `const` for values that should remain constant.
 * - Avoid using `var` due to its lack of block scope and potential hoisting issues.
 */

type Summary = {
  Keyword: string;
  scope: string;
  Reassignment: string;
  Modification: string;
};

const summary: Summary[] = [
  {
    Keyword: "let",
    scope: "block-scoped",
    Reassignment: "Yes, can be reassigned",
    Modification: "Yes, properties of non-primitive types can be modified",
  },
  {
    Keyword: "const",
    scope: "block-scoped",
    Reassignment: "No, cannot be reassigned",
    Modification: "Yes, properties of non-primitive types can be modified",
  },
  {
    Keyword: "var",
    scope: "global-scoped",
    Reassignment: "Yes, can be reassigned",
    Modification: "Yes, properties of non-primitive types can be modified",
  },
];

// Use console.table to display the object
console.table(summary);

export {};
