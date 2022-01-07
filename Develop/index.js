// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const genMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
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
        type: 'input',
        message: 'Who all contributed to your project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How was project tested?',
        name: 'tests'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, genMarkdown.generateMarkdown(data), err => {
        err ? console.log(err) : console.log("Success!");
    });
}

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
