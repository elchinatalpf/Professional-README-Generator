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
    type: 'confirm',
    name: 'addTableOfContents',
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
    type: 'confirm',
    name: 'addContributors',
    message: 'Would you like to add contributors?',
  },
  {
    when: function (answers) {
      return answers.addContributors;
    },
    type: 'input',
    name: 'contributors',
    message: 'How can others contribute to the project?'
  },
  {
    type: 'input',
    name: 'test',
    message: 'What would be the testing process for this project?'
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Select a license for your project:',
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
    const userLicenses = renderLicenseBadge(answers.badgeLink);
    const generate = generateMarkdown( { ...answers, userLicenses });
    fs.writeFileSync('README.md', generate);
  });

}

// TODO: Create a function to initialize app
function init() {
 try {
   writeToFile();
  console.log('Congrats on creating your first README with Node.js');
 } catch(err) {
  console.log(err);
 }
}

// Function call to initialize app
init();
