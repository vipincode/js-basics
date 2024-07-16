# JavaScript Code Output Challenges

## Challenge 1: Variable Hoisting

```js
console.log(a); // ?
var a = 10;
console.log(a); // ?
```

## Challenge 2: Scope and Closures

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // ?
  }, 1000);
}
```

## Challenge 3: this Keyword

```js
const obj = {
  a: 10,
  b: function () {
    console.log(this.a); // ?
  },
};
const fn = obj.b;
fn(); // ?
obj.b(); // ?
```

## Challenge 4: Prototypes

```js
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  console.log(`Hello, ${this.name}`);
};
const person1 = new Person('Alice');
const person2 = new Person('Bob');

person1.sayHello(); // ?
person2.sayHello(); // ?
```

## Challenge 5: Promises

```js
console.log('Start');
const promise = new Promise((resolve, reject) => {
  console.log('Inside Promise');
  resolve('Resolved');
});
promise.then((res) => {
  console.log(res); // ?
});
console.log('End'); // ?
```

## Challenge 6: Async/Await

```js
async function asyncFunction() {
  console.log('Start');
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('Resolved');
    }, 1000);
  });
  console.log(result); // ?
  console.log('End'); // ?
}
asyncFunction();
```

## Challenge 7: Array Methods

```js
const arr = [1, 2, 3, 4, 5];
const result = arr.map((num) => num * 2).filter((num) => num > 5);
console.log(result); // ?
```

## Challenge 8: Destructuring

```js
const person = {
  name: 'John',
  age: 30,
  city: 'New York',
};
const { name, ...rest } = person;
console.log(name); // ?
console.log(rest); // ?
```

## Challenge 9: Spread Operator

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // ?
```

## Challenge 10: Template Literals

```js
const name = 'Alice';
const age = 25;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // ?
```

## Challenge 11: Rest Parameters

```js
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // ?
```

## Challenge 12: Object Property Shorthand

```js
const name = 'Alice';
const age = 25;
const person = { name, age };
console.log(person); // ?
```

## Challenge 13: Event Loop

```js
console.log('Start');
setTimeout(() => {
  console.log('Timeout'); // ?
}, 0);
Promise.resolve().then(() => {
  console.log('Promise'); // ?
});
console.log('End'); // ?
```

## Challenge 14: Conditional (Ternary) Operator

```js
const x = 10;
const y = x > 5 ? 'Greater' : 'Smaller';
console.log(y); // ?
```

## Challenge 15: Short-Circuit Evaluation

```js
const a = null;
const b = 'Hello';
const result = a || b;
console.log(result); // ?
```
