/*
Filename: complex_code.js
Description: This is a complex and elaborate JavaScript code that demonstrates various advanced concepts and techniques.
*/

// Helper function to generate a random integer within a specified range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Class representing a Person
class Person {
  constructor(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}, I am ${this.age} years old, and I work as a ${this.profession}.`);
  }

  celebrateBirthday() {
    this.age++;
    console.log(`Happy Birthday! I am now ${this.age} years old.`);
  }
}

// Extend Person class to create a subclass called Developer
class Developer extends Person {
  constructor(name, age, profession, programmingLanguages) {
    super(name, age, profession);
    this.programmingLanguages = programmingLanguages;
  }

  introduce() {
    console.log(`Hello, I am ${this.name}, a ${this.age}-year-old ${this.profession} specializing in ${this.programmingLanguages.join(", ")}.`);
  }

  code() {
    console.log(`${this.name} is coding...`);
    // Complex algorithm simulation
    for (let i = 0; i < 10000; i++) {
      const result = Math.pow(i, getRandomInt(2, 10));
      console.log(`Iteration ${i}: Result - ${result}`);
    }
    console.log(`${this.name} finished coding!`);
  }
}

// Instantiate Person and Developer objects
const alice = new Person("Alice", 25, "Teacher");
const bob = new Developer("Bob", 30, "Software Engineer", ["JavaScript", "Python", "C++"]);

// Demonstrate the functionality of the objects
alice.introduce();
bob.introduce();
bob.code();
alice.celebrateBirthday();