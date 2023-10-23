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
   type: 'input', 
   name: 'title',
   message: 'Enter your project title ', 
 }, 
 {
    type: 'input', 
    name: 'description',
    message: 'Please provide explanation of your project', 
  },
  {
    type: 'input', 
    name: 'installation',
    message: 'List installation instructions', 
  },
  {
    type: 'input', 
    name: 'usage',
    message: 'Provide project usage', 
  },
  {
    type: 'input', 
    name: 'contributing',
    message: 'Any contributions?', 
  },
  {
    type: 'input', 
    name: 'tests',
    message: 'List any testing instructions', 
  },
  {
    type: 'list', 
    name: 'license',
    message: 'Choose Correct license', 
    choices:['MIT', 'Apache License 2.0', 'Not listed', 'None'],
  },
  {
    type: 'input', 
    name: 'github',
    message: 'Enter your GitHub username:', 
  },
  {
    type: 'input', 
    name: 'email',
    message: 'Enter your email address:', 
  },

];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writefile(fileName, data, (err) => {
        if (err) {
            console.error('Error', err);
        } else {
            console.log(`Success`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
//shows questions?? 
  inquirer.prompt(questions)
  .then(userResponses => {
    // Generate README 
    const markdown = generateMarkdown(userResponses);

    // Write content to a file 
    fs.writeFileSync('README.md', markdown);

    // console logs success!
    console.log('success!');
  })
  .catch(error => {
    // errors 
    console.error('error:', error);
  });
}

// Function call to initialize app
init();
