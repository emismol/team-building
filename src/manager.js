const inquirer = require("inquirer")
const Manager = require("../lib/manager")

const questions = [
    {
        type:"input",
        name:"name",
        message:"What is the name of your manager?"
    },
    {
        type:"input",
        name:"id",
        message:"What is the id of your manager?"
    },
    {
        type:"input",
        name:"email",
        message:"What is the email of your manager?"
    },
    {
        type:"input",
        name:"officeNumber",
        message:"What is the office number of your manager?"
    },
]

async function createManager(){
    const answers = await inquirer.prompt(questions)
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
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
    `
    return html
}

module.exports=createManager