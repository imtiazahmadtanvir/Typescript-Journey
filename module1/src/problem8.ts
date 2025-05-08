// Problem 8: Async Square Function

async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }
  
  // Example usage:
  squareAsync(4).then(result => console.log(result))       // Output after 1s: 16
  squareAsync(-3).catch(error => console.error(error));     // Output: Error: Negative number not allowed
  