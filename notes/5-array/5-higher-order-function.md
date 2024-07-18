# Higher Order Functions (HOFs) and Callbacks

- We’ve seen how to create functions that take strings and numbers as arguments. Sometimes, we’ll need to create functions that take other functions as arguments or use them as their return values. These are called higher-order functions.
- They are commonly used in JavaScript to manipulate arrays and simplify complex tasks.
- When a function is passed as an argument to another function, it is called a callback function (to be called back at a later time).
- A callback function can be passed to another function as an argument, returned by another function, and assigned as a value to a variable. When working with JavaScript, you’ll often use higher order functions and callback functions to solve different kinds of tasks
- There are several built-in `higher-order` functions that we can use to manipulate arrays. For example, every array has a `map()` function we can use to modify each element in it.
- The map() function is a higher-order function that takes a callback function as an argument.
- The callback function is applied to each element in the array, then the map() function returns a new array with the results of the callback function applied to each element in the original array.

**Ex**: Here’s an example of using map() to square each element in an array

```js
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map((number) => number * number);
console.log(squareNumbers);

// Output: [1, 4, 9, 16, 25]
```

- In this example, the anonymous function `(number => number * number)` is passed as an argument to the `map()` function.
- In the callback function, the `number` parameter represents each element in the `numbers` array. This can be any name we want, but it’s common to use the singular form of the array name.
- The `map()` function applies the `callback` function to each element in the array and returns a new array named `sauaredNumbers` with the square of each element in the original array.

**Ex:** Let’s try another example using the map() function to capitalize each element in an array of strings:

```js
const words = ['this', 'is', 'such', 'a', 'great', 'day'];
const capitalizesWords = words.map((word) => word.toUpperCase());
console.log(capitalizesWords);

// output: ['THIS', 'IS', 'SUCH', 'A', 'GREAT', 'DAY']
```

In this example, we use the `map()` function to capitalize each element in the words array. The map() function does not modify the original array, so we have to assign its return value to a new array named capitalizedWords

## Creating Higher-order functions

We can create our higher-order functions ourselves. All we need to do is add a function parameter or return another function when it is called. Here’s an example of a higher-order function that takes a callback function as an argument:

```js
// function higherOrderFunction(callback) {
//   const string = 'HOFs are really cool';
//   callback(string);
// }
const higherOrderFunction = (callback) => {
  const string = 'HOFs are really cool';
  callback(string);
  //console.log(string); logs look like this
};

higherOrderFunction(console.log);

// Output: 'HOFs are really cool!'
```

See that our `higherOrderFunction()` takes a `callback` function as an argument, then calls that function with the string `‘HOFs are really cool!’.` In this case, supplying `console.log()` as an argument to the `higherOrderFunction()` logs the string to the console.

- We can also return a function from another function. Here’s an example of a higher-order function that returns a callback function:

```js
const callMeTwice = () => console.log;
callMeTwice()('Hey, this works!');

// Output: 'Hey, this works!'
```

In this example, the `callMeTwice()` function returns the
`console.log()` function. So, when we call `callMeTwice()`,
what we get is the console.log() function. So, we’ll have to call
the result of `callMeTwice()` to use the `console.log()` function.
Chaining function calls like this is known as currying. In currying,
each function call returns another function that can be called again
with a different argument. The main goal is to simplify the process
of passing arguments to a function by breaking it down into a
series of function calls, each taking a single argument
