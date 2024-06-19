const connection = require("./db");

// Query untuk menghapus tabel pakets jika sudah ada
const dropPaketsTableQuery = `
DROP TABLE IF EXISTS pakets
`;

// Query untuk menghapus tabel users jika sudah ada
const dropUsersTableQuery = `
DROP TABLE IF EXISTS users
`;

// Query untuk membuat tabel users baru
const createUsersTableQuery = `
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('USER', 'ADMIN') DEFAULT 'USER',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)
`;

// Query untuk membuat tabel pakets baru
const createPaketsTableQuery = `
CREATE TABLE pakets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  name VARCHAR(255) NOT NULL,
  status VARCHAR(50),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
)
`;

// Menjalankan query untuk menghapus tabel pakets terlebih dahulu
connection.query(dropPaketsTableQuery, (err) => {
     if (err) {
          console.error("Error dropping pakets table:", err);
          connection.end();
          return;
     }
     console.log("Table pakets dropped successfully");

     // Setelah tabel pakets dihapus, lanjutkan dengan menghapus tabel users
     connection.query(dropUsersTableQuery, (err) => {
          if (err) {
               console.error("Error dropping users table:", err);
               connection.end();
               return;
          }
          console.log("Table users dropped successfully");

          // Setelah kedua tabel dihapus, buat tabel users baru
          connection.query(createUsersTableQuery, (err) => {
               if (err) {
                    console.error("Error creating users table:", err);
                    connection.end();
                    return;
               }
               console.log("Table users created successfully");

               // Kemudian buat tabel pakets baru dengan kunci asing yang benar
               connection.query(createPaketsTableQuery, (err) => {
                    if (err) {
                         console.error("Error creating pakets table:", err);
                         connection.end();
                         return;
                    }
                    console.log("Table pakets created successfully");

                    // Tutup koneksi setelah selesai
                    connection.end();
               });
          });
     });
});
