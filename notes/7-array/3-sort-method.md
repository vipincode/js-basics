# Sort()

Let's dive into the Array.prototype.sort() method in JavaScript, which is used to sort the elements of an array in place and returns the array. By default, the sort() method sorts the elements as strings in ascending order. This can lead to unexpected results when sorting numbers.

## Basic Usage

By default, `sort()` converts elements to strings and sorts them lexicographically.

```js
let fruits = ['banana', 'apple', 'cherry'];
fruits.sort();
console.log(fruits); // Output: ["apple", "banana", "cherry"]
```

## Sorting Numbers

When sorting numbers, the default behavior can be problematic:

```js
let numbers = [40, 100, 1, 5, 25, 10];
numbers.sort();
console.log(numbers); // Output: [1, 10, 100, 25, 40, 5]
```

As you can see, the numbers are sorted as strings, leading to an incorrect order.

## Custom Sort Function

To sort numbers correctly, you need to provide a compare function. The compare function takes two arguments and returns a negative number if the first argument is less than the second, zero if they're equal, and a positive number if the first is greater.

```js
let numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 5, 10, 25, 40, 100]
```

## Explanation of the Compare Function

The compare function `a - b` works as follows:

- If `a` is less than `b`, `a - b` will be negative, so `a` comes before `b`.
- If `a` is greater than `b`, `a - b` will be positive, so `a` comes after `b`.
- If `a` is equal to `b`, `a - b` will be 0, so their order doesn't change.

## Sorting in Descending Order

To sort in descending order, simply reverse the subtraction in the compare function:

```js
let numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [100, 40, 25, 10, 5, 1]
```

## Sorting Objects

When sorting objects, you often want to sort based on a property value. Let's say we have an array of objects representing people:

```js
let people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Jim', age: 35 },
];
```

### To sort by age in ascending order:

```js
people.sort((a, b) => a.age - b.age);
console.log(people);
// Output: [
//   { name: "Jane", age: 25 },
//   { name: "John", age: 30 },
//   { name: "Jim", age: 35 }
// ]
```

### To sort by name alphabetically:

```js
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
// Output: [
//   { name: "Jane", age: 25 },
//   { name: "Jim", age: 35 },
//   { name: "John", age: 30 }
// ]
```

## Full Example

```js
let numbers = [40, 100, 1, 5, 25, 10];
let fruits = ['banana', 'apple', 'cherry'];
let people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Jim', age: 35 },
];

// Sorting numbers in ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 5, 10, 25, 40, 100]

// Sorting numbers in descending order
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [100, 40, 25, 10, 5, 1]

// Sorting strings lexicographically
fruits.sort();
console.log(fruits); // Output: ["apple", "banana", "cherry"]

// Sorting people by age
people.sort((a, b) => a.age - b.age);
console.log(people);
// Output: [
//   { name: "Jane", age: 25 },
//   { name: "John", age: 30 },
//   { name: "Jim", age: 35 }
// ]

// Sorting people by name
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
// Output: [
//   { name: "Jane", age: 25 },
//   { name: "Jim", age: 35 },
//   { name: "John", age: 30 }
// ]
```

### Summary

This example covers various scenarios for sorting arrays in JavaScript, including sorting numbers, strings, and objects with custom compare functions.
