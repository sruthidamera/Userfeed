The Project has two folders : user-feed and server
user-feed : Front-end using reactJS
server : Backend using nodeJs,Express,Mysql which connects to mySql Server


Table of contents
1.Software Requirements
2.Dependencies
3.Installations
4.mysql set-up
5.establishing connection between mysql and express nodejs
6.running of code

1)Software Requirements
To run the application, the following are required:
MySQL Community - Download MySQL installer
Node.js - Download Node.js

2)Dependencies
For setting up dependencies in the frontend React

3)Installations
In the terminal, change directory to user-feed folder
Run npm install
For setting up dependencies in the backend (Axios, ...)
In the terminal, change directory to Server folder
Run npm install
For setting up dependencies in the backend (Express, nodemon, MySql2,body-parser,cors ...)


4)mysql set-up
Create table and database in mysql commands:

Create database userfeeddatabase 
CREATE SCHEMA `userfeeddatabase` ;

Create Table userfeed in userfeeddatabase database:
CREATE TABLE `userfeeddatabase`.`userfeed` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `likes` INT NOT NULL,
  `comments` INT NULL,
  `views` INT NOT NULL,
  `shares` INT NOT NULL,
  PRIMARY KEY (`id`));
  
  insert 0 to all the values of the tables except id where id=1
  insert into userfeeddatabase.userfeed values(1,0,0,0,0);

5)establishing connection between mysql and express nodejs

To load the Table in database userfeeddatabase
const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
  database:'userfeeddatabase',
  });
set username to the username of your MySQL.
set password to the password of your MySQL .
set database to the name of your database in the MySQL .


6)running of code
Starting the Express Server
Note: Express server must be run before running the React application

Open a new terminal, and then change the directory to server.
Run nodemon devstart to start the Express server.
Starting the React Application
Open another terminal, and then change the directory to user-feed.
Run npm start to start the React application.
















