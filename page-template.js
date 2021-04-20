// Creating HTML string from a function
const generatePage = (data) => {
  let link = "";

  switch (data.license) {
    case "Apache 2.0":
      link =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost Software Licensee 1.0":
      link =
        "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "BSD 3-Clause License":
      link =
        "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;

    case "ISC License (ISC)":
      link =
        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;

    case "The MIT License":
      link =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;

    case "Mozilla Public License 2.0":
      link =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
  }

  return `# ${data.title}

## Description 

 ${data.description}

## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${data.installation}

## Usage 

${data.usage}

## Credits

${data.credits}

## License

${link}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions 

email: ${data.email}
github profile: https://github.com/${data.github}
`;
};

// Use to make functions available to other files
module.exports = generatePage;
