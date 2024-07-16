# Rest and Spread Operator Questions

## Question 1: Rest Operator in Function Parameters

- **Problem:** Write a function that takes a variable number of arguments and returns their sum using the rest operator.

```javascript
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3, 4)); // 10
console.log(sumAll(5, 10)); // 15
```

## Rest Operator for Destructuring

- **Problem:** Given an array of numbers, use the rest operator to extract the first element and the remaining elements into separate variables.

```javascript
function extractElements([first, ...rest]) {
  return { first, rest };
}

console.log(extractElements([1, 2, 3, 4, 5])); // { first: 1, rest: [2, 3, 4, 5] }
```

## Spread Operator for Function Arguments

- **Problem:** Write a function that takes an array of numbers and returns the maximum number using the spread operator with `Math.max`.

```javascript
function findMax(numbers) {
  return Math.max(...numbers);
}

console.log(findMax([1, 2, 3, 4, 5])); // 5
console.log(findMax([-1, -2, -3, -4, -5])); // -1
```

## Spread Operator for Array Copy

- **Problem:** Write a function that takes an array and returns a new array that is a copy of the original array with an additional element added to the end using the spread operator.

```javascript
function addElementToArray(arr, element) {
  return [...arr, element];
}

console.log(addElementToArray([1, 2, 3], 4)); // [1, 2, 3, 4]
console.log(addElementToArray(['a', 'b'], 'c')); // ['a', 'b', 'c']
```

## Spread Operator for Object Copy

- **Problem:** Write a function that takes an object and returns a new object that is a copy of the original object with an additional property added using the spread operator.

```javascript
function addPropertyToObject(obj, key, value) {
  return { ...obj, [key]: value };
}

console.log(addPropertyToObject({ a: 1, b: 2 }, 'c', 3)); // { a: 1, b: 2, c: 3 }
console.log(addPropertyToObject({}, 'name', 'Alice')); // { name: 'Alice' }
```

## Rest and Spread in Function Parameters

- **Problem:** Write a function that takes an initial value and a variable number of increment values. Use the rest operator to handle the increment values and the spread operator to apply them sequentially.

```javascript
function applyIncrements(initialValue, ...increments) {
  return increments.reduce((value, increment) => value + increment, initialValue);
}

console.log(applyIncrements(10, 1, 2, 3)); // 16
console.log(applyIncrements(5, 4, 4, -1)); // 12
```

## Spread Operator in Array Merging

- **Problem:** Write a function that merges two arrays into one using the spread operator and returns the new array.

```javascript
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(['a', 'b'], ['c', 'd'])); // ['a', 'b', 'c', 'd']
```

## Rest Operator in Parameter Destructuring

- **Problem:** Given a function that takes a destructured object with default values, use the rest operator to handle the remaining properties.

```javascript
function handleObject({ a = 1, b = 2, ...rest }) {
  return { a, b, rest };
}

console.log(handleObject({ a: 10, c: 3, d: 4 })); // { a: 10, b: 2, rest: { c: 3, d: 4 } }
console.log(handleObject({})); // { a: 1, b: 2, rest: {} }
```
