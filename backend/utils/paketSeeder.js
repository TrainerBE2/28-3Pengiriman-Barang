const db = require("./db");
const { faker } = require("@faker-js/faker/locale/id_ID");

const pakets = [];
const statuses = ["MENUJU ALAMAT", "TRANSIT", "SAMPAI", "DIKEMAS"];

for (let i = 0; i < 20; i++) {
     pakets.push({
          user_id: Math.floor(Math.random() * 5) + 1,
          name: faker.commerce.product(),
          quantity: Math.floor(Math.random() * 10) + 1,
          status: statuses[Math.floor(Math.random() * statuses.length)],
     });
}

const sql = `INSERT INTO pakets (user_id, name ,quantity, status) VALUES ?`;
const values = pakets.map((paket) => [
     paket.user_id,
     paket.name,
     paket.quantity,
     paket.status,
]);

db.query(sql, [values], (err, result) => {
     if (err) throw err;
     console.log(`Number of records inserted ${result.affectedRows}`);
     db.end();
});
