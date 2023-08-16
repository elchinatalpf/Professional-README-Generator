// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// title, description, installation, usage info, contribution guidelines, test instructions
// TODO: Create an array of questions for user input
const questions = () => inquirer.prompt ([
  {
    type: 'input',
    name: 'title',
    message: 'what is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe the purpose of your project:',
  },
  {
    type: 'input',
    name: 'tableContent',
    message: 'Would you like to add a table of contents?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide an installation for the project:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:'
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Would you like to add contributors?'
  },
  {
    type: 'input',
    name: 'test',
    message: 'What would be the testing process for this project?'
  },
  {
    type: 'checkbox',
    name: 'licenses',
    message: 'Select a license for your project:',
    // I think here should be the license from generateMarkdown.js
    choices: ['MIT', 'ISC', 'GPLv2', 'Apache2.0', 'GPLv3', 'BSD 3-clause', 'none']
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email account?'
  },
]);
// .then(() => console.log('Testing is Sucess!'))
// .catch(err => console.log(err));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  
  questions().then((answers) => {
    const userLicenses = renderLicenseBadge(answers.license);
    const generate = generateMarkdown( { ...answers, userLicenses });
    fs.writeFileSync('README.md', generate);
  });

}

// TODO: Create a function to initialize app
function init() {
  writeToFile();
}

// Function call to initialize app
init();
// to use later probably with choices:
// const outputCyanText = (text) => console.log(`\x1b[36m${text}\x1b[0m`);
