# `forEach` vs `map` in JavaScript

## `forEach`

- **Purpose:** Executes a provided function once for each array element.
- **Returns:** `undefined`. It does not return a new array; instead, it performs side effects.
- **Use Case:** Typically used for performing operations where you don't need a transformed array, such as logging values, modifying existing data, or performing other side effects.
- **Mutability:** It can modify the original array if the function passed to `forEach` changes elements.

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];

// Logging each number
numbers.forEach((num) => {
  console.log(num);
});

// Output:
// 1
// 2
// 3
// 4
// 5
```

## `map`

- **Purpose**: Creates a new array with the results of calling a provided function on every element in the original array.
- **Returns**: A new array containing the results of the transformation function. The original array is not modified.
- **Use Case**: Ideal for transforming data where you need a new array with the same length as the original but with transformed elements.
- **Immutability**: It does not modify the original array.

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];

// Creating a new array with each number squared
const squares = numbers.map((num) => num * num);

console.log(squares); // [1, 4, 9, 16, 25]
```

### Key Differences

- **Return Value**:

  - `forEach` returns `undefined`. It is used for executing a function that performs side effects.
  - `map` returns a new array with the transformed elements. It is used for creating a new array based on the original.

- **Side Effects**:

  - `forEach` is typically used for side effects like logging or updating external variables.
  - `map` is used when you need to transform data and get a new array with the results.

- **Immutability**:
  - `forEach` can mutate the original array if the function alters its elements.
  - `map` does not mutate the original array; instead, it produces a new array.

### Comparison Table

| Feature        | `forEach`                     | `map`                              |
| -------------- | ----------------------------- | ---------------------------------- |
| **Returns**    | `undefined`                   | New array with transformed values  |
| **Use Case**   | Performing side effects       | Transforming data                  |
| **Mutability** | Can modify the original array | Does not modify the original array |

### Use Case: Performing Side Effects

**Definition**: Performing side effects refers to executing actions that affect the outside world or have observable impacts outside the scope of the function itself. These actions do not necessarily produce a new value or modify the data being processed; instead, they typically result in changes to external states or interactions with the environment.

**Examples of Side Effects**:

- **Logging**: Printing values to the console.
- **Updating a global variable**: Changing a variable that is defined outside the function.
- **Modifying an external data structure**: Changing the contents of an array or object outside the function scope.
- **Performing network requests**: Sending data to a server.

**`forEach` Example**:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Logging each number to the console (side effect)
numbers.forEach((num) => {
  console.log(num); // This logs to the console, a side effect
});
```

### Use Case: Transforming Data

**Definition**: Transforming data refers to creating a new array (or data structure) where each element is the result of applying a function to each element of the original array. This operation generates a new value based on the original input but does not modify the original data.

**Examples of Data Transformation**:

- **Mapping values**: Converting each element of an array to a new value based on a function.
- **Filtering values**: Selecting elements based on certain criteria and returning a new array with only the matching elements.
- **Formatting data**: Changing the format of each element (e.g., converting numbers to strings).

**`map` Example**:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Creating a new array with each number squared
const squares = numbers.map((num) => num * num);

console.log(squares); // [1, 4, 9, 16, 25]
```

In this example, `map` is used to create a new array where each element is the square of the corresponding element in the original array. This transforms the original data into a new array without modifying the original one.

### Summary

- **Performing Side Effects (with `forEach`)**: When you use `forEach`, you're typically executing a function that performs an action affecting external systems or states, like logging data or updating global variables. It does not produce a new array.

- **Transforming Data (with `map`)**: When you use `map`, you're creating a new array where each element is a result of applying a function to each element of the original array. This is useful for creating new arrays with transformed values while keeping the original array unchanged.
- Use `forEach` when you need to perform an action on each element of the array but do not need a new array.
- Use `map` when you need to transform each element of an array and produce a new array with the results of the transformation.
