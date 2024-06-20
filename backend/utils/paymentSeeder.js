const db = require("./db");

const payments = [];
const statuses = ["BELUM TERBAYAR", "TERBAYAR"];
const pricePerItem = 1000;

db.query("SELECT id, quantity FROM pakets", (err, results) => {
     if (err) throw err;

     const paketQuantities = {};
     results.forEach((paket) => {
          paketQuantities[paket.id] = paket.quantity;
     });

     for (let i = 0; i < 20; i++) {
          const paket_id = Math.floor(Math.random() * 20) + 1;
          const user_id = Math.floor(Math.random() * 5) + 1;
          const quantity = paketQuantities[paket_id] || 0;
          const price = quantity * pricePerItem;

          payments.push({
               paket_id,
               user_id,
               metode: "CASH ON DELIVERY",
               status: statuses[Math.floor(Math.random() * statuses.length)],
               price,
          });
     }

     const sql = `INSERT INTO payments (user_id, paket_id, metode, status, price) VALUES ?`;
     const values = payments.map((payment) => [
          payment.user_id,
          payment.paket_id,
          payment.metode,
          payment.status,
          payment.price,
     ]);

     db.query(sql, [values], (err, result) => {
          if (err) throw err;
          console.log(`Number of records inserted ${result.affectedRows}`);
          db.end();
     });
});
