const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'passwordyour',
    database: 'employee_db'
});

const init = () => {
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
        switch (answers.initQuestions) {
            case "Add departments":
                return createDept();

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
};

const createDept = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the department name?",
            name: "department"
        }
    ]).then((deptanswrs) => {
        let queryString = "INSERT INTO department SET ?";
        const query = connection.query(queryString, deptanswrs.department, (err, result) => {
            if (err) throw err;
            console.log("Modified...", result.affectedRows);
        })
    })
};

















connection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    init();
});