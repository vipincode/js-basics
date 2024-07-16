# Array Destructuring Problems

## Problem 1: Basic Destructuring

- **Problem:** Given an array `arr`, use destructuring to extract the first two elements into variables `a` and `b`.
- **Function Signature:** `function basicDestructuring(arr)`

```javascript
function basicDestructuring(arr) {
  // Your code here
  const [a, b] = arr;
  return [a, b];
}

console.log(basicDestructuring([1, 2, 3, 4])); // [1, 2]
```

## Problem 2: Skipping Elements

- **Problem:** Given an array `arr`, use destructuring to extract the first and third elements into variables `a` and `b`
- **Function Signature:** `function skipElements(arr)`

```javascript
function skipElements(arr) {
  // Your code here
  const [a, , b] = arr;
  return [a, b];
}

console.log(skipElements([1, 2, 3, 4])); // [1, 3]
```

## Problem 3: Using Rest Operator

- **Problem:** Given an array `arr`, use destructuring to extract the first element into variable` a` and the rest into variable `rest`.
- **Function Signature:** `function restDestructuring(arr)`

```javascript
function restDestructuring(arr) {
  // Your code here
  const [a, ...rest] = arr;
  return [a, rest];
}

console.log(restDestructuring([1, 2, 3, 4])); // [1, [2, 3, 4]]
```

## Problem 4: Nested Destructuring

- **Problem:** Given a nested array `arr`, use destructuring to extract `1`,`4`, and `5` into variables `a`, `b`, and `c` respectively.
- **Function Signature:** `function nestedDestructuring(arr)`

```javascript
function nestedDestructuring(arr) {
  // Your code here
  const [[a], , [b, c]] = arr;
  return [a, b, c];
}

console.log(nestedDestructuring([[1], [2, 3], [4, 5]])); // [1, 4, 5]
```

## Problem 5: Destructuring with Default Values

- **Problem:** Given an array `arr` of length `2`, use destructuring to extract the elements into variables `a`, `b`, and `c`, where `c` should default to `3` if not present.
- **Function Signature:** `function defaultValues(arr)`

```javascript
function defaultValues(arr) {
  // Your code here
  const [a, b, c = 3] = arr;
  return [a, b, c];
}

console.log(defaultValues([1, 2])); // [1, 2, 3]
console.log(defaultValues([1, 2, 4])); // [1, 2, 4]
```

## Problem 6: Swapping Variables

- **Problem:** Write a function that takes an array as an argument and uses destructuring to extract the first element as `x` and the second element as `y`.
- **Function Signature:** `function destructureParameters([x, y])`

```javascript
function destructureParameters([x, y]) {
  // Your code here
  return [x, y];
}

console.log(destructureParameters([10, 20])); // [10, 20]
```
