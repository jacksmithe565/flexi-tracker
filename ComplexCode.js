/*
Filename: ComplexCode.js

This code demonstrates a sophisticated and elaborate JavaScript application that simulates a virtual pet with various functionalities and interactions.

Please note that the code is purely for demonstration purposes and may not be a complete and functional solution.

*/

// Virtual Pet Class
class VirtualPet {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.hunger = 50; // Initial Hunger Level
    this.energy = 100; // Initial Energy Level
    this.happiness = 75; // Initial Happiness Level
    this.commands = ['feed', 'sleep', 'play'];
  }

  // Method to feed the pet
  feed() {
    if (this.hunger > 0) {
      this.hunger -= 10;
      this.energy += 5;
      console.log(`${this.name} thanks you for the delicious meal!`);
    } else {
      console.log(`${this.name} is not hungry right now.`);
    }
  }

  // Method to put the pet to sleep
  sleep() {
    if (this.energy < 100) {
      this.energy += 20;
      console.log(`${this.name} sleeps peacefully.`);
    } else {
      console.log(`${this.name} is wide awake and full of energy.`);
    }
  }

  // Method to play with the pet
  play() {
    if (this.happiness < 100) {
      this.happiness += 15;
      this.hunger += 5;
      console.log(`${this.name} is happy playing with you!`);
    } else {
      console.log(`${this.name} is already very happy.`);
    }
  }

  // Method to check the pet's status
  checkStatus() {
    console.log(`Status of ${this.name}:`);
    console.log(`Hunger: ${this.hunger}`);
    console.log(`Energy: ${this.energy}`);
    console.log(`Happiness: ${this.happiness}`);
  }

  // Method to execute user commands
  executeCommand(command) {
    if (this.commands.includes(command)) {
      this[command](); // Dynamically execute the command method
    } else {
      console.log(`"${command}" is not a valid command.`);
    }
  }
}

// Create a Virtual Pet object
const myPet = new VirtualPet("Fluffy", "Cat");

// Simulation Loop
for (let i = 0; i < 5; i++) {
  console.log(`Day ${i + 1}:`);

  // Perform random actions
  const randomAction = Math.floor(Math.random() * myPet.commands.length);
  myPet.executeCommand(myPet.commands[randomAction]);

  // Check status after each action
  myPet.checkStatus();

  console.log('------------------');
}

/*
Output (Sample):
Day 1:
Fluffy is happy playing with you!
Status of Fluffy:
Hunger: 55
Energy: 95
Happiness: 90
------------------
...
Day 5:
Fluffy is wide awake and full of energy.
Status of Fluffy:
Hunger: 60
Energy: 100
Happiness: 100
------------------
*/