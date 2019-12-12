var inquirer = require("inquirer");
var mysql = require("mysql");
var cTable = require("console.table");
var express = require("express");
const {selectRoles, selectEmloyee} = require("./lib/queries");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "efMAY17!",
    database: "employee_trackerDB"
});

connection.connect(function (err) {
    if (err) throw err;
    startAPP();
});


function startAPP() {
    console.log("EMPLOYEE TRACKER");
    return inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "View departments, roles, and/or employees",
                "Add departments, roles, and/or employees",
                "Update an exsisting employee role"
            ]
        }
    ]).then(function (answer) {
        switch (answer.action) {
            case "View departments, roles, and/or employees":
                view();
                break;
            case "Add departments, roles, and/or employees":
                add();
                break;
            case "Update an exsisting employee role":
                update();
                break;
        }
    });
};

function view() {
    return inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to view?",
            choices: [
                "Departments",
                "Roles",
                "Employees",
                "Return to the beginning"
            ]
        }
    ]).then(function (answer) {
        switch (answer.action) {
            case "Departments":
                viewDepartment();
                break;
            case "Roles":
                viewRoles();
                break;
            case "Employees":
                viewEmployees();
                break;
            case "Return to the beginning":
                startAPP();
                break;
        }
    });
};


function viewDepartment() {
    connection.query("SELECT * FROM department_table", function (err, result) {
        if (err) throw err;

        console.table(result);
        startAPP();
    });
}

function viewRoles() {
    connection.query(selectRoles() , 
    function (err, result) {
        if (err) throw err;

        console.table(result);
        startAPP();
    });
    };

function viewEmployees() {
    connection.query("SELECT * FROM employee_table", function (err, result) {
        if (err) throw err;

        console.table(result);
        startAPP();
    });
}

function add() {
    return inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to add?",
            choices: [
                "Department",
                "Role",
                "Employee",
                "Return to the beginning"
            ]
        }
    ]).then(function (answer) {
        switch (answer.action) {
            case "Department":
                addDepartment();
                break;
            case "Role":
                addRoles();
                break;
            case "Employee":
                addEmployees();
                break;
            case "Return to the beginning":
                startAPP();
                break;
        }
    });
};

function addDepartment() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the name of the department",
        },
    ]).then(function (answer) {
        connection.query("INSERT INTO department_table (department) VALUES ('" + answer.name + "');", function (err, result) {
            if (err) throw err;
            viewDepartment();
            startAPP()
        });
    });
};

function addRoles() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the title of this role",
        },
        {
            type: "number",
            name: "salary",
            message: "Enter the salary of this role",
        },
        {
            type: "number",
            name: "id",
            message: "Enter Department ID number",
        },
    ]).then(function (answers) {
        connection.query('INSERT INTO role_table (title, salary, dep_ID) VALUES ("' + answers.name + '",' + answers.salary + ',' + answers.id + ');' , function (err, result) {
            if (err) throw err;
            viewRoles();
            startAPP()
        });
    });
};

function addEmployees() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Employee's first name?",
        },
        {
            type: "input",
            name: "name",
            message: "What is the Employee's last name?",
        },
        {
            type: "input",
            name: "name",
            message: "What is the Employee's role ID?",
        },
        {
            type: "input",
            name: "name",
            message: "Does this employee have a manager ID (no - type 'null')?",
        },
    ]).then(function (answer) {
        connection.query("INSERT INTO department_table (department) VALUES ('" + answer.name + "');", function (err, result) {
            if (err) throw err;
            viewDepartment();
            startAPP()
        });
    });
};

function update() {
    return inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "Which employee would you like to update?",
            choices: [
            ]
        }
    ]).then(function (answer) {
        updateEmployee();
        startAPP()
    });
};

function endAPP() {
    console.log("Exiting Console")
};