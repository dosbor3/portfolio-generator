const inquirer = require("inquirer");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
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
//promptUser().then(answers => console.log(answers));
// Let's make the changes to the promptProject() function to add a parameter that will store the project data.
// Go to the app.js file and add portfolioData to the following function expression:
const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);

// Now let's add the array inside the promptProject() function, and initialize it as follows:
//portfolioData.projects = [];
/*Great! We just added the projects array to the portfolioData object and 
initialized it as an empty array. However, this could be problematic if 
the projects array is set to an empty array in every function call, because 
this would essentially erase all the project data we collected. We want this 
expression to occur on the first pass only.

What can we do to guarantee the array is initialized only on the first pass? We 
can handle this by using an if statement to initialize projects only if the array 
does not exist. Let's add the following control statement and replace that last 
statement with the following one: */ 

//If ther's no "projects" array property, create one
if (!portfolioData.projects) {
  portfolioData.projects = [];
}

/*Great job! Now that you have the data collection system in place, it's time
to focus on how to add another project. Once the data has been collected by 
inquirer, you need to add the project data to the projects array. Add a .then() 
to the end of the inquirer.prompt() that's returned by promptProject(). Then add 
the following code to the callback in the .then(), as shown here:  

.then(projectData => {
  portfolioData.projects.push(projectData);
});

*/  
  return inquirer.prompt([
    {
      type:"input",
      name: "name", 
      message: "What is the name of your project? "
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)'
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
      message: "Enter the GitHub link to your project.  (Required)"
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



/*In the preceding expression, we use the array method push() to place the projectData 
from inquirer into the new projects array we just created.  

At this point, we can evaluate whether the user wishes to add another project. Let's add 
a condition that will call the promptProject(portfolioData) function when confirmAddProject 
evaluates to true.

Add the following condition after the array .push() in the .then() callback: ---> This is added after line 101 above...

.then(projectData => {
  portfolioData.projects.push(projectData);
  if (projectData.confirmAddProject) {
    return promptProject(portfolioData);
  } else {
    return portfolioData;
  }
});

*/



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


