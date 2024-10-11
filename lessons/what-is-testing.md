# What is Testing?

Testing is the process of verifying whether something works as expected.

## Manual testing

1. Run the app.
2. Click on the "Click to Start" button and check if a question appears.
3. Next, type an answer and click the "Submit Answer" button. Verify if you receive feedback about your response.

### What happens when you add more features?

Each time you introduce new features, you need to manually test everything again to ensure it all still works. This can become time-consuming and error-prone, right?

That's where Automated Testing comes in!

## Automated Testing

Automated tests are scripts that run your production code and automatically check if it behaves as expected. If something isn't working correctly, the test will throw an error, making it easier to catch bugs early.

For example, let's look at the file `utils/is-equal.js`. It contains a function that compares two values.

To test this function, you can write a simple test like this:

```js
const result = isEqual(1, 2);
const expected = true;

if (result !== expected) {
  throw new Error(`${result} is not equal ${expected}`);
}
```

This way, you can quickly see if the function works as intended without manually testing it each time.
