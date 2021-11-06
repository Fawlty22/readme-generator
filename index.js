// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the title of your project? (Required)',
            validate: projectNameInput => {
                if (projectNameInput) {
                return true;
                } else {
                console.log('Please enter your project name!');
                return false;
                }
            }
            },
            {
            type: 'input',
            name: 'description',
            message: 'Please enter a short description of your project: (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                return true;
                } else {
                console.log('Please enter your project description!');
                return false;
                }
            }
            },
            {
            type: 'input',
            name: 'installation',
            message: 'Please enter installation instructions for your project: (Required)',
            validate: installationInput => {
                if (installationInput) {
                return true;
                } else {
                console.log('Please enter your project installation instructions!');
                return false;
                }
            }
            },
            {
            type: 'input',
            name: 'usage',
            message: 'Please enter the usage information for your project: (Required)',
            validate: usageInput => {
                if (usageInput) {
                return true;
                } else {
                console.log('Please enter your project usage information!');
                return false;
                }
            }
            },
            {
            type: 'input',
            name: 'contribution',
            message: 'What are the contribution guidlines of your project? (Required)',
            validate: contributionInput => {
                if (contributionInput) {
                return true;
                } else {
                console.log("Please enter your projects' contribution guidelines!");
                return false;
                }
            }
            },
            {
            type: 'input',
            name: 'tests',
            message: 'What are the testing instructinos for your project? (Required)',
            validate: testInput => {
                if (testInput) {
                return true;
                } else {
                console.log('Please enter your project test instructions:');
                return false;
                }
            }
            },
    ]);
} ;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then( answersObject => {
            console.log(answersObject)
        })
}

// Function call to initialize app
init();
