// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
//using similar approach as activity 20
//For readME file, include:
//title, brief description, table of contents, installation, usage, license, contributing, tests, and questions.

const questions = [
 {
   type: '', 
   name: '',
   message: '', 
 }, 
 {
    type: '', 
    name: '',
    message: '', 
  },
  {
    type: '', 
    name: '',
    message: '', 
  },
  {
    type: '', 
    name: '',
    message: '', 
  },
  {
    type: '', 
    name: '',
    message: '', 
  },
  {
    type: '', 
    name: '',
    message: '', 
  },
  {
    type: '', 
    name: '',
    message: '', 
  },
  {
    type: '', 
    name: '',
    message: '', 
  },
  {
    type: '', 
    name: '',
    message: '', 
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.write(fileName, data, function(err) => {
        if (err) {
            console.error('Error', err);
        } else {
            console.log(`Success`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
