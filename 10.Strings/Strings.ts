/**
 * TypeScript Strings:
 * Strings in TypeScript are used to represent textual data. They are a sequence of characters and are enclosed
 * in either single quotes (`'`), double quotes (`"`), or backticks (`` ` `` for template literals).
 *
 * TypeScript provides type safety for strings, ensuring consistency and reducing runtime errors.
 */

/******************* 1. Declaring Strings *********************/
/** Using single quotes: */
const singleQuoteString: string = "Hello, TypeScript!";

/** Using double quotes: */
const doubleQuoteString: string = "Hello, TypeScript!";

/** Using backticks for template literals: */
const templateLiteralString: string = `Hello, TypeScript!`;

console.log("Single Quote String", singleQuoteString); // 'Hello, TypeScript!'
console.log("Double Quote String", doubleQuoteString); // "Hello, TypeScript!"
console.log("Template Literal String", templateLiteralString); // `Hello, TypeScript!`

/******************* 2. Template Literals *********************/
/**
 * Template literals allow embedding expressions and multi-line strings.
 */
const name = "TypeScript";
const version = 4.9;

const greeting: string = `Welcome to ${name}, version ${version}.`;
console.log("Greeting using Template Literal", greeting); // "Welcome to TypeScript, version 4.9."

/******************* 3. String Methods *********************/
/**
 * TypeScript provides all JavaScript string methods, ensuring type safety.
 */

// 3.1 Finding the length of a string
console.log("Length of string", singleQuoteString.length); // 17

// 3.2 Converting to uppercase
const upperCaseString = singleQuoteString.toUpperCase();
console.log("Uppercase String", upperCaseString); // 'HELLO, TYPESCRIPT!'

// 3.3 Converting to lowercase
const lowerCaseString = singleQuoteString.toLowerCase();
console.log("Lowercase String", lowerCaseString); // 'hello, typescript!'

// 3.4 Checking if a string contains a substring
const containsHello = singleQuoteString.includes("Hello");
console.log("Does the string contain 'Hello'?", containsHello); // true

// 3.5 Checking if a string starts with a specific substring
const startsWithHello = singleQuoteString.startsWith("Hello");
console.log("Does the string start with 'Hello'?", startsWithHello); // true

// 3.6 Checking if a string ends with a specific substring
const endsWithTypeScript = singleQuoteString.endsWith("TypeScript!");
console.log("Does the string end with 'TypeScript!'?", endsWithTypeScript); // true

// 3.7 Extracting a substring
const substring = singleQuoteString.substring(7, 16);
console.log("Extracted Substring", substring); // 'TypeScript'

// 3.8 Replacing a substring
const replacedString = singleQuoteString.replace("TypeScript", "JavaScript");
console.log("Replaced String", replacedString); // 'Hello, JavaScript!'

// 3.9 Splitting a string
const splitString = singleQuoteString.split(", ");
console.log("Split String", splitString); // ['Hello', 'TypeScript!']

// 3.10 Trimming whitespace
const stringWithWhitespace = "   Hello, TypeScript!   ";
const trimmedString = stringWithWhitespace.trim();
console.log("Trimmed String", trimmedString); // 'Hello, TypeScript!'

// 3.11 Repeating a string
const repeatedString = "Hello! ".repeat(3);
console.log("Repeated String", repeatedString); // 'Hello! Hello! Hello! '

// 3.12 Accessing characters by index
const charAtIndex = singleQuoteString.charAt(1);
console.log("Character at index 1", charAtIndex); // 'e'

// 3.13 Converting a string to an array of characters
const charArray = Array.from(singleQuoteString);
console.log("Array of Characters", charArray);
// ['H', 'e', 'l', 'l', 'o', ',', ' ', 'T', 'y', 'p', 'e', 'S', 'c', 'r', 'i', 'p', 't', '!']

/******************* 4. Multi-line Strings *********************/
/**
 * Strings can span multiple lines using template literals.
 */
const multiLineString = `This is a
multi-line
string.`;
console.log("Multi-line String", multiLineString);

/******************* 5. String Concatenation *********************/
/**
 * Strings can be concatenated using the `+` operator or template literals.
 */
const part1 = "Hello";
const part2 = "World";
const concatenatedString = part1 + ", " + part2 + "!";
console.log("Concatenated String", concatenatedString); // 'Hello, World!'

/******************* 6. Escaping Characters *********************/
/**
 * Escape sequences can be used to include special characters in strings.
 */
const escapedString = 'He said, \n "TypeScript is great!"';
console.log("Escaped String", escapedString); // 'He said, "TypeScript is great!"'

/******************* 7. Readonly Strings *********************/
/**
 * Strings are immutable in TypeScript, meaning their values cannot be changed after creation.
 */
let immutableString = "Hello";
// immutableString[0] = "h"; // Error: Cannot assign to '0' because it is a read-only property.

console.log("Immutable String", immutableString); // 'Hello'

/******************* 8. String Type Assertions *********************/
/**
 * TypeScript allows asserting a value as a string.
 */
const someValue: unknown = "This is a string.";
const assertedString = someValue as string;
console.log("Asserted String", assertedString); // 'This is a string.'

export {};
