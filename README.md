# 📘 TypeScript Interview Questions – Blog Post

This blog post covers two essential concepts in TypeScript:

1. Differences Between Interfaces and Types in TypeScript
2. Difference between `any`, `unknown`, and `never` types  



## ✨ 1. Interfaces vs Types in TypeScript

TypeScript provides two powerful tools to define the shape of objects: **interfaces** and **type aliases**. Though often used interchangeably, there are key differences in behavior and use cases.

### 🔍 Key Differences

| Feature                    | Interface                             | Type Alias                          |
|---------------------------|----------------------------------------|-------------------------------------|
| Extension                 | Supports `extends` (interface-to-interface) | Supports intersection (`&`)         |
| Merging                  | Automatically merges declarations       | Cannot merge, will throw errors     |
| Use with Primitives       | ❌ Not usable for primitives like `string` | ✅ Can define as `type Age = number`|
| Declaration Reusability   | Ideal for OOP-style modeling            | Flexible for unions, intersections  |

### 🛠 Example:

```ts
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: string;
}

type Developer = Person & { programmingLanguage: string };
```


## ✨ 2. Difference Between `any`, `unknown`, and `never` in TypeScript

TypeScript introduces strict typing to JavaScript, helping us avoid runtime errors. Understanding the special types `any`, `unknown`, and `never` is critical for writing safer and more predictable code.

### `any`
- The most permissive type.
- Disables all type-checking for that variable.
- You can assign any value and call any property or method on it without compiler errors.

```ts
let anything: any = "Hello";
anything = 42;
anything = true;
anything.doSomething(); // No error, even if doSomething doesn't exist
```

### unknown
- Like any, it can accept any value.
- Unlike any, you must check the type before using the value.

```ts

let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ Safe
}
// value.toUpperCase(); ❌ Error: Object is of type 'unknown'
```

🔸 When to use: When you want flexibility but still keep type safety.



### never
- Represents values that never occur.
- Used in functions that never return (e.g., throw errors or infinite loops).

```ts

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```
