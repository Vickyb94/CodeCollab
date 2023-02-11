
DROP DATABASE IF EXISTS db_codeCollab;
CREATE DATABASE db_codeCollab;
USE db_codeCollab;

CREATE TABLE user (
  userId INT NOT NULL AUTO_INCREMENT,
  userName VARCHAR(30) NOT NULL,
  userEmail VARCHAR(30) NOT NULL,
  userPassword VARCHAR(30) NOT NULL,
  PRIMARY KEY (userId)  ON DELETE CASCADE
);

CREATE TABLE languages (
  userID INT NOT NULL,
  JavaScript INT,
  Python INT,
  Java INT,
  Swift INT,
  FOREIGN KEY (userId) REFERENCES user(userId)
);

CREATE TABLE posts (
 postId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 content VARCHAR(100) NOT NULL,
 imageLink VARCHAR(150),
 postUser_id INT,
 FOREIGN KEY (postUser_id) REFERENCES user(userId)
);
