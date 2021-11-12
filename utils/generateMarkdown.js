const contributionGuidelines = require('./covenant-guidelines.js')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  //loop through licenses array and run it through the switch
  let markDownArray = [];
  let licenseArray = Object.entries(data.license);
  
  licenseArray.forEach(element => {
    switch (element) {
      case 'MIT':
        markDownArray.push(`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`);
        break;
      case 'Apache': 
        markDownArray.push(`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`);
        break;
      case 'ISC':
        markDownArray.push(`[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`);
        break;
        default:
          console.log(data.license[0])
          console.log('typeof datalicense', typeof data.license)
          console.log(licenseArray)
        break;

      }
      
  })

  return markDownArray; 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
data.license.forEach(element => {
  
});

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  

  ## **Table of Contents**
  * [Description](#description)
  * [Installation](#installation)
  * [Usage Information](#usage-information)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Tests](#tests)


  ## **Description**
  ${data.description}
  ${renderLicenseBadge(data)}
  


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


