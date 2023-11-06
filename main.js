/* main.js */

// This code is a sample implementation of a complex task management system.
// It provides functionality to create, update, and delete tasks,
// assign tasks to users, track progress, and generate reports.

// Constants
const MAX_TASK_COUNT = 1000;
const STATUS_PENDING = "Pending";
const STATUS_IN_PROGRESS = "In Progress";
const STATUS_COMPLETED = "Completed";

// Task Class
class Task {
  constructor(title, description, assignedTo) {
    this.id = Math.floor(Math.random() * MAX_TASK_COUNT) + 1;
    this.title = title;
    this.description = description;
    this.assignedTo = assignedTo;
    this.status = STATUS_PENDING;
  }

  updateStatus(newStatus) {
    this.status = newStatus;
  }
}

// User Class
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.assignedTasks = [];
  }

  assignTask(task) {
    if (this.assignedTasks.length < MAX_TASK_COUNT) {
      this.assignedTasks.push(task);
      return true;
    } else {
      return false;
    }
  }

  unassignTask(task) {
    const index = this.assignedTasks.indexOf(task);
    if (index !== -1) {
      this.assignedTasks.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
}

// Task Manager Class
class TaskManager {
  constructor() {
    this.tasks = [];
    this.users = [];
  }

  createTask(title, description, assignedTo) {
    const task = new Task(title, description, assignedTo);
    this.tasks.push(task);
    assignedTo.assignTask(task);
    return task;
  }

  updateTaskStatus(taskId, newStatus) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.updateStatus(newStatus);
      return true;
    } else {
      return false;
    }
  }

  deleteTask(taskId) {
    const index = this.tasks.findIndex((task) => task.id === taskId);
    if (index !== -1) {
      const task = this.tasks[index];
      task.assignedTo.unassignTask(task);
      this.tasks.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  generateReport() {
    let report = "Tasks Report:\n";
    report += "----------------\n";

    this.tasks.forEach((task) => {
      report += `ID: ${task.id}\n`;
      report += `Title: ${task.title}\n`;
      report += `Description: ${task.description}\n`;
      report += `Assigned To: ${task.assignedTo.name}\n`;
      report += `Status: ${task.status}\n`;
      report += "----------------\n";
    });

    return report;
  }
}

// Example usage
const taskManager = new TaskManager();

const user1 = new User("John Doe", "john.doe@email.com");
const user2 = new User("Jane Smith", "jane.smith@email.com");

const task1 = taskManager.createTask("Task 1", "Description 1", user1);
const task2 = taskManager.createTask("Task 2", "Description 2", user2);

taskManager.updateTaskStatus(task1.id, STATUS_IN_PROGRESS);
taskManager.updateTaskStatus(task2.id, STATUS_COMPLETED);

taskManager.deleteTask(task1.id);

const report = taskManager.generateReport();
console.log(report);
