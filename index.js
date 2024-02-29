// index.js

// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Function to divide two numbers
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

// Function to increment a number
function increment(n) {
  return n + 1;
}

// Function to decrement a number
function decrement(n) {
  return n - 1;
}

// Function to parse a value as an integer
function makeInt(n) {
  return parseInt(n, 10);
}

// Function to parse a value as a floating point number
function preserveDecimal(n) {
  return parseFloat(n);
}
