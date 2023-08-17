function renderLicenseBadge(license) {
// if license is none it will show an empty string else the license.
  if (!license) {
    return '';
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`;
  }
}
// select between licenses to provide the link.
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License":
      return `https://opensource.org/license/mit/`;
      break;
    case "ISC License":
      return `https://opensource.org/license/isc-license-txt/`;
      break;
    case "GPLv2 License":
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
      break;
    case "Apache2.0 License":
      return "https://opensource.org/license/apache-2-0/";
      break;
    case "GPLv3 License":
      return "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "BSD 3-clause":
      return "https://opensource.org/license/bsd-3-clause/";
      break;
  }
}
// We select the license here and place it in its respective section.
function renderLicenseSection(license) {
  if (!license || license === 'none') {
    return '## License\nThis project does not have a specific license associated with it.';
  } else {
    return `## License

    This project is covered under the ${license} license. You can learn more about this license ![here](${renderLicenseLink(license)}).`;
  }
}
// We create the markdown document from the answer's prompts.
function generateMarkdown(data) {

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
  
  Any questions about the project or how to contribute, you can open an issue or contact me here: ${data.github} ${data.email}
  `;
}
// if the user responds yes to table of contents it will be added to its readme's place.
function tableOfContents () {
  return `
  ## Table of Content
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  `;
} 

module.exports = generateMarkdown;
