/**
 ** Error Handling in TypeScript:
 ** TypeScript provides robust error-handling mechanisms to ensure code reliability and manage exceptions effectively.
 *
 ** Key Concepts: `try...catch` Block with `finally`
 */

/******************* 1. `try...catch` Block *********************/
/**
 * The `try...catch` block is used to handle runtime errors in a controlled manner.
 *
 * - The `try` block contains code that might throw an error.
 * - The `catch` block is executed if an error occurs in the `try` block.
 * - The `finally` block contains code that will always execute, regardless of whether an error occurred or not.
 *
 * Syntax:
 * try {
 *   // Code that might throw an error
 * } catch (error) {
 *   // Handle the error
 * } finally {
 *   // Code that will always execute
 * }
 */

try {
  const result = JSON.parse("invalidJSON"); // This will throw a SyntaxError
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("Execution of try-catch block completed.");
}

/******************* 2. Common Use Cases for `try...catch` *********************/
/**
 * 1. **Parsing JSON**: Handle invalid or malformed JSON data.
 *    Example:
 *    try {
 *      const data = JSON.parse('invalidJSON');
 *    } catch (error) {
 *      console.error("Invalid JSON:", error.message);
 *    }
 *
 * 2. **API Errors**: Manage network issues or failed API responses.
 *    Example:
 *    try {
 *      const response = await fetch('https://api.example.com/data');
 *      if (!response.ok) throw new Error('API request failed');
 *    } catch (error) {
 *      console.error("API Error:", error.message);
 *    }
 *
 * 3. **File Operations**: Catch errors when reading/writing files.
 *    Example:
 *    try {
 *      const content = fs.readFileSync('nonexistentFile.txt', 'utf8');
 *    } catch (error) {
 *      console.error("File Read Error:", error.message);
 *    }
 *
 * 4. **Database Queries**: Handle connection issues or invalid queries.
 *    Example:
 *    try {
 *      const result = await db.query('SELECT * FROM table');
 *    } catch (error) {
 *      console.error("Database Error:", error.message);
 *    }
 *
 * 5. **Input Validation**: Validate and manage user input errors.
 *    Example:
 *    try {
 *      if (!userInput) throw new Error('Input cannot be empty');
 *    } catch (error) {
 *      console.error("Input Validation Error:", error.message);
 *    }
 *
 * 6. **Cleanup**: Ensure resource cleanup in error scenarios.
 *    Example:
 *    try {
 *      const file = openFile('path/to/file');
 *      // Perform operations on the file
 *    } catch (error) {
 *      console.error("File Operation Error:", error.message);
 *    } finally {
 *      closeFile(file);
 *    }
 *
 * 7. **Custom Errors**: Wrap errors with custom messages for clarity.
 *    Example:
 *    try {
 *      throw new Error("Custom error message");
 *    } catch (error) {
 *      console.error("Custom Error:", error.message);
 *    }
 *
 * 8. **Promise Handling**: Catch promise rejections in non-async code.
 *    Example:
 *    const promise = Promise.reject("Promise rejected");
 *    promise.catch(error => console.error("Promise Error:", error));
 *
 * 9. **Third-Party Libraries**: Safeguard against unexpected library errors.
 *    Example:
 *    try {
 *      thirdPartyFunction();
 *    } catch (error) {
 *      console.error("Library Error:", error.message);
 *    }
 *
 * 10. **Fallbacks**: Implement fallback behavior during failures.
 *     Example:
 *     try {
 *       const data = loadConfig();
 *     } catch (error) {
 *       console.warn("Using default configuration due to error:", error.message);
 *       const data = defaultConfig;
 *     }
 */
