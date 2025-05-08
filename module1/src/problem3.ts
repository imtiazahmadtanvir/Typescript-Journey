//Problem 3: Concatenate Arrays


function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
  }
  
  // Examples
  console.log(concatenateArrays(["a", "b"], ["c"]));       // ["a", "b", "c"]
  console.log(concatenateArrays([1, 2], [3, 4], [5]));     // [1, 2, 3, 4, 5]
  