# Array Loop-Based Code Questions

## Question 1: Sum of Array Elements

- **Problem:** Write a function that calculates the sum of all elements in an array using a loop.

```javascript
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
```

## Find Maximum Element

- **Problem:** Write a function to find the maximum element in an array using a loop.

```javascript
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([1, 2, 3, 4, 5])); // 5
```

## Count Occurrences of a Value

- **Problem:** Write a function that counts the number of occurrences of a given value in an array using a loop.

```javascript
function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences([1, 2, 3, 2, 4, 2, 5], 2)); // 3
```

## Reverse an Array

- **Problem:** Write a function that reverses an array using a loop.

```javascript
function reverseArray(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
```

## Filter Even Numbers

- **Problem:** Write a function that filters out even numbers from an array using a loop.

```javascript
function filterEvenNumbers(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // [2, 4]
```

## Check for Value

- **Problem:** Write a function that checks if a given value exists in an array using a loop.

```javascript
function containsValue(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(containsValue([1, 2, 3, 4, 5], 3)); // true
console.log(containsValue([1, 2, 3, 4, 5], 6)); // false
```

# Merge Two Arrays

- **Problem:** Write a function that merges two arrays into one using a loop.

```javascript
function mergeArrays(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }
  return result;
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
```

## Remove Duplicates

- **Problem:** Write a function that removes duplicate elements from an array using a loop.

```javascript
function removeDuplicates(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
```

## Find Index of Value

- **Problem:** Write a function that finds the index of a given value in an array using a loop.

```javascript
function findIndex(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex([1, 2, 3, 4, 5], 3)); // 2
console.log(findIndex([1, 2, 3, 4, 5], 6)); // -1
```

## Split Array into Chunks

- **Problem:** Write a function that splits an array into chunks of a given size using a loop.

```javascript
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]
```
