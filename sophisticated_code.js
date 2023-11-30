/*
Filename: sophisticated_code.js
Description: This code demonstrates a sophisticated and elaborate implementation of a task tracker with various features.
*/

// Array to store tasks
const tasks = [];

// Function to add a task
function addTask(title, priority, dueDate, tags) {
  const newTask = {
    title,
    priority,
    dueDate,
    tags,
    isCompleted: false,
  };
  tasks.push(newTask);
}

// Function to mark a task as completed
function completeTask(index) {
  if (index < 0 || index >= tasks.length) {
    console.log("Invalid task index!");
    return;
  }
  tasks[index].isCompleted = true;
}

// Function to sort tasks by priority
function sortByPriority() {
  tasks.sort((a, b) => b.priority - a.priority);
}

// Function to filter tasks by tags
function filterByTag(tag) {
  const filteredTasks = tasks.filter((task) => task.tags.includes(tag));
  return filteredTasks;
}

// Function to get tasks with nearest due date
function getTasksWithNearestDueDate() {
  const today = new Date();
  const sortedTasks = [...tasks].sort(
    (a, b) => a.dueDate - b.dueDate || a.priority - b.priority
  );
  const nearestDueDateTasks = sortedTasks.filter(
    (task) => task.dueDate >= today && !task.isCompleted
  );
  return nearestDueDateTasks;
}

// Function to generate a random number as task priority
function generateRandomPriority() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to generate a random due date within a week from today
function generateRandomDueDate() {
  const today = new Date();
  const randomDueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + Math.floor(Math.random() * 7) + 1
  );
  return randomDueDate;
}

// Add sample tasks
addTask("Complete report", generateRandomPriority(), generateRandomDueDate(), ["work"]);
addTask("Buy groceries", generateRandomPriority(), generateRandomDueDate(), ["personal"]);
addTask("Read book", generateRandomPriority(), generateRandomDueDate(), ["personal"]);
addTask("Fix bug", generateRandomPriority(), generateRandomDueDate(), ["work"]);
addTask("Exercise", generateRandomPriority(), generateRandomDueDate(), ["personal"]);

// Sort tasks by priority
sortByPriority();

// Complete first task
completeTask(0);

// Filter tasks by personal tag
const personalTasks = filterByTag("personal");

// Get tasks with nearest due date
const nearestDueDateTasks = getTasksWithNearestDueDate();

console.log(`Total tasks: ${tasks.length}`);
console.log(`Personal tasks: ${personalTasks.length}`);
console.log(`Nearest due date tasks:`);
nearestDueDateTasks.forEach((task) => {
  console.log(`- ${task.title} (Priority: ${task.priority})`);
});