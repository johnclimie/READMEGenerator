// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
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
        message: 'Describe your project?',
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
    fs.writeToFile(fileName, data, err => {
        err ? console.log(err) : console.log("Success!");
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


console.log(genMarkdown.generateMarkdown())