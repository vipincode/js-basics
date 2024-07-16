# JavaScript Promises Interview Questions

## Basic Level

1. **Basic Understanding:**

   - What is a promise in JavaScript?
   - How do you create a promise?

2. **States of a Promise:**

   - What are the different states of a promise?
   - How do you handle the resolved and rejected states of a promise?

3. **Promise Methods:**
   - What are the `then()`, `catch()`, and `finally()` methods used for?

## Intermediate Level

4. **Chaining Promises:**

   - How do you chain promises?
   - What is promise chaining and how does it work?

5. **Error Handling:**

   - How do you handle errors in promises?
   - What happens if you don't handle a promise rejection?

6. **Creating Promises:**
   - How do you create a promise that resolves after a certain amount of time (e.g., using `setTimeout`)?

## Advanced Level

7. **Combining Promises:**

   - What are `Promise.all()`, `Promise.race()`, `Promise.allSettled()`, and `Promise.any()` and how do you use them?

8. **Async/Await:**

   - What is `async/await` and how does it relate to promises?
   - How do you handle errors using `async/await`?

9. **Promise Performance:**
   - How do promises improve code readability and maintainability compared to callback functions?

## Coding Problems

10. **Basic Promise:**

    - Write a promise that resolves with "Hello, World!" after 1 second.

11. **Fetch Data:**

    - Write a function that fetches data from an API and logs the result using promises.

12. **Chained Promises:**

    - Create a series of promises that execute one after the other and log the results.

13. **Promise.all():**

    - Write a function that uses `Promise.all()` to wait for multiple promises to resolve and then logs all the results.

14. **Promise.race():**

    - Write a function that uses `Promise.race()` to log the result of the first promise that resolves.

15. **Sequential Execution:**

    - Write a function that executes a series of asynchronous operations sequentially using promises.

16. **Retry a Failed Promise:**

    - Write a function that retries a promise a specified number of times before rejecting.

17. **Timeout with Promises:**

    - Write a function that rejects a promise if it doesn't resolve within a specified timeout period.

18. **Convert Callbacks to Promises:**

    - Convert a function that uses callbacks to one that returns a promise.

19. **Async/Await Conversion:**

    - Convert a series of promise-based functions to use `async/await`.

20. **Promise Pooling:**
    - Implement a function that limits the number of concurrent promises being executed at any given time.
