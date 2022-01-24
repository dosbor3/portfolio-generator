/*
We'll refactor the HTML template literal output to not only handle the input data but also be set up with Google Fonts, 
FontAwesome icons, and our own style sheet. This way, when we wrap up the project later with the style sheet, we won't 
have to worry about it.

Update the returning template literal in page-template.js so that the whole function looks as follows:
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
    <main class="container my-5">

    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
    </footer>
  </body>
  </html>
  `;
};


/*
Notice how we use header.name and header.github throughout the template literal as interpolated data? The header part 
gives us more meaningful insight as to where this data should go, which helps us if we need to locate it again in the code.

Also, we generate the current year in the <footer>. People often simply forget that the year has changed since the first time 
they set up their site, so the code we use there will get the current year and put it in the <footer> element every time we run 
the app. This is another benefit of using string interpolation in JavaScript: we can execute valid JavaScript code inline with the 
text.
*/