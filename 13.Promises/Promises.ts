/******************* Promises in TypeScript *********************/
/**
 * Promises in TypeScript are used to handle asynchronous operations.
 * A Promise represents a value that may be available now, or in the future, or never.
 *
 * Prmoises have three states:
 * - Pending: Initial state, neither fulfilled nor rejected.
 * - Fulfilled: The operation completed successfully.
 * - Rejected: The operation failed.
 */

/******************* 1. Creating a Promise *********************/
/** A simple example of a promise performing an asynchronous task. */
const promiseOne = new Promise<string>(function (resolve, reject) {
  // Simulate an async operation (e.g., DB calls, cryptography, network request, file system operations)
  setTimeout(function () {
    console.log("Async task is complete");
    resolve("PrmoiseOne resolved");
  }, 1000);
});

promiseOne.then(function (message: string) {
  console.log(message); // Output: Promise resolved
});

/******************* 2. Inline Promise Example *********************/
new Promise<string>(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve("PromiseTwo resolved");
  }, 1000);
}).then(function (message: string) {
  console.log(message); // Output: PromiseTwo resolved
});

/******************* 3. Returning Data from Promises *********************/
interface TypescriptInfo {
  username: string;
  email: string;
}

const typescriptInfo: TypescriptInfo = {
  username: "Typescript",
  email: "typescript@gmail.com",
};

// reject is not used, if any parameter is not used, use `_` as a placeholder
const promiseThree = new Promise<TypescriptInfo>(function (resolve, _) {
  setTimeout(function () {
    resolve(typescriptInfo);
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user); // Output: { username: "Typescript", email: "typescript@gmail.com" }
});

/******************* 4. Handling Errors *********************/
interface User {
  username: string;
  password: string;
}

const userDetails: User = {
  username: "Typescript",
  password: "123",
};

const promiseFour = new Promise<User>(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve(userDetails);
    } else {
      reject("ERROR: faild to fetch user");
    }
  }, 1000);
});

promiseFour
  .then((user: User) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

/******************* 5. Consuming Promises with Async/Await *********************/
const promiseFive = new Promise<User>(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve(userDetails);
    } else {
      reject("ERROR: faild to fetch user");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

/******************* 6. Fetching Data with Promises *********************/
// Fetching data from an API using Promises
fetch("https://api.github.com/users/abbu-imran-23")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("Api Response", data);
  })
  .catch((error) => console.log(error));

/******************* 7. Promise.all *********************/
/**
 * Promise.all is used to wait for multiple promises to resolve.
 */
const promiseA = new Promise((resolve) =>
  setTimeout(() => resolve("Promise A"), 1000)
);
const promiseB = new Promise((resolve) =>
  setTimeout(() => resolve("Promise B"), 2000)
);
const promiseC = new Promise((resolve) =>
  setTimeout(() => resolve("Promise C"), 3000)
);

Promise.all([promiseA, promiseB, promiseC])
  .then((values) => {
    console.log("All promises resolved", values);
  })
  .catch((error) => {
    console.log("Error in one of the promises", error);
  });

export {};

/******************* Summary *********************/
/**
 * - Promises are used for asynchronous operations.
 * - Use `.then` for chaining and `.catch` for handling errors.
 * - Use `async/await` for cleaner and more readable asynchronous code.
 * - Use `Promise.all` to handle multiple promises simultaneously.
 */
