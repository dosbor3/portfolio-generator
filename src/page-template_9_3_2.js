/*
The last time you worked on the HTML template function, you set it up in a way that seriously 
limited the type of data you could take in and use for output. That was fine—as you continue 
learning how to use Node.js and these new JavaScript features, you should impose some limits 
on yourself to avoid overwhelm. Now, though, you know what a lot of these moving pieces do and 
how you can work with them, so it's time to remove some of those limits.

Currently, we can accept only two parameters in the function from page-template.js. Let's revisit 
that function and update it to accept one parameter: the big object of portfolio data that the inquirer 
prompts have provided us with.

In page-template.js, update the function as follows:
*/

module.exports = templateData => {
    console.log(templateData);

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>

    <body>
      <h1>${templateData.name}</h1>
      <h2><a href="https://github.com/${templateData.github}">Github</a></h2>
    </body>
    </html>
  `;
};

/*
Notice how we had to change the template literal data to use properties of templateData instead of the individual 
parameters? We'll revisit and refactor this soon to make it look cleaner, but we don't want any errors to pop up 
as we test the code. We included a console.log(templateData); statement in there as well. This way, we can see that 
the data makes it to the function when we run it!

In app.js, we are now able to use our HTML template function in page-template.js because:

The parameter has been renamed templateData to reflect that it now accepts the promise object returned by inquirer.

The function definition has been changed to use the promise object's properties.

To use the HTML template function in the app.js file, we must use some of the code we commented out in lesson 3.
First, uncomment the expressions near the top of the app.js file:

const fs = require('fs');
const generatePage = require('./src/page-template');
This expression assigns the anonymous HTML template function in page-template.js to the variable generatePage.

Second, copy the following commented code and place it in the function block of the second then() of the promptUser() function call.

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    // const pageHTML = generatePage();

    // fs.writeFile('./index.html', pageHTML, err => {
    //   if (err) throw new Error(err);

    //   console.log('Page created! Check out index.html in this directory to see it!');
    // });
  });
We should also remove the console.log() expression here since one already exists in the template function.

Third, uncomment the expression that invokes the generatePage() with portfolioData and uses the result from our inquirer prompts as an argument called portfolioData.

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    const pageHTML = generatePage(portfolioData);

    // fs.writeFile('./index.html', pageHTML, err => {
    //   if (err) throw new Error(err);

    //   console.log('Page created! Check out index.html in this directory to see it!');
    // });
  });


*/