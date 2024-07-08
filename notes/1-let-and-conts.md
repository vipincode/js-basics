# Docs

[Ref](https://anjana.dev/javascript-first-steps/)

## let Declaration:

When you declare a variable with let without initializing it:

```js
let x;
console.log(x); // undefined
```

The let keyword allows you to declare a variable without immediately initializing it. By default, the value of an uninitialized variable is undefined.

## const Declaration:

When you declare a variable with const without initializing it:

```js
const x;
console.log(x); // Uncaught SyntaxError: Missing initializer in const declaration
```

The `const` keyword requires that the variable be initialized at the time of declaration. This means you must assign a value to the variable when you declare it. If you don't provide an initial value, you get a `SyntaxError` because `const` variables cannot be uninitialized.

### Example:

`let:`

```js
let y;
console.log(y); // undefined

y = 5;
console.log(y); // 5
```

`const:`

```js
const z; // Uncaught SyntaxError: Missing initializer in const declaration
```

### Proper const usage:

```js
const z = 10;
console.log(z); // 10
```

### In summary:

- `let` allows you to declare a variable without initializing it, and it will default to undefined until you assign a value.
- `const` requires an initializer when you declare it, and you cannot reassign a const variable after it's been initialized.
