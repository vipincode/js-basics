# Operator-Based Code Questions

## Question 1: Arithmetic Operators

- **Problem:** Write a function that takes two numbers and returns an object containing their sum, difference, product, and quotient.

```javascript
function arithmeticOperations(a, b) {
  return {
    sum: a + b,
    difference: a - b,
    product: a * b,
    quotient: a / b,
  };
}

console.log(arithmeticOperations(10, 5)); // { sum: 15, difference: 5, product: 50, quotient: 2 }
```

# Comparison Operators

## Problem

Write a function that takes two numbers and returns a string indicating if the first number is less than, equal to, or greater than the second number.

## Function Signature

```javascript
function compareNumbers(a, b) {
  if (a < b) {
    return 'a is less than b';
  } else if (a > b) {
    return 'a is greater than b';
  } else {
    return 'a is equal to b';
  }
}

console.log(compareNumbers(10, 5)); // 'a is greater than b'
console.log(compareNumbers(5, 10)); // 'a is less than b'
console.log(compareNumbers(5, 5)); // 'a is equal to b'
```

# Logical Operators

## Problem

Write a function that takes three boolean values and returns `true` if at least two of them are true.

## Function Signature

```javascript
function atLeastTwoTrue(a, b, c) {
  return (a && b) || (a && c) || (b && c);
}

console.log(atLeastTwoTrue(true, true, false)); // true
console.log(atLeastTwoTrue(true, false, false)); // false
console.log(atLeastTwoTrue(true, true, true)); // true
```

# Bitwise Operators

## Problem

Write a function that takes two numbers and returns an object containing their bitwise AND, OR, and XOR.

## Function Signature

```javascript
function bitwiseOperations(a, b) {
  return {
    and: a & b,
    or: a | b,
    xor: a ^ b,
  };
}

console.log(bitwiseOperations(5, 3)); // { and: 1, or: 7, xor: 6 }
```

# Ternary Operator

## Problem

Write a function that takes a number and returns "Even" if the number is even and "Odd" if the number is odd using the ternary operator.

## Function Signature

```javascript
function evenOrOdd(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}

console.log(evenOrOdd(4)); // 'Even'
console.log(evenOrOdd(7)); // 'Odd'
```

# Nullish Coalescing Operator

## Problem

Write a function that takes two values and returns the first value if it is not null or undefined, otherwise returns the second value.

## Function Signature

```javascript
function nullishCoalescing(a, b) {
  return a ?? b;
}

console.log(nullishCoalescing(null, 5)); // 5
console.log(nullishCoalescing(7, 5)); // 7
console.log(nullishCoalescing(undefined, 'default')); // 'default'
```

# Spread Operator

## Problem

Write a function that takes two arrays and returns a new array containing all elements from both arrays using the spread operator.

## Function Signature

```javascript
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
```

# Destructuring with Default Values

## Problem

Write a function that takes an object with properties `a` and `b` and returns their values, but defaults to 1 if the property is not present.

## Function Signature

```javascript
function destructureWithDefaults({ a = 1, b = 1 }) {
  return { a, b };
}

console.log(destructureWithDefaults({ a: 2 })); // { a: 2, b: 1 }
console.log(destructureWithDefaults({})); // { a: 1, b: 1 }
```

# Optional Chaining

## Problem

Write a function that takes an object and a property name and returns the property's value using optional chaining, or `undefined` if the property doesn't exist.

## Function Signature

```javascript
function optionalChaining(obj, prop) {
  return obj?.[prop];
}

console.log(optionalChaining({ a: 1, b: 2 }, 'a')); // 1
console.log(optionalChaining({ a: 1, b: 2 }, 'c')); // undefined
```

# Exponentiation Operator

## Problem

Write a function that takes a base and an exponent and returns the base raised to the power of the exponent.

## Function Signature

```javascript
function exponentiate(base, exponent) {
  return base ** exponent;
}

console.log(exponentiate(2, 3)); // 8
console.log(exponentiate(5, 2)); // 25
```
