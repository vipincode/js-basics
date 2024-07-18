# Hoisting

Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compile phase. This means that variables and functions can be used before they are actually declared in the code.

## Hoisting with `var`

When using var, the declaration is hoisted to the top of the function scope, but the initialization stays in place. This means the variable is initialized with undefined at the start.

Ex.

```js
console.log(a); // undefined
var a = 5;
console.log(a); // 5
```

Internally, this is how JavaScript interprets it:

```js
var a;
console.log(a); // undefined
a = 5;
console.log(a); // 5
```

## Hoisting with `let` and `const`

For `let` and `const`, the declarations are hoisted to the top of the block scope, but they are not initialized. Accessing them before their declaration results in a ReferenceError. This period between the start of the block and the actual declaration is known as the "temporal dead zone" (TDZ).

- Example with `let`:

```js
console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 5;
console.log(c); // 5
```

- Example with `const`:

```js
console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 5;
console.log(c); // 5
```

## Hoisting with Functions

Function declarations are fully hoisted, meaning both the function definition and its body are moved to the top of the scope.

```js
foo(); // "Hello, World!"
function foo() {
  console.log('Hello, World!');
}
```

Internally, this is how JavaScript interprets it:

```js
function foo() {
  console.log('Hello, World!');
}
foo(); // "Hello, World!"
```

However, function expressions (including those using const or let) are not hoisted in the same way. Only the variable declaration is hoisted, not the function definition.

- Example with `var` function expression:

```js
console.log(bar); // undefined
var bar = function () {
  console.log('Hello, World!');
};
bar(); // "Hello, World!"
```

Internally, this is how JavaScript interprets it:

```js
var bar;
console.log(bar); // undefined
bar = function () {
  console.log('Hello, World!');
};
bar(); // "Hello, World!"
```

- Example with `let` function expression:

```js
console.log(baz); // ReferenceError: Cannot access 'baz' before initialization
let baz = function () {
  console.log('Hello, World!');
};
baz(); // "Hello, World!"
```

## Summary of Hoisting Behavior

- `var:` Declaration is hoisted, initialization remains in place.

```js
console.log(a); // undefined
var a = 10;
```

- `let` and `const`: Declaration is hoisted, but not initialized.

```js
console.log(b); // ReferenceError
let b = 20;
```

- Function Declarations: Entire function is hoisted.

```js
foo(); // Works fine
function foo() {
  console.log('Hello!');
}
```

- Function Expressions: Only the variable declaration is hoisted.

```js
console.log(bar); // undefined for var, ReferenceError for let/const
var bar = function () {
  console.log('Hello!');
};
```

## Arrow function

Arrow functions in JavaScript have some unique characteristics, especially regarding hoisting and the this keyword. Here’s a breakdown of how arrow functions work with these concepts:

### Hoisting with Arrow Functions

Arrow functions are expressions rather than declarations. Therefore, they are not hoisted in the same way as function declarations. Only the variable declaration is hoisted, not the assignment of the arrow function itself.

- Example with `var`:

```js
console.log(foo); // undefined
var foo = () => {
  console.log('Hello, World!');
};
foo(); // "Hello, World!"
```

Internally, this is interpreted as:

```js
var foo;
console.log(foo); // undefined
foo = () => {
  console.log('Hello, World!');
};
foo(); // "Hello, World!"
```

- Example with `let` or `const`:

```js
console.log(bar); // ReferenceError: Cannot access 'bar' before initialization
let bar = () => {
  console.log('Hello, World!');
};
bar(); // "Hello, World!"
```

Internally, it’s interpreted as:

```js
let bar;
console.log(bar); // ReferenceError: Cannot access 'bar' before initialization
bar = () => {
  console.log('Hello, World!');
};
bar(); // "Hello, World!"
```

## this Keyword in Arrow Functions

Arrow functions do not have their own this context. Instead, they inherit this from the surrounding (lexical) context in which they are defined. This is different from regular functions, which have their own this context.

```js
function RegularFunction() {
  this.value = 1;

  setTimeout(function () {
    this.value++;
    console.log(this.value); // `this` refers to the global object or undefined in strict mode
  }, 1000);
}

new RegularFunction(); // `this.value` will be `NaN` or cause an error in strict mode
```

In the example above, `this` inside the `setTimeout` callback refers to the global object (`window` in browsers) or is `undefined` in strict mode, not the instance of `RegularFunction`.

- Using an arrow function resolves this:

```js
function ArrowFunction() {
  this.value = 1;

  setTimeout(() => {
    this.value++;
    console.log(this.value); // `this` refers to the instance of ArrowFunction
  }, 1000);
}

new ArrowFunction(); // `this.value` will be `2`
```

In this example, `this` inside the arrow function refers to the `ArrowFunction` instance because arrow functions do not have their own this; they capture it from the surrounding context.

## Summary

- `Hoisting`: Arrow functions are expressions and are not hoisted. Only the variable declaration is hoisted, not the assignment.
- `this` Binding: Arrow functions do not have their own this. They inherit this from the surrounding context where they are defined. Regular functions have their own this which can be dynamically bound depending on how they are called.

Understanding these aspects of arrow functions helps in using them effectively and avoiding common pitfalls related to function scope and context in JavaScript.
