/**
 ** Date Handling in TypeScript:
 ** TypeScript provides native JavaScript `Date` methods to work with dates and times.
 **
 ** Key Methods:
 ** 1. `new Date()`: Creates a new `Date` object representing the current date and time.
 ** 2. `toString()`: Converts a `Date` object to a string, showing the full date and time.
 ** 3. `toDateString()`: Returns the date portion of the `Date` object as a string.
 ** 4. `toISOString()`: Converts a `Date` object to a string in ISO 8601 format.
 ** 5. `toLocaleString()`: Converts a `Date` object to a string based on the locale.
 ** 6. `getDay()`: Returns the day of the week (0 - Sunday, 6 - Saturday).
 ** 7. `getMonth()`: Returns the month (0 - January, 11 - December).
 ** 8. `Date.now()`: Returns the number of milliseconds elapsed since January 1, 1970 (UNIX Epoch).
 */

/******************* 1. Creating Date *********************/
// Creating a new Date object representing the current date and time.
const date = new Date();
console.log(date); // e.g., 2024-12-15T14:50:06.360Z (ISO format)
console.log(date.toString()); // e.g., Sun Dec 15 2024 20:20:05 GMT+0530 (India Standard Time)
console.log(date.toDateString()); // e.g., Sun Dec 15 2024 (Date portion only, MMM DD YYYY)
console.log(date.toISOString()); // e.g., 2024-12-15T14:50:00.835Z (ISO 8601 format, YYYY-MM-DDTHH:mm:ss.sssZ)
console.log(date.toLocaleString()); // e.g., 15/12/2024, 8:20:00 PM (Locale-based string, DD/MM/YYYY, h:mm:ss AM/PM)

// Getting the day of the week (0 - Sunday, 6 - Saturday)
console.log(date.getDay()); // 0 (Sunday)

// Getting the month (0 - January, 11 - December)
console.log(date.getMonth()); // 11 (December)

/******************* 2. Creating Date with Specific Values *********************/
// Creating a Date object with specific values
const createdDate = new Date(2024, 0, 23); // January 23, 2024 (months are 0-indexed)
console.log(createdDate.toDateString()); // Tue Jan 23 2024 (MMM DD YYYY)

/******************* 3. Using Date.now() *********************/
// Getting the current timestamp in milliseconds since the UNIX Epoch
const timeStamp = Date.now();
console.log(timeStamp); // e.g., 1734525296246 (Milliseconds since UNIX Epoch)

// Converting the timestamp to seconds
console.log(Math.floor(timeStamp / 1000)); // e.g., 1734525296 (Seconds since UNIX Epoch)

/******************* 4. Other Date Methods *********************/
// Creating a Date object with a specific date
const specificDate = new Date(2024, 5, 15); // June 15, 2024
console.log(specificDate.getFullYear()); // 2024 (Getting the full year)
console.log(specificDate.getHours()); // 0 (Getting the hours)
console.log(specificDate.getMinutes()); // 0 (Getting the minutes)
console.log(specificDate.getSeconds()); // 0 (Getting the seconds)

/******************* 5. Date Arithmetic *********************/
// Adding days to a date
const futureDate = new Date(date);
futureDate.setDate(date.getDate() + 5); // Add 5 days to the current date
console.log(futureDate.toDateString()); // Outputs the new date (5 days ahead, MMM DD YYYY)

/******************* 6. Date Comparison *********************/
// Comparing two dates
const date1 = new Date(2024, 0, 1); // January 1, 2024
const date2 = new Date(2024, 5, 15); // June 15, 2024
console.log(date1 > date2); // false
console.log(date1 < date2); // true
console.log(date1.getTime() === date2.getTime()); // false (Comparison by time)
