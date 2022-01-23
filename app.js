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
    /*
    One last step remains. Let's ask the user if they'd like to add an About section. Then we'll prompt the 
    user for information, but only after they confirm yes. First, we must add a confirmation type question 
    and then ask for the information.

    Let's add the following confirmation question to the promptUser() function just below the GitHub username 
    prompt in the app.js file:  */
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },

    /*
    Next we'll add another property to the prompt looking for information about the user called when. 
    This is like the validate method we used previously, but instead of passing the value entered for 
    that specific question in as the parameter, it passes an object of all of the answers given so far as an object.

    Edit the existing about input to incorporate the when property, as shown here:

    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => {
        if (confirmAbout) {
          return true;
        } else {
          return false;
        }
      }
    }
    */
    {
      type: 'input',
      name: 'about',
      message: 'Would you like to provide some information about yourself?',
      when: ({ confirmAbout }) => {
        if (confirmAbout) {
          return true;
        } else {
          return false;
        }
      }
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
          console.log("Please enter your project name!");
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
          console.log("Please enter a description of your project!");
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
          console.log("Please enter your github  name!");
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


