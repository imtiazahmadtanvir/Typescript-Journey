// Problem 5: Process Value

function processValue(value: string | number): number {
    return typeof value === "string" ? value.length : value * 2;
  }
  
  // Examples
  console.log(processValue("hello")); // 5
  console.log(processValue(10));      // 20
  