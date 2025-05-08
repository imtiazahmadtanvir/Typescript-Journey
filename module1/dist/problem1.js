"use strict";
function formatString(input, toUpper = true) {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}
// Example usages:
console.log(formatString("Hello")); // Output: "HELLO"
console.log(formatString("Hello", true)); // Output: "HELLO"
console.log(formatString("Hello", false)); // Output: "hello"
console.log(formatString("Imtiaz")); // Output: "IMTIAZ"
console.log(formatString("Tanvir", false)); // Output: "tanvir"
console.log(formatString("Ahmad", true)); //  Output:"AHMAD"
