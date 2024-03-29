// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const util = require("util");


// TODO: Create an array of questions for user input
const questions = inquirer
                    .prompt([
    {
        type: "input",
        message: "What is the title of your project",
        name: "Title",
    },
    {
        type: "input",
        message: "Describe your project.",
        name: "Description",
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "Installation",
    },
    {
        type: "input",
        message: "What are the instructions for use?",
        name: "Usage",
    },
    {
        type: "list",
        message: "Select license being used",
        name: "License",
        choices: [
            "MIT",
            "GVL-GPL 3.0",
            "APACHE 2.0",
            "BSD 3",
            "None",
        ]
    },
    {
        type: "input",
        message: "Who are the contributors?",
        name: "Contributing",
    },
    {
        type: "input",
        message: "What are your test instructions for your project?",
        name: "Test",
    },
    {
        type: "input",
        message: "Contact info for any extra questions.",
        name: "Questions",
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "Username",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "Email",
    }

]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeToFile(fileName, data, err => {
        if (err) {
            throw err;
        }

        console.log("Success! README.md file has been generated!")
    });
}

// TODO: Create a function to initialize app
function init() {
    prompt(questions).then(answers => {
        const response = generateMarkdown(answers, choices);
        console.log(answers);
        writeToFile("README.md", response);
    })
}

// Function call to initialize app
init();
