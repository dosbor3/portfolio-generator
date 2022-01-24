// create the about section
const generateAbout = aboutText => {
  if (!aboutText) {
    return '';
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
      <p>${aboutText}</p>
    </section>
  `;
};

/*
The projects array is the last piece of the portfolio, and arguably the most important. It's also the most 
complex set of data we've had to work with. We'll feature some projects but not others, we have subarray 
data holding the technology we built the apps with, and there's just more going on than the previous sections.

Now that we can execute functions through template literals, let's create another function to handle generating 
the project HTML data.

In page-template.js above the module.exports function, create the following function:

Let's update the generateProjects() function to look like the following after the previous lines updates:
*/
/*
const generateProjects = projectsArr => {
  const projectHtmlArr = projectsArr.map(({ name, description, languages, link }) => {
      return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">
              Built With:
              ${languages.join(', ')}
            </h5>
            <p>${description}</p>
            <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        `;
    });

  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
      ${projectHtmlArr.join('')}
      </div>
    </section>
  `;
};
*/
/*
All of the data is now getting printed to the page! There's only one issue, though: we still haven't figured out how to separate the featured from the non-featured projects. All of the HTML we just created has the same col-12 col-md-6 classes for each project, meaning they'll look identical. We want featured projects to just have col-12 so that they run full-width no matter what. Let's fix that with another new method, called .filter().
Let's change the generateProjects() function to look like the following code:
*/
const generateProjects = projectsArr => {
  // get array of just featured projects
  const featuredProjects = projectsArr.filter(project => {
    if (project.feature) {
      return true;
    } else {
      return false;
    }
  });

  // get array of all non-featured projects
  const nonFeaturedProjects = projectsArr.filter(project => {
    if (!project.feature) {
      return true;
    } else {
      return false;
    }
  });

  const featuredProjectHtmlArr = featuredProjects.map(({ name, description, languages, link }) => {
    return `
      <div class="col-12 mb-2 bg-dark text-light p-3 flex-column">
        <h3 class="portfolio-item-title text-light">${name}</h3>
        <h5 class="portfolio-languages">
          Built With:
          ${languages.join(', ')}
        </h5>
        <p>${description}</p>
        <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
      </div>
    `;
  });

  const nonFeaturedProjectHtmlArr = nonFeaturedProjects.map(
    ({ name, description, languages, link }) => {
      return `
        <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
          <h3 class="portfolio-item-title text-light">${name}</h3>
          <h5 class="portfolio-languages">
            Built With:
            ${languages.join(', ')}
          </h5>
          <p>${description}</p>
          <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
        </div>
      `;
    }
  );

  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
      ${featuredProjectHtmlArr.join('')}
      ${nonFeaturedProjectHtmlArr.join('')}
      </div>
    </section>
  `;
};

/*
Using the .filter() array method, we created two new arrays of project data based on whether 
their feature property was true or false. Once we separated the array data, we created two sets 
of HTML data and got them into the <section> element.

The array .filter() method is another new JavaScript array method that allows us to execute a function 
on each element of the array to test whether or not it should be in the new array created from it. Take 
the following code, for example:


const ageArr = [21, 58, 8, 16, 106, 83, 42, 2, 0];

const over21Arr = ageArr.filter(age => {
  if (age >= 21) {
    return true;
  } else {
    return false;
  }
});
// => [21, 58, 106, 83, 42];

n this example, we have an array of ages. We want to see which ones are over the age of 21, so we use a 
.filter() method to test each age one at a time. If it's 21 or older, we return true, meaning that element 
of ageArr should be included in the new over21Arr. If it's younger than 21, we return false, meaning that 
element of the array shouldn't be included in the new over21Arr.

This is a simpler example, but we use it to test any type of data as long as we're checking for a true or 
false condition. In this case, we're checking to see if the project's feature property is true or false. 
We then take the arrays and use .map() to create the HTML content for them, and we finally write it to the 
page in the returning <section> element.

And we can chain .filter() and .map() together! Let's refactor the code a little bit to demonstrate.

*/

/*
So we've just updated the generateProjects() function to do two tasks. First, we take the array of project data and 
we create a new array from it, called projectHtmlArr. Then we take that array and interpolate it into the returning 
project <section> element template literal. We use a .join() method to turn the projectHtmlArr into a combined string 
of HTML before returning as well.

For the projects, we use .map() to iterate through the projectArr, we destructure each project's object data based on 
property name, and we return an entire set of HTML code with it!

Now each set of data in projectHtmlArr will look like the following:

*/


/*
Once that's created, add the following code into the main template literal, right below 
the ${generateAbout(about)} code:

${generateProjects(projects)}
*/

module.exports = templateData => {
  // destructure page data by section
  const { projects, about, ...header } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
        <nav class="flex-row">
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
            header.github
          }">GitHub</a>
        </nav>
      </div>
    </header>
    <!--
    This function, generateAbout(), will accept the about variable as a parameter, and if it doesn't exist, 
    we'll simply return an empty string. If it does exist, however, we'll return the entire <section> element. 
    Let's update the main function's template literal to execute generateAbout() where we want the content to go.

    Execute the generateAbout() function between the <main> tags in the template literal, so that it looks like 
    the following code:
    
    -->
    <main class="container my-5">
    ${generateAbout(about)}
    ${generateProjects(projects)}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
    </footer>
  </body>
  </html>
  `;
};
