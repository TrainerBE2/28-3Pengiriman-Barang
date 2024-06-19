const db = require("../utils/db");

exports.getAllPaket = (req, res) => {
     db.query("SELECT * FROM pakets", (err, rows) => {
          if (err) {
               res.status(500).send(err);
          } else {
               res.json({
                    data: rows,
               });
          }
     });
};
