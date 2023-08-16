// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {

  if (!license) {
    return '';
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`;
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`;
  }
  if (license === 'ISC') {
    return `https://opensource.org/licenses/ISC`;
  }
  if (license === 'GPLv2') {
    return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
  }
  if (license === "apache2.0") {
    return 'https://opensource.org/licenses/Apache-2.0';
  }
  if (license === "GPLv3") {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  }
  if (license === "BSD 3-clause") {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'none') {
    return '';
  } else {
    return `## License
    This project is covered under the ${license} license. You can learn more about this license [here](${renderLicenseLink(license)}).`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  // const userLicense = renderLicenseBadge(data.license);
  
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ${data.addTableOfContents ? tableOfContents() : ''}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributors
  
  ${data.contributors}
  
  ## Test
  
  ${data.test}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions
  
  Any questions about the project or how to contribute, you can contact me here:

  * ${data.github}
  * ${data.email}
  `;
}

function tableOfContents () {
  return `
  ## Table of Content
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  `;
} 

module.exports = generateMarkdown;

// let badgeLink = "";
// if (license === "MIT") {
//   badgeLink = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
// } else if (license === "ISC") {
//   badgeLink = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
// } else if (license === "GPLv2") {
//   badgeLink = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
// } else if (license === "apache2.0") {
//   badgeLink = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
// } else if (license === "GPLv3") {
//   badgeLink = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
// } else if (license === "BSD 3-clause") {
//   badgeLink = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
// } else {
//   return badgeLink;
// }
