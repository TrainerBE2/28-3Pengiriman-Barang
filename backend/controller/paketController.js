const db = require("../utils/db");

exports.getAllPaket = (req, res) => {
     const sql = `SELECT * FROM pakets`;
     db.query(sql, (err, pakets) => {
          if (err) throw err;
          res.json({
               pakets,
          });
     });
};

exports.getPaketById = (req, res) => {
     const paketId = req.params.id;
     const sql = `SELECT * FROM pakets WHERE id = ${paketId}`;
     db.query(sql, (err, paket) => {
          if (err) throw err;
          if (paket.length === 0) {
               res.status(404).json({ message: "Paket not found" });
          } else {
               res.json({ paket });
          }
     });
};

exports.addPaket = (req, res) => {
     const newPaket = req.body;
     const sql = `INSERT INTO pakets (user_id, name,)`;
     db.query(sql, (err, result) => {});
};
