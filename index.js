// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// title, description, installation, usage info, contribution guidelines, test instructions
// TODO: Create an array of questions for user input
const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "what is the title of your project?",
      validate: (userTitle) => {
        if (userTitle) {
          return true;
        } else {
          console.log("You must enter a title for your project!");
        }
      }
    },
    {
      type: "input",
      name: "description",
      message: "Describe the purpose of your project:",
      validate: (userDescription) => {
        if (userDescription) {
          return true;
        } else {
          console.log("You must enter a description!");
        }
      }
    },
    {
      type: "confirm",
      name: "addTableOfContents",
      message: "Would you like to add a table of contents?",
    },
    {
      type: "input",
      name: "installation",
      message: "Provide an installation for the project:",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide usage information:",
    },
    {
      type: "confirm",
      name: "addContributors",
      message: "Would you like to add contributors?",
    },
    {
      when: function (answers) {
        return answers.addContributors;
      },
      type: "input",
      name: "contributors",
      message: "How can others contribute to the project?",
    },
    {
      type: "input",
      name: "test",
      message: "What would be the testing process for this project?",
    },
    {
      type: "list",
      name: "license",
      message: "Select a license for your project:",
      choices: [
        "MIT",
        "ISC",
        "GPLv2",
        "Apache2.0",
        "GPLv3",
        "BSD 3-clause",
        "none",
      ],
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email account?",
    },
  ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  
  questions().then((answers) => {
    const generate = generateMarkdown(answers);
    fs.writeFileSync('README.md', generate);
  });

}

// TODO: Create a function to initialize app
function init() {
  writeToFile();
 
}

// Function call to initialize app
init();
