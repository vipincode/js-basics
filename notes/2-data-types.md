# Docs

JavaScript has several built-in data types. These can be broadly categorized into primitive and non-primitive (or reference) types.

## Primitive Data Types

`Number`

- Represents both integer and floating-point numbers.
- Example: 42, 3.14
- Special values: Infinity, -Infinity, and NaN (Not-a-Number).

`String`

- Represents sequences of characters.
- Can be defined using single quotes, double quotes, or backticks.
- Example: 'hello', "world", `template literal`

`Boolean`

- Represents logical entities.
- Only two possible values: true and false.
- Example: true, false

`Null`

- Represents the intentional absence of any object value.
- Example: let x = null;

`Undefined`

- Indicates that a variable has not been assigned a value.
- Example: let x; console.log(x); // undefined

`Symbol (introduced in ES6)`

- Represents a unique identifier.
- Created using the Symbol() function.
- Example: let sym = Symbol('description');

`BigInt (introduced in ES11)`

- Represents integers with arbitrary precision.
- Created by appending n to the end of an integer literal or using the BigInt function.
- Example: let bigInt = 1234567890123456789012345678901234567890n;

## Non-Primitive Data Types (Reference Types)

`Object`

- Collection of key-value pairs.
- Keys are strings (or Symbols), and values can be of any type.

```js
let person = {
  name: 'John',
  age: 30,
  isEmployed: true,
};
```

`Array`

Special type of object used for storing ordered collections of values.

```js
let numbers = [1, 2, 3, 4, 5];
```

`Function`

- Special type of object that is callable.

```js
function greet(name) {
  return `Hello, ${name}!`;
}
```

`Date`

- Represents dates and times.

```js
let now = new Date();
```

`RegExp`

- Represents regular expressions.
- Used for pattern matching within strings.

```js
let pattern = /ab+c/;
```

`Map`

- Collection of keyed data items, similar to objects but with better performance for frequent additions and removals of key-value pairs.

```js
let map = new Map();
map.set('key1', 'value1');
```

`Set`

- Collection of unique values.

```js
let set = new Set([1, 2, 3, 4, 4]);
```

## Type Conversion

JavaScript is dynamically typed, meaning variables can hold values of any type without any type enforcement. It also performs implicit type conversion (coercion) between different types.

Ex.

- String to Number:

```js
let str = '123';
let num = Number(str); // 123
```

- Number to String:

```js
let num = 123;
let str = String(num); // "123"
```

- Boolean to Number:

```js
let bool = true;
let num = Number(bool); // 1
```

- Number to Boolean:

```js
let num = 0;
let bool = Boolean(num); // false
```
