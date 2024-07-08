# Docs

Let's explore the differences between var, let, and const in JavaScript:

## Scope

`var:`

- Function-scoped: Variables declared with var are scoped to the function in which they are declared.
- Not block-scoped: They are not confined to blocks (like if or for).

`let:`

- Block-scoped: Variables declared with let are limited to the block, statement, or expression in which they are used.

`const:`

- Block-scoped: Like let, const is also block-scoped.
- Must be initialized at the time of declaration and cannot be reassigned.

## Hoisting

`var:`

- Hoisted to the top of their function scope and initialized with undefined.
- This means you can use the variable before its declaration, but it will be undefined.

`let:`

- Hoisted to the top of their block scope but not initialized.
- Accessing the variable before its declaration will result in a ReferenceError.

`const:`

- Hoisted to the top of their block scope but not initialized.
- Accessing the variable before its declaration will result in a ReferenceError.

## Re-declaration and Re-assignment

`var:`

- Can be re-declared and re-assigned within its scope.

```js
var x = 10;
var x = 20; // No error
x = 30; // Re-assignment
```

`let:`

- Cannot be re-declared within the same scope but can be re-assigned.

```js
let y = 10;
// let y = 20; // SyntaxError: Identifier 'y' has already been declared
y = 20; // Re-assignment
```

`const:`

- Cannot be re-declared or re-assigned.
- The value it holds is constant.

```js
const z = 10;
// const z = 20; // SyntaxError: Identifier 'z' has already been declared
// z = 20; // TypeError: Assignment to constant variable.
```

## Examples

1: `var`

```js
function varExample() {
  if (true) {
    var x = 5;
  }
  console.log(x); // 5, because `var` is function-scoped
}

varExample();
```

2: `let`

```js
function letExample() {
  if (true) {
    let y = 5;
    console.log(y); // 5
  }
  // console.log(y); // ReferenceError: y is not defined, because `let` is block-scoped
}

letExample();
```

2: `const`

```js
function constExample() {
  if (true) {
    const z = 5;
    console.log(z); // 5
  }
  // console.log(z); // ReferenceError: z is not defined, because `const` is block-scoped
}

constExample();
```

### Summary

- Scope: var is function-scoped, let and const are block-scoped.
- Hoisting: All are hoisted, but let and const are not initialized, leading to a ReferenceError if - accessed before declaration.
- Re-declaration: var can be re-declared within the same scope, while let and const cannot.
- Re-assignment: var and let can be re-assigned, const cannot be re-assigned.
