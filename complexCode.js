/* 
 * Filename: complexCode.js
 * Description: A complex example of JavaScript code
 */

// Import external library
const moment = require('moment');

// Function to calculate Fibonacci sequence
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Object representing a car
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getAge() {
    const currentYear = moment().year();
    return currentYear - this.year;
  }

  static compareModels(model1, model2) {
    return model1.localeCompare(model2);
  }
}

// Generate Fibonacci sequence and store in an array
const fibonacciSequence = [];
for (let i = 0; i < 10; i++) {
  fibonacciSequence.push(fibonacci(i));
}

// Create car instances
const car1 = new Car('Toyota', 'Camry', 2017);
const car2 = new Car('Honda', 'Accord', 2020);
const car3 = new Car('Ford', 'Mustang', 2015);

// Calculate car ages
const car1Age = car1.getAge();
const car2Age = car2.getAge();
const car3Age = car3.getAge();

// Compare car models
const carModels = [car1.model, car2.model, car3.model];
carModels.sort(Car.compareModels);

// Print the results
console.log('Fibonacci sequence:', fibonacciSequence);
console.log('Car 1 Age:', car1Age);
console.log('Car 2 Age:', car2Age);
console.log('Car 3 Age:', car3Age);
console.log('Sorted Car Models:', carModels);