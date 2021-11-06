const contributionGuidelines = require('./covenant-guidelines.js')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  

  ## **Table of Contents**
  * [Description](#description)
  * [Installation](#installation)
  * [Usage Information](#usage-information)
  * Contribution Guidelines](#contribution-guidelines)
  * [Tests](#tests)


  ## **Description**
  ${data.description}


  ## **Installation** 
  To run this program locally, ${data.installation}
  You can also watch a short video on installation [here.](https://${data.link})


  ## **Usage Information**
  ${data.usage}


  ## **Contribution Guidelines** 
  ${contributionGuidelines}
    

  ## **Tests** 
  ${data.tests}

  ## **Questions**
  Visit my [GitHub!](https://${data.username}.github.io)
  Or, if you'd like to contact me directly, [email me!](mailto:${data.email})
`;
}

module.exports = generateMarkdown;


