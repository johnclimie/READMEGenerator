// Returns license badge based on the license selected
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
      break;
    case "GNU": 
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
      break;
    case "MIT": 
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
      break;
    case "Mozilla Public License 2.0":
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
      break;
    case 'The Unlicense':
      return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)'
      break;
    case 'None':
      return '';
      break;
  }
}

// Returns license link based on the license selected
function renderLicenseLink(license) {
  switch (license) {
    case "Apache License 2.0":
      return 'You can read more at https://opensource.org/licenses/Apache-2.0';
      break;
    case "GNU":
      return 'You can read more at https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'MIT':
      return 'You can read more at https://opensource.org/licenses/MIT';
      break;
    case 'Mozilla Public License 2.0':
      return 'You can read more at https://opensource.org/licenses/MPL-2.0';
      break;
    case 'The Unlicense':
      return 'You can read more at http://unlicense.org/';
      break;
    case 'None':
      return '';
      break;
  }
}

// Returns license section based on the license selected
function renderLicenseSection(license) {
  if (license === '') {
    return ''
  } else {
    return `This application is covered under ${license}.`
  }
}

// Creates a markdown based on what the user inputs
function generateMarkdown(data) {

  var dataDraft = 
  `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  [Description](#description)<br />
  [Installation](#installation)<br />
  [Usage](#usage)<br />
  [License](#license)<br />
  [Contribution](#contribution)<br />
  [Tests](#tests)<br />
  [Questions](#questions)<br />

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contribution
  ${data.contributing}

  ## Tests
  ${data.tests}
  
  ## Questions
  Questions?<br />
  You can contact me through my GitHub!<br />
  https://github.com/${data.github}<br />
  <br />
  Or you can email me at <${data.mail}>`
  ;

  return dataDraft;
}

module.exports = {generateMarkdown};
