const mysql = require('mysql');
const inquirer = require('inquirer');
const { createPromptModule } = require('inquirer');

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
                "Update employee roles",
                "Quit"
            ]
        }
    ])
    .then(answers => {
        switch (answers.initQuestions) {
            case "Add departments": addDept();
                break;

            case "Add roles": addRole();
                break;

            case "Add employees": addEmp();
                break;

            case "View departments":
                break;

            case "View roles":
                break;

            case "View Employees":
                break;

            case "Update employee roles":
                break;

            case "Quit": connection.end();
                break;  

            default: console.log("Please make valid selection!");
                break;
        }
    });
};

const addDept = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the department name?",
            name: "department"
        }
    ]).then((deptanswrs) => {
        let queryString = `INSERT INTO department (title) VALUES ('${deptanswrs.department}')`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
                console.table(deptanswrs);
            init();
            });
        });
        
    };

const addRole = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the role's title?",
            name: "role"
        },
        {
            type: "input",
            message: "What is the role's salary?",
            name: "salary"
        },
        {
            type: "input",
            message: "What is the role's department id?",
            name: "dept_id"
        }
    ]).then((roleanswrs) => {
        let queryString = `INSERT INTO role (title, salary, department_id) VALUES ('${roleanswrs.role}', '${roleanswrs.salary}', '${roleanswrs.dept_id}')`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
                console.table(roleanswrs);
            init();
            });
        });
};

const addEmp = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's first name?",
            name: "first"
        },
        {
            type: "input",
            message: "What is the employee's last name?",
            name: "last"
        },
        {
            type: "input",
            message: "What is the employee's role id?",
            name: "role_id"
        },
        {
            type: "input",
            message: "What is the employee's manager id?",
            name: "manager_id"
        }
    ]).then((empanswrs) => {
        let queryString = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${empanswrs.first}', '${empanswrs.last}', '${empanswrs.role_id}', '${empanswrs.manager_id}')`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
                console.table(empanswrs);
            init();
            });
        });
};




connection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    init();
});