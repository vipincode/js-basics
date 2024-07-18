# Built-in HOFs and Array Methods

Let’s explore other built-in higher-order functions you can use to manipulate arrays

## forEach()

The `forEach()` function is an array method that executes a callback function on each of its elements. Unlike the map() function, the `forEach()` function does not return a new array and does not modify the original array either. Instead, it iterates through the elements of an array and performs an operation on each of them.To iterate means to repeat a specific action or set of actions a number of times or until a condition is met

- We can use the `forEach()` function to log each element in an array to the console or perform an action with each of them and push the results to a new array. Let’s use the `forEach()` function to log each element in an array to the console:

```js
const namesOfPeople = ['oluchi', 'jude', 'kanye', 'tiwa'];

namesOfPeople.forEach((name) => console.log(name));
//Output:
// oluchi
// main.js:3 jude
// main.js:3 kanye
// main.js:3 tiwa
```

- Notice that the names of people in our array start with lowercase letters. Here’show we can title-case each element in the array and push the results to a new array. Title-casing means capitalizing the first letter of each word in a string:

```js
const namesOfPeople = ['oluchi', 'jude', 'kanye', 'tiwa'];
const titleCasedName = [];

namesOfPeople.forEach((name) => {
  const newTitleCasedName = name[0].toUpperCase() + name.slice(1);
  titleCasedName.push(newTitleCasedName);
});

console.log(titleCasedName);
//  ['Oluchi', 'Jude', 'Kanye', 'Tiwa']
```

In this example,we use the forEach() function to iterate through
the namesOfPeople array. For each string in the array,we capitalize its first letter using the square bracket notation and the toUpperCase() method.When working with strings,we can access
each character in the string using the square bracket notation and
the index of the character.The slice() method returns a new string
with the characters from the index we specify to the end of the
string.We then push the title-cased name to the title CasedNames
array.

## filter()

The filter() function is another array method we can use to filter out elements that meet a condition. For example, if we have an array of countries,we can use the filter()function to filter out countries that start with the letter‘N’

```js
const countries = ['Nigeria', 'UK', 'Netherlands', 'Canada', 'USA', 'Norway'];
const countriesThatStartWithN = countries.filter((country) => country.startsWith('N'));
console.log(countriesThatStartWithN);
```

## startsWith()

In JavaScript,every string hasa startsWith() method that returns
true if the string `startswith` the character we specify.In our example, the filter method takes a callback function with a parameter named country representing each element in the countries array. The callback function returns true if the country `startswith` the letter‘N’,and the filter() function returns a new array with the elements that meet the condition.

We can also use the square bracket notation or the charAt() method to check if a string startswith a character.The charAt() method returns the character at the specified index in a string.

```js
const countries = ['Nigeria', 'UK', 'Netherlands', 'Canada', 'USA', 'Norway'];
const countriesThatStartWithN = countries.filter((country) => country.charAt(0) === 'U');
console.log(countriesThatStartWithN);

//output ['UK', 'USA']
```

We can use the filter() function to filter out elements that don’t
meet a condition. Let’s filter out countries that don’t start with the
letter ‘N’:

```js
const countries = ['Nigeria', 'UK', 'Netherlands', 'Canada', 'USA', 'Norway'];
const countriesThatStartWithN = countries.filter((country) => !country.startsWith('N'));
console.log(countriesThatStartWithN);

//output
['UK', 'Canada', 'USA'];
```

In this example, we use the logical NOT operator (!) to negate
the condition so that the filter() function returns a new array
with elements that don’t meet the condition. When using the filter
method, it is important to remember that the callback function
should return a boolean value.

## sort()
