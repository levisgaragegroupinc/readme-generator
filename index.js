// Require
const inquirer = require('inquirer');
const fs = require('fs');

// Declare variables
const shieldsBadge = 'https://img.shields.io/badge/License';

// License URL
const licenseArray = {
    Apache: '[![License](' + shieldsBadge + '-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    GNU: '[![License: GPL v3](' + shieldsBadge + '-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    ISC: '[![License: ISC](' + shieldsBadge + '-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    MIT: '[![License: MIT](' + shieldsBadge + '-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Mozilla: '[![License: MPL 2.0](' + shieldsBadge + '-MPL_2.0-brightgreen.svg)]',
    Open: '[![License: Open Data Commons Attribution](' + shieldsBadge + '-ODC_BY-brightgreen.svg)]',
    None: ''
}; 

// Determine license URL
function determineBadge(type) {
  let badge;
  if (type === 'Apache') {
    return badge = licenseArray.Apache;
  } else if (type === 'GNU') {
    return badge = licenseArray.GNU;
  } else if (type === ' ISC') {
    return badge = licenseArray.ISC;
  } else if (type === 'MIT') {
    return badge = licenseArray.MIT;
  } else if (type === 'Mozilla') {
    return badge = licenseArray.Mozilla;
  } else if (type === 'Open') {
    return badge = licenseArray.Open;
  } else if (type === 'None') {
    return badge = '';
  } else return console.log('No license match!');
};

// Start of generate readme function
const generateReadme = (data) =>

`# <${data.title}>

${determineBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contribute](#contribute)
- [Tests](#Tests)

## Installation

${data.install}

## Usage

${data.usage}

![alt text](/assets/images/${data.images})

## Credits

${data.credits}

## License

This application is covered under the ${data.license} license.

## Features

${data.features}

## Contribute

${data.contribute}

## Tests

${data.tests}

## Questions

Github: [Github Profile](https://github.com/${data.githubusername})

For other questions contact me by [email](mailto:${data.email}).`;
// End of generate readme function

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter a project title:',
      name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a project description:',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Enter instructions for installation if any:',
        name: 'install',
      },
      {
        type: 'input',
        message: 'Provide instructions and examples for use:',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Enter image file name assets/images/"example.png"',
        name: 'images',
      },
      {
        type: 'input',
        message: 'Credits. Who are your collaborators if any, other software you used:',
        name: 'credits',
      },
      {
        type: 'list',
        message: 'Choose license.',
        name: 'license',
        choices: [
            'Apache',
            'GNU', 
            'ISC',
            'MIT',
            'Mozilla',
            'Open',
            'None'
        ],
      },
      {
        type: 'input',
        message: 'Enter the features of your project:',
        name: 'features',
      },
      {
        type: 'input',
        message: 'How others can contribute:',
        name: 'contribute',
      },
      {
        type: 'input',
        message: 'Enter tests if any included:',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'githubusername',
      },
      {
        type: 'input',
        message: 'Enter your contact email:',
        name: 'email',
      },

  ])
  .then((data) => {
    console.log(data);
    const readmeData = generateReadme(data);

// Write file 
    fs.writeFile("readme_example.md", readmeData, (err) => 
            err ? console.error(err) : console.log("Successfully created readme!")
    );
  });