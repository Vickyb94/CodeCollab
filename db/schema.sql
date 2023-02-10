
DROP DATABASE IF EXISTS db_codeCollab;
CREATE DATABASE db_codeCollab;
USE db_codeCollab;

CREATE TABLE user (
  userId INT NOT NULL,
  userEmail VARCHAR(30) NOT NULL,
  userPassword VARCHAR(30) NOT NULL,
  PRIMARY KEY (userId)
);