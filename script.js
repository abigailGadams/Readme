const inquirer = require("inquirer");
const generatePage = require("./page-template");
const fs = require("fs");

const questions = [
  {
    type: "input",
    message: "What is the title of your ReadMe?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your ReadMe?",
    name: "description",
  },
  {
    type: "input",
    message: "What packages would you like to install for this project?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is purpose of this application?",
    name: "usage",
  },
  {
    type: "input",
    message: "Who should be included in the credits for this ReadMe?",
    name: "credits",
  },
  {
    type: "list",
    message: "Which license would you like to include?",
    name: "license",
    choices: [
      "Apache 2.0",
      "Boost Software Licensee 1.0",
      "BSD 3-Clause License",
      "ISC License (ISC)",
      "The MIT License",
      "Mozilla Public License 2.0",
    ],
  },
  {
    type: "input",
    message: "Who are the contributors for this application?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What will be used to test this application?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "github",
  },
];

inquirer.prompt(questions).then(function (data) {
  const content = generatePage(data);
  fs.writeFileSync("./README.md", content);
});
