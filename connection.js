const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'passwordyour',
    database: 'employee_db'
});

inquirer.prompt([
    {
        type: "list",
        message: "What would you like to do?",
        name: "initQuestions",
        choices: [
            "Add departments",
            "Add roles",
            "Add employees",
            "View departments",
            "View roles",
            "View Employees",
            "Update employee roles"
        ]
    }
])
.then(answers => {
    switch(answers.initQuestions) {
        case "Add departments": 
        return departmentQuestions();

        case "Add roles":
            console.log("You selected Add roles! Whatdo you want to do next?");
            break;

        case "Add employees":
            console.log("You selected Add employees! What do you want to do next?");
            break;

        case "View departments":
            console.log("You selected View departments! What do you want to do next?");
            break;

        case "View roles":
            console.log("You selected View roles! What do you want to do next?");
            break;

        case "View Employees":
            console.log("You selected View Employees! What do you want to do next?");
            break;

        case "Update employee roles":
            console.log("You selected Update employee roles! What do you want to do next?");
            break;
        default:
            console.log("Please select a proper value!");
    }
});

const departmentQuestions = () => {inquirer.prompt([
    {
        type: 'input',
        message: "What is the department id?",
        name: "department_id"
    },
    {
        type: "input",
        message: "What is the department name?",
        name: "department_name"
    }
]).then(deptanswrs => {

})

};




connection.connect((err) => {
    if (err) throw err;

});