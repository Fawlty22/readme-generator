// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
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
            message: 'Please enter the usage information for your project - instructions for use, screenshots, etc.  : (Required)',
            validate: usageInput => {
                if (usageInput) {
                return true;
                } else {
                console.log('Please enter your project usage information!');
                return false;
                }
            }
            },
            // {
            // type: 'input',
            // name: 'contribution',
            // message: 'What are the contribution guidelines of your project? (Required)',
            // validate: contributionInput => {
            //     if (contributionInput) {
            //     return true;
            //     } else {
            //     console.log("Please enter your projects' contribution guidelines!");
            //     return false;
            //     }
            // }
            // },
            {
            type: 'input',
            name: 'tests',
            message: 'What are the testing instructions for your project? (Required)',
            validate: testInput => {
                if (testInput) {
                return true;
                } else {
                console.log('Please enter your project test instructions!');
                return false;
                }
            }
            },
            {
                type: 'input',
                name: 'username',
                message: 'What is your GitHub username? (Required)',
                validate: testInput => {
                    if (testInput) {
                    return true;
                    } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                    }
                }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your email address? (Required)',
                    validate: testInput => {
                        if (testInput) {
                        return true;
                        } else {
                        console.log('Please enter your email!');
                        return false;
                        }
                    }
                    },
                    {
                        type: 'checkbox',
                        name: 'license',
                        message: 'What licenses would you like to apply to your project? (Required)',
                        choices: ['MIT', 'Apache', 'GTL'],
                        validate: licenseInput => {
                            if (licenseInput) {
                            return true;
                            } else {
                            console.log('Please select at least one license!');
                            return false;
                            }
                        }
                        },
                    

        ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
// return fs.writeFileSync(path.join(process.cwd(), fileName), data);
return fs.writeFile(fileName, data, err => {
    if (err) {
        console.log(err);
    }
    return generateMarkdown(data);

})

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
            console.log('Generate README...');
            console.log(data);
            writeToFile ('README.md', generateMarkdown(data));
        });
        
}

// Function call to initialize app
init();
