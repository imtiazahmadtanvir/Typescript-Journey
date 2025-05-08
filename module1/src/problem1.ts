

function formatString(input: string, toUpper: boolean = true): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

// Example usages:
console.log(formatString("Hello"));         // Output: "HELLO"
console.log(formatString("Hello", true));   // Output: "HELLO"
console.log(formatString("Hello", false));  // Output: "hello"

console.log(formatString("Imtiaz"));         // Output: "HELLO"
console.log(formatString("Tanvir", false));   // Output: "HELLO"
console.log(formatString("Ahmad", true)); 