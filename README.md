# geek-blog ![License Badge](https://img.shields.io/badge/License-MIT%20License-blue)
A tech blog.

  
## Description
***

The **The geek blog** is a website that was created to provide a platform for tech enthusiasts to talk about their experience with new technologies. The user can create, edit, and delete blogs and comment on other blogs. 


## Table of Contents
***  

- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#How)
- [Tests](#Tests)
- [Questions](#Questions)
- [License](#license)

  
  
## Installation
***

  The installation can be completed by following these instructions:
    
1. To install a Node JS project, install [Node JS](https://nodejs.org/)       

2. Clone the GitHub repository to you local computer. Click on the following link.
 
  * Repository link : https://github.com/jcorozco81/geek-blog

3. Download and install [MySQL Community](https://dev.mysql.com/downloads/installer/).

4. Load the ``schema.sql`` to create the database and tables. At the root directory, open a mysql console and run the follwing command: ``SOURCE db/schema.sql``;


Additional packages required: 

1. To install additional packages, first initialize the repository with a ```package.json``` file by running ```npm init -y```.

2. [Sequelize package](https://www.npmjs.com/package/sequelize): To install sequelize run the following command: ```npm i sequelize```. This will add it to the list of dependencies. 

3. [mysql2 package](https://www.npmjs.com/package/mysql2): To install mysql2 run the following command: ```npm i mysql2```. This will add it to the list of dependencies.

4. [dotenv package](https://www.npmjs.com/package/dotenv): To install dotenv run the following command: ```npm i dotenv```. This will add it to the list of dependencies. 

5. [Express package](https://www.npmjs.com/package/express): To install express run the following command: ```npm i express```. This will add it to the list of dependencies.

6. [Nodemon package](https://www.npmjs.com/package/nodemon): To install nodemon run the following command: ```npm install -g nodemon```. This will add it to the list of dependencies.

7. [bcrypt package](https://www.npmjs.com/package/bcrypt): To install bcrypt run the following command: ```npm install bcrypt```. This will add it to the list of dependencies.

8. [connect-session-sequelize package](https://www.npmjs.com/package/connect-session-sequelize): To install connect-session-sequelize run the following command: ```npm install connect-session-sequelize```. This will add it to the list of dependencies.

9. [express-handlebars package](https://www.npmjs.com/package/express-handlebars): To install express-handlebars run the following command: ```npm install express-handlebars```. This will add it to the list of dependencies.

10. [express-session package](https://www.npmjs.com/package/express-session): To install express-session run the following command: ```npm i express-session```. This will add it to the list of dependencies.


## Usage
***
   
   1. Load the database by executing the following command ```npm run seed```.
   
   2. To execute the script, open a Git terminal on the main project folder (cloned folder) Run the following command: ```node server.js``` or ```npm start```.

Or

1. The deployed application can be found at this site: [the geek blog](https://quiet-chamber-80937.herokuapp.com/)
  


## How to Contribute
***

  Developers who are interested in contributing ideas for this application must agree to follow and comply with the Contributor Covetnant: Code of Conduct. The Contributor Covenant Code of Conduct can be found in the following address:

  [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md/)



## Tests
***
  No test cases were created for this project.

  Use Insomnia software or equivalent to test the application response. [Insomnia](https://insomnia.rest/download)



## Questions
***
  
  You can find additional projects on my github page: https://github.com/jcorozco81.

  If you have any questions please contact me at my E-Mail address: jcorozco@gmail.com.



## License
***

Copyright (c) 2021 jcorozco81.



This software/code is licensed under the MIT License; to use this software/code you must agree to follow and comply the License. A copy of the License can be found at:

https://www.mit.edu/~amini/LICENSE.md