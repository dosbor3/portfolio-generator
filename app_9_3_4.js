const fs = require('fs');
const generatePage = require("./src/page-template.js");

/*
When you run the app, you should see an array of just your name and occupation. 
This is because you used the array method .slice() to return a brand-new array 
based on process.argv starting at the third index (i.e., index 2 in the zero-based array), 
and ending with the final index.

But wait, if we want .slice() to return everything including the final index, why 
don't we write process.argv.slice(2, process.argv.length - 1);? It turns out .slice() 
returns everything from the first zero-based index we provide as the first argument up 
to but not including the zero-based index we provide as the second argument. So, to 
return through the last index in the array, we provide the length of the array as the 
second argument.

This way, you don't actually manipulate process.argv, but rather create a new array based 
on the values from the third index and on.
*/
const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;



fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});


/*
As you can see, the majority of the code in this file is in the string template. To follow a basic principle of coding, 
always try to limit the functions and files to a single responsibility. For example, take the app.js file, where the 
application executes functions to capture user input and create a file. The generatePage() function, which creates the 
template literal, is out of place and adds bloat to the app.js.

We can clean up this file using Node.js's modular system. To do so, we'll remove the generatePage() function from the 
app.js file. Create a new folder called src and place it in the root directory of the project. Inside this folder, create 
a file called page-template.js.


You did a great job creating a CLI application! You're one step further along on your journey to mastering the Node.js environment 
and modular system. You also encountered some key ES6 goodies to help you grow as a developer. And you probably understand why a 
majority of JavaScript developers have adopted ES6 into their tech stack!

In this lesson, you added the following skills to your skill set:

Using ES6 arrow functions and assignment destructuring to write cleaner code.

Researching documentation to learn how to use new tools like the core library in Node.js.

Requiring and exporting modules to use Node.js's core library and modularize the application.

Although it has been successfully generated, the portfolio page is still incomplete. To make it more robust and descriptive, 
we'll need to change how we're capturing user input. Let's bring in some reinforcements in the next lesson and explore using 
open source third-party modules to expand the page.
*/