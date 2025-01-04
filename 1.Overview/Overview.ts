/**
 * ? What is TypeScript?
 * * TypeScript is a programming language that adds static type checking to JavaScript.
 *
 * ? What is JavaScript?
 * * JavaScript is a high-level, dynamic programming language primarily used for web development.
 * * It is one of the core technologies of the web, alongside HTML and CSS.
 * * It enables developers to create interactive and dynamic web pages by manipulating the Document Object
 * * Model (DOM).
 *
 * * TypeScript is a superset of JavaScript, which means:
 * * 1. All JavaScript features and syntax are available in TypeScript.
 * * 2. Every valid JavaScript program is also a valid TypeScript program.
 *
 * * Additionally, the runtime behavior of TypeScript is identical to JavaScript,
 * * as TypeScript is transpiled into plain JavaScript for execution.
 *
 * ? What is Static Type Checking?
 * * Static Type Checking is defining the types for variables, function parameters, return values, etc.
 * * Which helps catch errors during compile time rather than at runtime.
 * * Example:
 * * const name = "Alice"; // JavaScript
 * * const name: string = "Alice"; // TypeScript
 *
 *   ? Why Use TypeScript over JavaScript?
 * * 1. **Error Prevention**: Static typing helps catch errors during development (compile time).
 * * 2. **Extended Features**: Advanced Types, Interfaces, Generics, Enums, Object-oriented programming, etc..
 *
 * ? Advantages of TypeScript?
 * * 1. **Static Typing**: Catches type-related errors during compile time.
 * * 2. **Improved Debugging**: Detects and resolves errors early during development.
 * * 3. **Better Tooling**: Provides features like autocompletion, type inference, and inline documentation.
 * * 4. **Enhanced Code Quality**: Encourages writing clear and maintainable code.
 * * 5. **Cross-Platform Compatibility**: Compiles to JavaScript, making it runnable in any JavaScript
 * *    environment.
 * * 6. **Scalability**: Ideal for large projects and teams by improving code structure and collaboration.
 * * 7. **Maintainability**: Type safety and code predictability make it easier to manage long-term projects.
 *
 * ? Disadvantages of TypeScript?
 * * 1. **Increased Development Time**: Writing type annotations and fixing type-related issues can slow down
 * *    initial development.
 * * 2. **Compilation Overhead**: TypeScript must be transpiled into JavaScript, adding a build step to the
 * *    workflow.
 * * 3. **Not Supported by Browsers**: Browsers cannot run TypeScript directly; it needs to be converted to
 * *    JavaScript.
 * * 4. **Strict Typing Limitations**: Can be restrictive in cases where flexibility and rapid prototyping are
 * *    needed.
 *
 * ? Features of TypeScript?
 * * 1. **Static Typing**: Enables developers to define types for variables, function parameters, and return
 * *    values, ensuring type safety.
 * * 2. **Type Inference**: Automatically infers types when they are not explicitly specified, reducing the
 * *    need for redundant type annotations.
 * * 3. **Interfaces**: Provides a way to define contracts for objects, enabling strict type checking and code
 * *    consistency.
 * * 4. **Generics**: Supports reusable and type-safe components and functions, allowing flexibility while
 * *    maintaining type constraints.
 * * 5. **Modules**: Implements ES6+ style module system, making it easier to organize and manage code across
 * *    large projects.
 * * 6. **Advanced Type Features**: Includes union types, intersection types, mapped types, and conditional
 * *    types for more complex type definitions.
 * * 7. **ES6+ Features**: Supports modern JavaScript features like async/await, destructuring, and template
 * *    literals, with compatibility for older environments.
 * * 8. **Compatibility with JavaScript**: Any JavaScript code is valid TypeScript, making migration seamless
 * *    and incremental.
 * * 9. **Type Aliases and Enums**: Provides ways to define custom types and enums for cleaner and more
 * *     readable code.
 * * 10. **Rich IDE Support**: Enhances developer productivity with features like autocompletion, inline
 * *     documentation, and error highlighting.
 * * 11. **Error Prevention**: Detects potential issues during development, reducing runtime errors in
 * *     production.
 * * 12. **Extensibility**: Works well with third-party libraries and tools, with support for type definitions
 * *     through @types packages.
 *
 * ? Requirements needed to run a TypeScript program?
 * * 1. Node.js (preferably LTS version) and npm installed.
 * * 2. TypeScript installed globally or locally.
 * * 3. Text editor or IDE (VSCode, Sublime Text, etc.) to write code.
 * * 4. Command-line interface (Terminal or Command Prompt).
 *
 * ? Steps to set up and execute a TypeScript program?
 *
 * * Before you start writing and executing TypeScript programs, you'll need to set up TypeScript on your
 * * machine.
 *
 * *  1. **Install Node.js and npm**:
 *    * TypeScript requires Node.js and npm (Node Package Manager) for installation and package management.
 *    * Download and install Node.js from: https://nodejs.org/
 *
 * * 2. **Install TypeScript**:
 *    * TypeScript can be installed globally or locally using npm.
 *    * Open your terminal or command prompt and run the following command to install TypeScript globally:
 *      ```
 *      npm install -g typescript
 *      ```
 *    * To install TypeScript locally within a project, use:
 *      ```
 *      npm install --save-dev typescript
 *      ```
 *
 * * 3. **Create a TypeScript Project**:
 *    * Create a new directory for your TypeScript project.
 *    * Inside your project folder, create a new TypeScript file (e.g., `app.ts`) and write your TypeScript
 *    * code.
 *
 * * 4. **Transpile your TypeScript code to JavaScript code**:
 *    * To convert TypeScript code to JavaScript, use the TypeScript compiler `tsc` and run the following
 *    * command in your terminal:
 *    ```
 *    tsc app.ts
 *    ```
 *
 * * 5. **Run the JavaScript code**:
 *   * Once the `tsc` command successfully transpiles the TypeScript code, you'll have a corresponding
 *   * JavaScript file (e.g., `app.js`).
 *   * You can now run the JavaScript code using Node.js or in a browser environment.
 *     ```
 *     node app.js
 *     ```
 */

export {};
