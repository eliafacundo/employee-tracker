USE employee_tracker_db;

INSERT INTO department_table (department_name)
VALUES ("Merchandising");

INSERT INTO department_table (department_name)
VALUES ("Customer Service");

INSERT INTO department_table (department_name)
VALUES ("Sales");

INSERT INTO department_table (department_name)
VALUES ("Engineering");


INSERT INTO role_table (title, salary, dep_ID)
VALUES ("Visual Merchandiser", 40000, 1);

INSERT INTO role_table (title, salary, dep_ID)
VALUES ("Customer Service Representative", 30000, 2);

INSERT INTO role_table (title, salary, dep_ID)
VALUES ("Sales Lead", 35000, 3);

INSERT INTO role_table (title, salary, dep_ID)
VALUES ("Software Engineer", 50000, 4);

INSERT INTO employee_table (first_name, last_name, role_ID, mng_ID)
VALUES ("Elia", "Carrasco", 1, NULL);

INSERT INTO employee_table (first_name, last_name, role_ID, mng_ID)
VALUES ("Claudia", "Rodriguez", 1, 1);

INSERT INTO employee_table (first_name, last_name, role_ID, mng_ID)
VALUES ("Jesus", "Facundo", 3, NULL);

INSERT INTO employee_table (first_name, last_name, role_ID, mng_ID)
VALUES ("Jon", "Smith", 2, 1);