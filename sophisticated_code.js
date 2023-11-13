/*  sophisticated_code.js

    Title: Sophisticated Code Example
    Description: This code is a demonstration of a complex and sophisticated JavaScript application.
*/

// Utility function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Class representing a Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.isAdult = age >= 18;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

// Class representing a Car
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.isOld = year < 2010;
    }

    startEngine() {
        console.log(`Starting the engine of ${this.brand} ${this.model}...`);
    }
}

// Array of persons
const persons = [
    new Person("John Doe", 25),
    new Person("Jane Smith", 32),
    new Person("Mike Johnson", 45)
];

// Array of cars
const cars = [
    new Car("Toyota", "Camry", 2015),
    new Car("Honda", "Accord", 2012),
    new Car("Ford", "Mustang", 2009)
];

// Function to find the oldest person
function findOldestPerson(people) {
    let oldest = people[0];
    for (let i = 1; i < people.length; i++) {
        if (people[i].age > oldest.age) {
            oldest = people[i];
        }
    }
    return oldest;
}

// Function to calculate the average age of persons
function calculateAverageAge(people) {
    let sum = 0;
    for (let person of people) {
        sum += person.age;
    }
    return sum / people.length;
}

// Function to filter cars which are old
function filterOldCars(carsList) {
    return carsList.filter(car => car.isOld);
}

// Generate a random number between 1 and 100
const randomNumber = getRandomNumber(1, 100);
console.log(`Random Number: ${randomNumber}`);

// Sort persons by age in descending order
persons.sort((a, b) => b.age - a.age);

// Find the oldest person
const oldestPerson = findOldestPerson(persons);
console.log(`Oldest Person: ${oldestPerson.name}`);

// Calculate the average age of persons
const averageAge = calculateAverageAge(persons);
console.log(`Average Age: ${averageAge}`);

// Filter old cars
const oldCars = filterOldCars(cars);
console.log("Old Cars:");
for (let car of oldCars) {
    console.log(`${car.brand} ${car.model} (${car.year})`);
}

// Output the details of each person
console.log("Persons:");
for (let person of persons) {
    person.greet();
}

// Output the details of each car
console.log("Cars:");
for (let car of cars) {
    car.startEngine();
}

// ... More sophisticated and complex code below ...
// ... This code can be extended to include additional functionality ...
// ... Use cases, algorithms, data structures, etc. ...