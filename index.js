// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = () => inquirer.Prompt([
  {
    type: 'input',
    name: 'name',
    message: 'what is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe the purpuso of your project:',
  },
  {
    type: 'checkbox',
    name: 'stack',
    message: 'Select a license for your project:',
    choices: ['MIT', 'ISC', 'JavaScript', 'Spanish'],
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// .gitignore: done
// npm init and i inquirer@8.2.4: done
// app video and others screen shots:

// What is the title of your project?
// Describe the purpose of your project:
// Select a license for your project: (apache, boots, bsd, 
