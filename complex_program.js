/* 
   Filename: complex_program.js
   Description: A complex JavaScript program showcasing various advanced concepts and techniques.
*/

// Class representing a square
class Square {
  constructor(side) {
    this.side = side;
  }

  get area() {
    return this.side * this.side;
  }

  get perimeter() {
    return 4 * this.side;
  }
}

// Function to calculate the factorial of a number recursively
function factorialRecursive(n) {
  if (n === 0 || n === 1)
    return 1;

  return n * factorialRecursive(n - 1);
}

// Array of colors
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// Function to filter even numbers from an array
function filterEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

// Object representing a car
const car = {
  brand: 'Tesla',
  model: 'Model S',
  year: 2022,
  startEngine() {
    console.log('Engine started');
  },
  stopEngine() {
    console.log('Engine stopped');
  }
};

// Function to generate Fibonacci sequence up to a given number of terms
function generateFibonacciSequence(numTerms) {
  const sequence = [0, 1];

  for (let i = 2; i < numTerms; i++) {
    const nextTerm = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextTerm);
  }

  return sequence;
}

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Generate prime numbers up to a given limit using the Sieve of Eratosthenes algorithm
function generatePrimes(limit) {
  const primes = [];
  const sieve = new Array(limit + 1).fill(true);

  for (let p = 2; p * p <= limit; p++) {
    if (sieve[p]) {
      for (let i = p * p; i <= limit; i += p) {
        sieve[i] = false;
      }
    }
  }

  for (let i = 2; i <= limit; i++) {
    if (sieve[i]) {
      primes.push(i);
    }
  }

  return primes;
}

// Recursive function to calculate the Fibonacci number at a given index
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Use the features and functions defined above to execute a complex program
console.log(new Square(5).area);
console.log(new Square(5).perimeter);
console.log(factorialRecursive(6));
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
car.startEngine();
console.log(generateFibonacciSequence(10));
const person = new Person('John', 25);
person.introduce();
console.log(reverseString('Hello, World!'));
console.log(generatePrimes(100));
console.log(fibonacci(10));
// ... more code and function calls

// More complex and elaborate code goes here...
// ...