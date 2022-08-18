const inquirer = require("inquirer")
const Engineer = require("../lib/engineer")

const questions = [
    {
        type:"input",
        name:"name",
        message:"What is the name of your engineer?"
    },
    {
        type:"input",
        name:"id",
        message:"What is the id of your engineer?"
    },
    {
        type:"input",
        name:"email",
        message:"What is the email of your engineer?"
    },
    {
        type:"input",
        name:"github",
        message:"What is the github of your engineer?"
    },
]

async function createEngineer(){
    const answers = await inquirer.prompt(questions)
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    const html = `
    <div class="card">
    <div class="card-head">
      <div>${engineer.getName()}</div>
      <div>${engineer.getRole()}</div>
    </div>
    <div class="card-body">
      <div>ID: ${engineer.getId()}</div>
      <div>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></div>
      <div>Office number: ${engineer.getGithub()}</div>
    </div>
  </div>
    `
    return html
}

module.exports=createEngineer