# Function-Based Code Challenges

## Challenge 1: Factorial Calculation

- **Problem:** Write a function that calculates the factorial of a given number using recursion.

```javascript
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
```

## Fibonacci Sequence

- **Problem:** Write a function that returns the nth number in the Fibonacci sequence.

```javascript
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55
```

## Palindrome Checker

- **Problem:** Write a function that checks if a given string is a palindrome (reads the same backward as forward).

```javascript
function isPalindrome(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}

console.log(isPalindrome('A man, a plan, a canal, Panama')); // true
console.log(isPalindrome('Hello')); // false
```

## Prime Number Checker

- **Problem:** Write a function that checks if a given number is a prime number.

```javascript
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
```

## Array Sum

- **Problem:** Write a function that takes an array of numbers and returns their sum.

```javascript
function arraySum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(arraySum([1, 2, 3, 4])); // 10
console.log(arraySum([-1, 0, 1])); // 0
```

## Find the Longest Word

- **Problem:** Write a function that takes a string and returns the longest word in the string.

```javascript
function findLongestWord(sentence) {
  const words = sentence.split(' ');
  return words.reduce((longest, current) => (current.length > longest.length ? current : longest), '');
}

console.log(findLongestWord('The quick brown fox jumps over the lazy dog')); // 'jumps'
console.log(findLongestWord('Hello world')); // 'Hello'
```

## Merge Objects

- **Problem:** Write a function that merges two objects into one. If there are duplicate keys, the values from the second object should overwrite those from the first object.

```javascript
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 })); // { a: 1, b: 3, c: 4 }
console.log(mergeObjects({ x: 5 }, { y: 6 })); // { x: 5, y: 6 }
```

## Count Vowels

- **Problem:** Write a function that counts the number of vowels in a given string.

```javascript
function countVowels(str) {
  return (str.match(/[aeiouAEIOU]/g) || []).length;
}

console.log(countVowels('Hello World')); // 3
console.log(countVowels('JavaScript')); // 3
```

## Capitalize Words

- **Problem:** Write a function that capitalizes the first letter of each word in a given string.

```javascript
function capitalizeWords(str) {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

console.log(capitalizeWords('hello world')); // 'Hello World'
console.log(capitalizeWords('javaSCRIPT is awesoME')); // 'Javascript Is Awesome'
```

## Flatten Nested Arrays

- **Problem:** Write a function that flattens a nested array into a single-level array.

```javascript
function flattenArray(arr) {
  return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, [4]]]])); // [1, 2, 3, 4]
console.log(flattenArray([1, [2, 3], 4])); // [1, 2, 3, 4]
```
