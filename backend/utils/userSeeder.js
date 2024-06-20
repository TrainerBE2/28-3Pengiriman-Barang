const db = require("./db");
const { faker } = require("@faker-js/faker/locale/id_ID");
const bcrypt = require("bcrypt");

const users = [];
(async () => {
     for (let i = 0; i < 5; i++) {
          const hashedPassword = await bcrypt.hash("123", 10);
          users.push({
               name: faker.person.fullName(),
               email: faker.internet.email(),
               password: hashedPassword,
          });
     }

     const sql = "INSERT INTO users (name, email, password) VALUES ?";
     const values = users.map((user) => [user.name, user.email, user.password]);

     db.query(sql, [values], (err, result) => {
          if (err) {
               console.error("Error inserting data:", err);
               return;
          }
          console.log(`Number of records inserted: ${result.affectedRows}`);
          // Tutup koneksi
          db.end();
     });
})();
