// Description: Create a function that takes a string and an optional boolean.

// 1.If the boolean is true or not provided, return the string in uppercase.
// 2.If the boolean is false, return the string in lowercase.

function formatString(input: string, toUpper: boolean = true): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

// Example usages:
console.log(formatString("Hello")); // Output: "HELLO"
console.log(formatString("Hello", true)); // Output: "HELLO"
console.log(formatString("Hello", false)); // Output: "hello"

console.log(formatString("Imtiaz")); // Output: "IMTIAZ"
console.log(formatString("Tanvir", false)); // Output: "tanvir"
console.log(formatString("Ahmad", true)); //  Output:"AHMAD"
