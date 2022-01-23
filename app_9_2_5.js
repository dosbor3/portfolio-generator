//const profileDataArgs = process.argv.slice(2, process.argv.length);

//An arrow function called generatePage() that returns a string
//const generatePage = () => "Name: Jane, Github: janehub";

//console.log(generatePage());


/*
~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~    Template Literals   ~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~

To make this function dynamic, we could add arguments to the function expression, 
then insert the data into the string using interpolation, which is the substitution 
of text for a variable we build into the string.

With ES6, we can use a feature called template literals to embed JavaScript expressions 
into the string. Template literals are enclosed by backticks (`) instead of double or single 
quotes.

Although backticks may look similar to single quotes ('), they operate differently, which we'll 
explain in the following section.

*/
//const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

/*
With template literals, we can wrap the string in backticks and interpolate the variables with the 
${<variable>} syntax.

To make sure the function still works, display the return from the function call by writing the following
 statement below the function expression:
*/
//console.log(generatePage("Jane", "janehub"));

/*
~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~    Multi-line Strings  ~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~

Template literals allow us to do easily something that would be difficult with regular strings: multi-line text.

To do this, simply enter a keyboard return in the template literal wherever you want a line break to occur, just as you would do if you were entering a line break in a word processor.

We can create multi-line input for our previous example by recoding it this way:

*/
// const generatePage = (userName, githubName) => {
//   return `
//     Name: ${userName}
//     GitHub: ${githubName}
//   `;
// };

//console.log(generatePage("Jane", "janehub"));

/*
~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~    Destructuring Assignment  ~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~

Continuing with the project, now that we've created a function that can receive input and display the data dynamically, 
the next step is to collect command-line arguments as we did before and feed them into the generatePage() function to create 
a string with the user input.

Let's restore this variable at the top of app.js.  I added it below and commented this line out at the top.
Now we have our profileDataArgs array again, which holds the user command-line arguments.

We'll want to extract those arguments and store them into distinct variables. One way to do this is to use 
the array index with the following expressions. Put these after the profileDataArgs assignment.  Then edit the 
console.log() to print the return of generatePage() with those two variables as arguments:
*/

const profileDataArgs = process.argv.slice(2, process.argv.length);

//const name = profileDataArgs[0];
//const github = profileDataArgs[1];

/*
Then edit the console.log() to print the return of generatePage() with those two variables as arguments:
*/
//console.log(generatePage(name, github));

/*Now run app.js with two command-line arguments to ensure it works as intended.

Alternatively, we can use an ES6 feature called assignment destructuring. In basic terms, it assigns 
elements of an array to variable names in a single expression, as shown here:
*/

//Replace the two corresponding variable assignments in your code with this shorter, one-line version: 
const [name, github] = profileDataArgs;

// Next, leave the current console.log() as-is, but also add another one above it so we can log the name 
//and github inputs and confirm they match. Your code should therefore include these two console.log()s in sequence:
// console.log(name, github);
// console.log(generatePage(name, github));


// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
// console.log(generatePage(name ));
// console.log(generatePage( github));

/*
As the preceding image shows, the command-line arguments are now displayed in the output message. This is great! But the 
objective is to generate HTML, so let's change the generatePage() function in app.js to output the following HTML string instead:

Notice that we've now interpolated the command-line arguments into the HTML using ${name} and ${github}. Save your changes and then 
run the Node.js app with command-line arguments, and your output should match that shown in the following image. Confirm that your 
arguments appear in the appropriate locations in the HTML:


*/
const generatePage = (name, github) => {
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
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};

// Great job! You've completed a function that receives the command-line arguments and inserts them in a HTML template literal. 
//Next, you'll output this string into a file that can be opened in the browser.+


//File System.
/*
Review the three arguments in the fs.writeFile() function. The first argument is the file name that will be created, or the output 
file. The second argument is the data that's being written: the HTML string template. The third argument is the callback function 
that will handle any errors as well as the success message.

To use File System, we must require it at the top of the JS file.  I added it below for this example, but SHOULD be declared at the 
top of the JS file.

The require statement is a built-in function that's globally available in Node.js. It allows the app.js file to access the fs module's 
functions through the fs assignment.


*/
const fs = require('fs');
fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});