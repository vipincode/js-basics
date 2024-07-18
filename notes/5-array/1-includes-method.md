# Includes

The `includes()` method of `Array` instances determines whether an array `includes` a certain value among its entries,
returning `true` or `false` as appropriate.
[Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

```jsx
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false
```

Ex: 2

```js
const synonyms = ['abc', 'pqr', 'xyz'];

const result = synonyms.includes('tyu');

console.log(result);

// Expected output: false
```

## Syntax

includes(searchElement)
includes(searchElement, fromIndex)

### searchElement

- The value to search for.

Ex: 3
This true bcs `abc` exist inside array

```js
const synonyms = ['abc', 'pqr', 'xyz'];

const result = synonyms.includes('abc');

console.log(result);

// Expected output: true
```

### fromIndex (optional)

Zero-based index at which to start searching, converted to an integer.

### Understanding fromIndex in JavaScript Array Methods

When you use array methods like indexOf, lastIndexOf, or slice, you can provide an optional fromIndex parameter. This parameter specifies the starting point for the search or operation within the array.

### Positive fromIndex

If fromIndex is positive, the search starts from that index and moves forward to the end of the array.

### Negative fromIndex

When fromIndex is negative, it counts backwards from the end of the array. Here's the detailed breakdown:

- Count backwards: fromIndex being negative means you start counting from the end of the array. For example, -1 means the last element, -2 means the second last, and so on.

- Conversion to positive index: If -array.length <= fromIndex < 0, then the effective starting index is calculated as fromIndex + array.length.

- Search direction: Despite the negative starting point, the search still proceeds from front to back (left to right).

```js
let array = [10, 20, 30, 40, 50];

// Using a positive fromIndex
console.log(array.indexOf(30, 1)); // Output: 2
// Starts searching from index 1, finds 30 at index 2

// Using a negative fromIndex
console.log(array.indexOf(30, -3)); // Output: 2
// -3 corresponds to index 2 (array.length + (-3) = 5 + (-3) = 2)
// Starts searching from index 2, finds 30 at index 2

// Using a negative fromIndex that points to the first element
console.log(array.indexOf(20, -5)); // Output: 1
// -5 corresponds to index 0 (array.length + (-5) = 5 + (-5) = 0)
// Starts searching from index 0, finds 20 at index 1

// Using a negative fromIndex beyond the array length
console.log(array.indexOf(10, -6)); // Output: 0
// -6 corresponds to index -1 (array.length + (-6) = 5 + (-6) = -1)
// Since -1 is less than 0, the search starts from the beginning of the array
// Finds 10 at index 0
```

## Return value

A boolean value which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified).

## Description

The `includes()` method compares `searchElement` to elements of the array using the `SameValueZero` algorithm. Values of zero are all considered to be equal, regardless of sign. `(That is, -0 is equal to 0)`, but `false` is not considered to be the same as 0. NaN can be correctly searched for.

When used on sparse arrays, the `includes()` method iterates empty slots as if they have the value undefined.

The `includes()` method is generic. It only expects the this value to have a length property and integer-keyed properties.

## Example

```js
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true  [1, 2, 3] index is in reverse order -3, -3,-1
[1, 2, NaN].includes(NaN); // true
['1', '2', '3'].includes(3); // false
```

## fromIndex is greater than or equal to the array length

If fromIndex is greater than or equal to the length of the array, false is returned. The array will not be searched.

```jsx
const arr = ['a', 'b', 'c'];

arr.includes('c', 3); // false
arr.includes('c', 100); // false
```

## Using includes() on sparse arrays

You can search for `undefined` in a sparse array and get true.

```js
console.log([1, , 3].includes(undefined)); // true
```

## Calling includes() on non-array objects

The `includes()` method reads the length property of this and then accesses each property whose key is a nonnegative integer less than length.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 1, // ignored by includes() since length is 3
};
console.log(Array.prototype.includes.call(arrayLike, 2));
// true
console.log(Array.prototype.includes.call(arrayLike, 1));
// false
```
