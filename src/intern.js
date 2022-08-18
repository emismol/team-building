const inquirer = require("inquirer")
const Intern = require("../lib/intern")

const questions = [
    {
        type:"input",
        name:"name",
        message:"What is the name of your intern?"
    },
    {
        type:"input",
        name:"id",
        message:"What is the id of your intern?"
    },
    {
        type:"input",
        name:"email",
        message:"What is the email of your intern?"
    },
    {
        type:"input",
        name:"school",
        message:"What is the school of your intern?"
    },
]

    async function createIntern(){
    const answers = await inquirer.prompt(questions)
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)

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
    `
    return html
    }

module.exports=createIntern