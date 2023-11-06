/*
Filename: SophisticatedCode.js
Content: A sophisticated and elaborate code example demonstrating various advanced functionalities in JavaScript.
*/

// Class representing a person
class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }

  // Method to greet
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  // Static method to generate a random age
  static generateRandomAge() {
    return Math.floor(Math.random() * 50) + 18;
  }
}

// Function to process person's occupation
function processOccupation(person) {
  switch (person.occupation) {
    case 'doctor':
      console.log(`${person.name} is a doctor.`);
      break;
    case 'engineer':
      console.log(`${person.name} is an engineer.`);
      break;
    case 'teacher':
      console.log(`${person.name} is a teacher.`);
      break;
    default:
      console.log(`${person.name} has an unknown occupation.`);
  }
}

// Creating persons
const john = new Person('John', 25, 'engineer');
const sarah = new Person('Sarah', 30, 'teacher');
const michael = new Person('Michael', 45, 'doctor');

// Greet persons
john.greet();
sarah.greet();
michael.greet();

// Process their occupations
processOccupation(john);
processOccupation(sarah);
processOccupation(michael);

// Function to calculate the factorial of a number
function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Generate random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`Random Number: ${randomNumber}`);

// Calculate factorial of the random number
const randomFactorial = factorial(randomNumber);
console.log(`Factorial of ${randomNumber}: ${randomFactorial}`);

// Generate an array of prime numbers up to a given limit
function generatePrimeNumbers(limit) {
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
}

const primeNumbers = generatePrimeNumbers(50);
console.log(`Prime Numbers up to 50: ${primeNumbers}`);

// Execute various asynchronous tasks using Promises
function wait(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log(`Waited for ${delay} milliseconds.`);
    }, delay);
  });
}

async function executeTasks() {
  try {
    await wait(1000);
    await wait(2000);
    await wait(3000);
    await wait(4000);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

executeTasks();