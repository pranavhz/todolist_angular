const sequelize = require("sequelize");

//database name:
const DBNAME = "tododb";
const USERNAME ="root";
const PASSWORD ="chinmay991";

const HOST ="127.0.0.1";
const PORT = 3306;

const Sequelize = new sequelize(DBNAME,USERNAME,PASSWORD,{
    port:PORT,
    host:HOST,
    dialect:"mysql",
});

module.exports = { Sequelize } ;
