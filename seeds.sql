USE employee_trackerDB;

INSERT INTO department (department)
VALUES ("Merchandising");

INSERT INTO department (department)
VALUES ("Customer Service");

INSERT INTO department (department)
VALUES ("Inventory");

INSERT INTO roles (title, salary, dep_ID)
VALUES ("Visual Merchandiser", 40000, 1);

INSERT INTO roles (title, salary, dep_ID)
VALUES ("Customer Service Representative", 25000, 2);

INSERT INTO roles (title, salary, dep_ID)
VALUES ("Inventory Control Specialist", 50000, 3);

INSERT INTO employee (first_name, last_name, role_ID, mng_ID)
VALUES ("Elia", "Carrasco", 1, NULL);

INSERT INTO employee (first_name, last_name, role_ID, mng_ID)
VALUES ("Claudia", "Rodriguez", 1, 1);

INSERT INTO employee (first_name, last_name, role_ID, mng_ID)
VALUES ("Jesus", "Facundo", 3, NULL);