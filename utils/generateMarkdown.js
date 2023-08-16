// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let badgeLink = "";
  if (license === "MIT") {
    badgeLink = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "ISC") {
    badgeLink = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  } else if (license === "GPLv2") {
    badgeLink = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else if (license === "apache2.0") {
    badgeLink = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (licenseKind === "GPLv3") {
    badgeLink = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (licenseKind === "BSD 3-clause") {
    badgeLink = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else {
    return badgeLink;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  renderLicenseBadge(license.badgeLink); 

}
 
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}
  
  ## Description ${answers.description}

  ## Table of Content
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation ${answers.installation}

  ## Usage ${answers.usage}

  ## Contributors ${answers.contributors}

  ## Test ${answers.test}

  ## [![License: MIT](https://img.shields.io/badge/License-${answers.license}-yellow.svg)]

  ## Contact/Questions ${answers.github} ${answers.email}

  `;
}

module.exports = generateMarkdown;
