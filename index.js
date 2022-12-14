const generateHtml = require("./src/html-template");
const htmlArray = [];
const teamMemberChoice = [
  {
    type: "list",
    message: "Would you like to add a new team member?",
    name: "member",
    choices: ["Engineer", "Intern", "Manager", "No thanks, generate my team!"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of your engineer?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the id of your engineer?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email of your engineer?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the github of your engineer?",
  },
];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of your manager?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the id of your manager?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email of your manager?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the office number of your manager?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of your intern?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the id of your intern?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email of your intern?",
  },
  {
    type: "input",
    name: "school",
    message: "What is the school of your intern?",
  },
];

// TODO: Create a function to write HTML
var fs = require("fs");
var inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const createEngineer = require("./src/engineer");
const Manager = require("./lib/manager");
const createManager = require("./src/manager");
const Intern = require("./lib/intern");
const createIntern = require("./src/intern");

function writeToFile() {
  console.log("THIS IS MY TEAM>>>>>>>", htmlArray);
  fs.writeFile("./dist/index.html", generateHtml(htmlArray), (err) => {
    err ? console.log(err) : console.log("Generated successfully");
    // file written successfully
  });
}

function promptEngineer() {
  inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
    const engineer = new Engineer(
      engineerAnswers.name,
      engineerAnswers.id,
      engineerAnswers.email,
      engineerAnswers.github
    );
    const html = `
        <div class="card">
        <div class="card-head">
          <div>${engineer.getName()}</div>
          <div>${engineer.getRole()}</div>
        </div>
        <div class="card-body">
          <div>ID: ${engineer.getId()}</div>
          <div>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></div>
          <div>GitHub Account: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></div>
        </div>
      </div>
        `;
    htmlArray.push(html);
    init();
  });
}
function promptManager() {
  inquirer.prompt(managerQuestions).then((managerAnswers) => {
    const manager = new Manager(
      managerAnswers.name,
      managerAnswers.id,
      managerAnswers.email,
      managerAnswers.officeNumber
    );
    const html = `
        <div class="card">
        <div class="card-head">
          <div>${manager.getName()}</div>
          <div>${manager.getRole()}</div>
        </div>
        <div class="card-body">
          <div>ID: ${manager.getId()}</div>
          <div>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></div>
          <div>Office number: ${manager.getOfficeNumber()}</div>
        </div>
      </div>
        `;
    htmlArray.push(html);

    init();
  });
}

function promptIntern() {
  inquirer.prompt(internQuestions).then((internAnswers) => {
    const intern = new Intern(
      internAnswers.name,
      internAnswers.id,
      internAnswers.email,
      internAnswers.school
    );
    const html = `
 <div class="card">
<div class="card-head">
<div>${intern.getName()}</div>
 <div>${intern.getRole()}</div>
</div>
<div class="card-body">
 <div>ID: ${intern.getId()}</div>
<div>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></div>
<div>School: ${intern.getSchool()}</div>
</div>
</div>
`;
    htmlArray.push(html);

    init();
  });
}
// TODO: Create a function to initialize app
function init() {
  console.log("hello");

  inquirer.prompt(teamMemberChoice).then((teamMemberAnswers) => {
    if (teamMemberAnswers.member === "Engineer") promptEngineer();

    if (teamMemberAnswers.member === "Manager") promptManager();

    if (teamMemberAnswers.member === "Intern") promptIntern();

    if (teamMemberAnswers.member === "No thanks, generate my team!")
      writeToFile(); //html arry, use join method, fs.writeFile
  });

  // .catch((error) => {
  //   if (error.isTtyError) {
  //     // Prompt couldn't be rendered in the current environment
  //   } else {
  //     // Something else went wrong
  //   }
  // });
}
// Function call to initialize app
init();
