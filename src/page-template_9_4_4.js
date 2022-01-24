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
    /*
    If we were to break this down in terms of where this object's property data should go, we could 
    identify data that goes into a Header section, data that goes into an About section, and data that 
    goes into a Project section. Look at the data's key names—we've even labeled them as such for the 
    most part! To start, let's destructure templateData and create variables to hold data for the About 
    and Project sections.

    Update the function in page-template.js to have this code before the return statement:      */

    // destructure projects and about data from templateData based on their property key names
    const { projects, about, ...header } = templateData;
    console.log(projects, about, header) ;

    /*
    In this example, the variable second would actually have a value of 1, and the variable first would have a value
    of 2. This is because array destructuring will simply go in the order of the array. In fact, this would completely 
    ignore the rest of the array because we didn't create variables to grab data from that index.

    With object destructuring, however, we can grab any value we want out of the object by simply calling on the key name 
    of the property we want to create a variable for. In this code, we don't have to worry about listing projects and about 
    in any order. All we need to do is ensure that we're creating variable names that completely match the property name 
    we're looking to destructure data from.

    So now, the variable about is simply a big string of data that we copied out of templateData.about, and the variable 
    projects is an array of objects we copied out of templateData.projects. This makes the code much more readable, as we 
    can now use the data separately.

    */



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