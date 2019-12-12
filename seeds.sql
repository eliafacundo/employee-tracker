USE employee_manager_database;

INSERT INTO department_table (department_name)
VALUES ("Store Design");

INSERT INTO department_table (department_name)
VALUES ("Merchandising");

INSERT INTO department_table (department_name)
VALUES ("Fixture Design");


INSERT INTO role_table (title, salary, dep_ID)
VALUES ("Store Planner", 55000, 1);

INSERT INTO role_table (title, salary, dep_ID)
VALUES ("Merchandiser", 35000, 2);

INSERT INTO role_table (title, salary, dep_ID)
VALUES ("Fixture Designer", 45000, 3);


INSERT INTO employee_table (first_name, last_name, role_ID, mng_ID)
VALUES ("Elia", "Carraco", 1, NULL);

INSERT INTO employee_table (first_name, last_name, role_ID, mng_ID)
VALUES ("Claudia", "Rodriguez", 1, 1);

INSERT INTO employee_table (first_name, last_name, role_ID, mng_ID)
VALUES ("Jesus", "Facundo", 3, NULL);