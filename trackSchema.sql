DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL
  , title VARCHAR(30)
  , PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT AUTO_INCREMENT NOT NULL
  , title VARCHAR(30)
  , salary DECIMAL(10,2)
  , department_id INT
  , PRIMARY KEY(id)
);

CREATE TABLE employee (
  id INT
  , first_name VARCHAR(30)
  , last_name VARCHAR(30)
  , role_id INT
  , manager_id INT
  , PRIMARY KEY (id)
);