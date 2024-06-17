let mysql = require("mysql");
require("dotenv/config");

let connection = mysql.createConnection({
     host: process.env.DB_HOST,
     user: process.env.DB_USERNAME,
     password: "",
     database: process.env.DB_NAME,
});

connection.connect(function (err) {
     if (err) throw err;
     console.log("Database Connected ");
});

module.exports = connection;
