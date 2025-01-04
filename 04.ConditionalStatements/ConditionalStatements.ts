/**
 ** Conditional Statements:
 ** Conditional statements allow you to execute different code based on different conditions.

 * TypeScript supports the following conditional statements:
 * 1. if statement
 * 2. if-else statement
 * 3. Ternary Operator
 * 4. if-else-if ladder
 * 5. switch statement
 */

/******************* 1. if Statement *********************/
/**
 * Executes a block of code if the condition is true.
 */

const score: number = 85;
if (score > 80) {
  console.log("Excellent! You scored above 80.");
}

/******************* 2. if-else Statement *********************/
/**
 * Executes one block of code if the condition is true,
 * and another block of code if the condition is false.
 */

const isUserLoggedIn: boolean = false;
if (isUserLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in.");
}

/******************* 3. Ternary Operator *********************/
/**
 * A compact alternative to `if-else` for simple conditions.
 * Syntax: condition ? expressionIfTrue : expressionIfFalse
 */

const userAge: number = 20;
const canVote: string =
  userAge >= 18 ? "You are eligible to vote." : "You are not eligible to vote.";
console.log("Voting Staus", canVote); // Output: You are eligible to vote.

/******************* 4. if-else-if Ladder *********************/
/**
 * Evaluates multiple conditions in sequence.
 * Executes the first block of code where the condition is true.
 */

const marks: number = 75;
if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 70) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

/******************* 4. switch Statement *********************/
/**
 * Evaluates an expression against multiple cases and executes the block of code
 * corresponding to the matching case. Executes the default block if no cases match.
 */

const day: number = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

/**
 * Summary:
 * - Use `if` or `if-else` for simple conditional checks.
 * - Use `if-else-if` for multiple conditions that need sequential evaluation.
 * - Use `switch` for cleaner code when dealing with multiple possible values of a single variable.
 */

export {};
