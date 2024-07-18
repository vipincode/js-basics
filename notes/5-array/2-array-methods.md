# Array Methods

Arrays have several methods that you can use to manipulate and
interact with the data stored in them. These methods are built-in
functions that are available to every JavaScript array. You can use
them to add, remove, rearrange or search for elements in an array.
Some of the most common array methods include:

- `push()`- adds one or more elements to the end of an array
- `pop()`- removes the last element from an array
- `shift()`- removes the first element from an array
- `unshift()`- adds one or more elements to the beginning of
  an array
- `indexOf()`- returns the index of the first occurrence of an
  element in an array
- `slice()`- returns a shallow copy of a portion of an array into
  a new array object
- `splice()`- changes the contents of an array by removing or
  replacing existing elements and/or adding new elements in
  place
- `join()`- joins all elements of an array into a string

## push()

The `push()` method adds one or more elements to the end of an
array and returns the new length of the array. Let’s add two new
fruits to the end of the favoriteFruits array:

```js
const favoriteFruits = ['apple', 'banana', 'orange'];
favoriteFruits.push('mango', 'pineapple');

// output: 5 - this is length of array
```

## pop()

The `pop() `method removes the last element from an array and
returns that element. Let’s remove the last element from the
favoriteFruits array:

```js
const favoriteFruits = ['apple', 'banana', 'orange', 'mango', 'pineapple'];
favoriteFruits.pop();
// output: 'pineapple'
```

- pop() mutate array but its temporary when you log the `favoriteFruits` you `'pineapple'` is not there.

```js
const favoriteFruits = ['apple', 'banana', 'orange', 'mango', 'pineapple'];
favoriteFruits.pop();
console.log(favoriteFruits);
// output: ['apple', 'banana', 'orange', 'mango',]
```

## shift()

This method removes the first element from an array and returns the removed element

```js
const favoriteFruits = ['apple', 'banana', 'orange', 'mango', 'pineapple'];
favoriteFruits.shift();
// 'apple'
```

```js
const favoriteFruits = ['apple', 'banana', 'orange'];
favoriteFruits.push('mango', 'pineapple');

favoriteFruits.shift();

console.log(favoriteFruits.shift());
// 'banana'
```

## unshift()

The `unshift()` method adds one or more elements to the front of an array and returns its new length:

```js
const favoriteFruits = ['apple', 'banana', 'orange'];
favoriteFruits.unshift('lemon', 'grape');

console.log(favoriteFruits);
// 'banana'
```

## indexOf()

You can use the `indexOf()` method to find the index of the `first
occurrence of an element in an array`. Let’s find the index of
‘banana’ in the favoriteFruits array

```js
const favoriteFruits = ['apple', 'banana', 'orange', 'mango', 'pineapple'];

console.log(favoriteFruits.indexOf('banana'));

// output: 1, bcs banana appear at index 1
```

## slice()

The slice() method is used to extract a portion of an array. The method takes two arguments:
the starting index (inclusive) and the ending index (exclusive) of the slice.
The element at the starting index will be included in the slice, but the element at the ending index
will not. The slice() method does not modify the original array.
Instead, it returns a new array containing the extracted elements.

**Ex**: Let’s extract the first three elements from the favoriteFruits array
and put them in a new array called topThreeFruits

```js
const favoriteFruits = ['apple', 'banana', 'orange', 'mango', 'pineapple'];
const topThreeFruits = favoriteFruits.slice(0, 3);
console.log(topThreeFruits);
// output: ['apple', 'banana', 'orange']
```

- If you don’t specify the ending index, the slice will go all the way
  to the end of the array:

```js
const favoriteFruits = ['apple', 'banana', 'orange', 'mango', 'pineapple'];

console.log(favoriteFruits.slice(2));
//output: ['orange', 'mango', 'pineapple']
//starting index 2 that is 'orange' and go at the end
```

- Remember that the value of favoriteFruits is still `['apple', 'banana', 'orange', 'mango', 'pineapple']`.
- The slice() method can also take a negative index. If you pass a negative index, the slice will start from the end of the array. So to get the last element of the favoriteFruits array, we can write:

```js
const favoriteFruits = ['apple', 'banana', 'orange', 'mango', 'pineapple'];

console.log(favoriteFruits.slice(-3));
//output: ['orange', 'mango', 'pineapple']
//starting index -1  and end -3 like [-4,, -3, -2, -1]
```

- If we want to get the last two elements of the array, we can write:

```js
const lastTwoFruits = favoriteFruits.slice(-2);
console.log(lastTwoFruits);
// output: ['mango', 'pineapple']

// this code will not wok bcs it not modifying array.
//const favoriteFruits = ['apple', 'banana', 'orange', 'mango', 'pineapple'];
//favoriteFruits.slice(0, 3);
//console.log(favoriteFruits);

// This code will work, bcs we save the changed value
//const favoriteFruits = ['apple', 'banana', 'orange', 'mango', 'pineapple'];
//const firstThree = favoriteFruits.slice(0, 3);
//console.log(firstThree);
```

## splice()

- The `splice()` method changes the contents of an array by removing or replacing existing elements.
- `It can take more than two arguments`, the first is the starting index, the second is the number of
  elements to remove, and the rest are the elements to add to the array.
- Unlike the slice() method, The splice() method modifies the original array.

**Ex:** Let’s replace the first and second elements of the `favoriteFruits` array with ‘cherry’ and ‘avocado’:

```js
// Here its first modify the array, then log it.
const favoriteFruits = ['apple', 'banana', 'orange', 'mango', 'pineapple'];
favoriteFruits.splice(0, 2, 'cherry', 'avocado');
console.log(favoriteFruits);

// This code will not work. bcs splice() method modify array
// In this case we not get correct array
//console.log(favoriteFruits.splice(0, 2, 'cherry', 'avocado'));
```

- If you want to remove elements from the array without adding any new elements, you can omit the third argument

```js
const favoriteFruits = ['apple', 'banana', 'orange', 'mango', 'pineapple'];
favoriteFruits.splice(0, 2); // remove 0, 1, 2 element at this index.
console.log(favoriteFruits);

// output: ['orange', 'mango', 'pineapple']
```

## join()

The join() method joins all elements of an array into a string. It takes an optional argument, which is the separator to use between the elements. If you don’t specify a separator, the elements will be joined with a comma. The join() method does not modify the original array, so if you want to join the elements our favoriteFruits array and store the result in a new variable, you can write:

```js
const favoriteFruits = ['apple', 'banana', 'orange', 'mango', 'pineapple'];
console.log(favoriteFruits.join());

//output: 'apple,banana,orange,mango,pineapple'
```

- You can pass a different separator as an argument:

```js
const favoriteFruits = ['apple', 'banana', 'orange', 'mango', 'pineapple'];
console.log(favoriteFruits.join(' and '));

//output: 'apple and banana and orange and mango and pineapple'
```

## reverse()

The reverse() method reverses the order of the elements in an array.

**Ex:** Let’s reverse the order of the elements in the favorite Fruits array:

```js
const favoriteFruits = ['apple', 'banana', 'orange', 'mango', 'pineapple'];
console.log(favoriteFruits.reverse());

//output: ['pineapple', 'mango', 'orange', 'banana', 'apple']
```
