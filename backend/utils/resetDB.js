const db = require("./db");

db.query("DROP DATABASE IF EXISTS pengiriman_barang", (err) => {
     if (err) {
          console.error("Error dropping database:", err);
          db.end();
          return;
     }
     console.log(`Database pengiriman_barang dropped successfully`);
     db.query(`CREATE DATABASE pengiriman_barang`, (err) => {
          if (err) {
               console.error("Error creating database:", err);
               db.end();
               return;
          }
          console.log(`Database pengiriman_barang created successfully`);
          db.end();
     });
});
