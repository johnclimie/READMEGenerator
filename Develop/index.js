// Grabs external packages
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
//Grabs GenerateMarkdown Function
const genMarkdown = require('./utils/generateMarkdown')

//List of questions for user for README
const questions = [
    {
        type: 'input',
        message: 'What is the title for your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How do you install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How do you use your project?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Pick a license',
        name: 'license',
        choices: ['Apache License 2.0', 'GNU', 'MIT', 'Mozilla Public License 2.0', 'The Unlicense', 'None']
    },
    {
        type: 'input',
        message: 'Who all contributed to your project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How was project tested?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'mail'
    }
];

//Creates function for README to generate with the template
function writeToFile(fileName, data) {
    fs.writeFile(fileName, genMarkdown.generateMarkdown(data), err => {
        err ? console.log(err) : console.log("Success!");
    });
}
// Allows README to be presented
util.promisify(writeToFile);


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile('README.md', data);
        })
}

// Function call to initialize app
init();
