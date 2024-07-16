# Arrow Function and `this` Keyword Challenges

## Challenge 1: Arrow Function with `this`

- **Problem:** Write a function using an arrow function to create an object with a method that returns a string containing the object's name and its description. Demonstrate that `this` inside the arrow function does not refer to the object.

```javascript
const createObject = (name, description) => {
  return {
    name,
    description,
    getInfo: () => {
      return `Name: ${this.name}, Description: ${this.description}`;
    },
  };
};

const obj = createObject('Widget', 'A useful widget');
console.log(obj.getInfo()); // Name: undefined, Description: undefined
```

## Arrow Function and Method Chaining

- **Problem:** Write a class with a method that returns the sum of an array of numbers. Use an arrow function within the class to maintain the correct context of `this`. Show how this can be correctly used in a non-arrow function method.

```javascript
class Calculator {
  constructor() {
    this.total = 0;
  }

  add(...numbers) {
    numbers.forEach((number) => {
      this.total += number;
    });
    return this; // Method chaining
  }

  getTotal() {
    return this.total;
  }
}

const calc = new Calculator();
console.log(calc.add(1, 2, 3, 4).getTotal()); // 10
```

## Arrow Function with `this` in Event Handlers

- **Problem:** Write a function that creates a button element with an event listener using an arrow function. Demonstrate that the `this` keyword inside the arrow function refers to the `window` object instead of the button element.

```javascript
function createButton() {
  const button = document.createElement('button');
  button.textContent = 'Click Me';

  button.addEventListener('click', () => {
    console.log(this); // `this` refers to the `window` object
  });

  document.body.appendChild(button);
}

createButton();
```

## Arrow Function for Array Manipulation

- **Problem:** Write a function that takes an array of objects and uses an arrow function to sort them by a specified property. Demonstrate that `this` inside the arrow function does not affect the sorting.

```javascript
function sortByProperty(arr, prop) {
  return arr.sort((a, b) => a[prop] - b[prop]);
}

const data = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 },
];

console.log(sortByProperty(data, 'age'));
// [{ name: 'Charlie', age: 20 }, { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]
```

## `this` in Arrow Function vs. Regular Function

- **Problem:** Write a function that demonstrates the difference in `this` between an arrow function and a regular function inside a class.

```javascript
class Demo {
  constructor(value) {
    this.value = value;
  }

  showArrowFunction() {
    setTimeout(() => {
      console.log(`Arrow function this.value: ${this.value}`); // `this` refers to the class instance
    }, 1000);
  }

  showRegularFunction() {
    setTimeout(function () {
      console.log(`Regular function this.value: ${this.value}`); // `this` refers to the global object or undefined in strict mode
    }, 1000);
  }
}

const demo = new Demo('Hello');
demo.showArrowFunction(); // Arrow function this.value: Hello
demo.showRegularFunction(); // Regular function this.value: undefined (or an error in strict mode)
```
