# Basic JavaScript Code Challenges

## Challenge 1: Reverse a String

- **Problem:** Write a function that takes a string and returns it reversed.

```javascript
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('hello')); // 'olleh'
console.log(reverseString('JavaScript')); // 'tpircSavaJ'
```

# Challenge 2: Find the Largest Number in an Array

- **Problem:** Write a function that takes an array of numbers and returns the largest number.

```javascript
function findLargestNumber(arr) {
  return Math.max(...arr);
}
console.log(findLargestNumber([1, 2, 3, 4, 5])); // 5
console.log(findLargestNumber([-1, -2, -3, -4, -5])); // -1
```

# Challenge 3: Check for Palindrome

- **Problem:** Write a function that checks if a given string is a palindrome (reads the same backward as forward).

```javascript
function isPalindrome(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}
console.log(isPalindrome('A man, a plan, a canal, Panama')); // true
console.log(isPalindrome('Hello')); // false
```

# Challenge 4: FizzBuzz

- **Problem:** Write a function that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number and for multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

```javascript
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();
```

# Challenge 5: Remove Duplicates from Array

- **Problem:** Write a function that removes duplicate values from an array.

```javascript
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b'])); // ['a', 'b', 'c']
```

# Challenge 6: Sum of Array Elements

- **Problem:** Write a function that takes an array of numbers and returns the sum of all the numbers.

```javascript
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, 0, 1])); // 0
```

# Challenge 7: Capitalize First Letter of Each Word

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

# Challenge 8: Find the Longest Word in a Sentence

- **Problem:** Write a function that takes a string and returns the longest word in the string.

```javascript
function findLongestWord(sentence) {
  const words = sentence.split(' ');
  return words.reduce((longest, current) => (current.length > longest.length ? current : longest), '');
}
console.log(findLongestWord('The quick brown fox jumps over the lazy dog')); // 'jumps'
console.log(findLongestWord('Hello world')); // 'Hello'
```

# Challenge 9: Count Vowels in a String

- **Problem:** Write a function that counts the number of vowels in a given string.

```javascript
function countVowels(str) {
  return (str.match(/[aeiouAEIOU]/g) || []).length;
}

console.log(countVowels('Hello World')); // 3
console.log(countVowels('JavaScript')); // 3
```

# Challenge 10: Flatten a Nested Array

- **Problem:** Write a function that flattens a nested array into a single-level array.

```javascript
function flattenArray(arr) {
  return arr.flat(Infinity);
}
console.log(flattenArray([1, [2, [3, [4]]]])); // [1, 2, 3, 4]
console.log(flattenArray([1, [2, 3], 4])); // [1, 2, 3, 4]
```
