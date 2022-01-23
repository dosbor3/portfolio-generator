const inquirer = require("inquirer");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        }
        else {
          console.log("Please enter your name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username?'
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself?'
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ]);
};

const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);

  //If ther's no "projects" array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }

  return inquirer.prompt([
    {
      type:"input",
      name: "name", 
      message: "What is the name of your project? ",
      validate: nameInput => {
        if (nameInput) {
          return true;
        }
        else {
          console.log("Please enter your name!");
          return false;
        }
      }
      
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        }
        else {
          console.log("Please enter your name!");
          return false;
        }
      }
    },
    {
      type:"checkbox",
      name: "languages", 
      message: "What did you build this project with? (Check all that apply)",
      choices: ["JavaScript", "HTML", "CSS", "ES6", "JQuery", "Bootstrap"]
    },
    {
      type:"input",
      name: "link", 
      message: "Enter the GitHub link to your project.  (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        }
        else {
          console.log("Please enter your name!");
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ])
};

promptUser()  
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });
 
// const fs = require('fs');
// const generatePage = require("./src/page-template.js");

// const pageHTML = generatePage(name, github);


// const [name, github] = profileDataArgs;



// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });


