const mysql = require("mysql");
const db = mysql.createConnection({
     host: "localhost",
     user: "root",
     password: "",
     database: "pengiriman_barang",
});

// Connect ke database
db.connect((err) => {
     if (err) console.error("Error connecting to database:", err);
     return;
});

module.exports = db;
