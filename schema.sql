
DROP DATABASE IF EXISTS employee_tracker_db;
CREATE database employee_tracker_db;

 
USE employee_tracker_db;


CREATE TABLE department_table (
  ID INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (ID)
);


CREATE TABLE role_table (
  ID INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary INT NOT NULL,
  dep_ID INT NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (dep_ID) REFERENCES department_table (ID)
);

 
CREATE TABLE employee_table (
  ID INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_ID INT NOT NULL,
  mng_ID INT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (role_ID) REFERENCES role_table (ID),
  FOREIGN KEY (mng_ID) REFERENCES employee_table (ID)
);