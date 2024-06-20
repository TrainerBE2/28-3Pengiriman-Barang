const connection = require("./db");

// Query untuk menghapus tabel pakets jika sudah ada
const dropPaketsTableQuery = `
DROP TABLE IF EXISTS pakets
`;

// Query untuk menghapus tabel users jika sudah ada
const dropUsersTableQuery = `
DROP TABLE IF EXISTS users
`;

// Query untuk menghapus tabel payments jika sudah ada
const dropPaymentsTableQuery = `
DROP TABLE IF EXISTS payments
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
  quantity INT,
  status ENUM('TRANSIT', 'DIKEMAS', 'SAMPAI', 'MENUJU ALAMAT') DEFAULT 'DIKEMAS',
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)
`;

// Query untuk membuat tabel payments baru
const createPaymentsTableQuery = `
CREATE TABLE payments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  paket_id INT,
  user_id INT,
  metode ENUM('CASH ON DELIVERY', 'M-BANKING') DEFAULT 'CASH ON DELIVERY',
  status ENUM('TERBAYAR', 'BELUM TERBAYAR') DEFAULT 'BELUM TERBAYAR',
  price INT DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (paket_id) REFERENCES pakets(id) ON DELETE CASCADE ON UPDATE CASCADE
)
`;

// Menjalankan query untuk menghapus tabel payments terlebih dahulu
connection.query(dropPaymentsTableQuery, (err) => {
     if (err) {
          console.error("Error dropping payments table:", err);
          connection.end();
          return;
     }
     console.log("Table payments dropped successfully");

     // Menghapus tabel pakets
     connection.query(dropPaketsTableQuery, (err) => {
          if (err) {
               console.error("Error dropping pakets table:", err);
               connection.end();
               return;
          }
          console.log("Table pakets dropped successfully");

          // Menghapus tabel users
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
                              console.error(
                                   "Error creating pakets table:",
                                   err
                              );
                              connection.end();
                              return;
                         }
                         console.log("Table pakets created successfully");

                         // Terakhir, buat tabel payments baru dengan kunci asing yang benar
                         connection.query(createPaymentsTableQuery, (err) => {
                              if (err) {
                                   console.error(
                                        "Error creating payments table:",
                                        err
                                   );
                                   connection.end();
                                   return;
                              }
                              console.log(
                                   "Table payments created successfully"
                              );
                              connection.end();
                         });
                    });
               });
          });
     });
});
