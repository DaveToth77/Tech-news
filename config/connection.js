// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create a connection to our database, pass in your MySQL info for username/pass
const sequelize = new Sequelize('just_tech_news_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;