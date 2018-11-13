-- Drops the database if it exists currently --
DROP DATABASE IF EXISTS jobster_db;
-- Creates the "bamazon" database --
CREATE DATABASE jobster_db;

USE jobster_db;

Create table regi(
     id int AUTO_INCREMENT PRIMARY KEY,
     uname varchar(50) NOT NULL,
     email varchar(80) NOT NULL,
     passwd varchar(50) NOT NULL,
     fname varchar(30) NOT NULL,
     gender varchar(20) NOT NULL,
);