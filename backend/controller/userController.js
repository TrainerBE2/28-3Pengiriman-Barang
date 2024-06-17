const db = require("../utils/db");

exports.getUsers = (req, res) => {
     db.query("SELECT * FROM users WHERE role = 'USER'", (err, rows) => {
          if (err) {
               res.status(500).send(err);
          } else {
               res.json({
                    users: rows,
               });
          }
     });
};

exports.createUser = (req, res) => {
     const { name, email, updateAt } = req.body;
     if (!name || !email) {
          return res.status(400).json({ message: "All fields are required" });
     }

     const insertUserQuery =
          "INSERT INTO users (name, email, updateAt) VALUES (?, ?, now())";
     db.query(insertUserQuery, [name, email, updateAt], (err, results) => {
          if (err) {
               return res
                    .status(500)
                    .json({ message: "Database error", error: err });
          }

          res.status(201).json({ message: "User Created" });
     });
};

exports.getUserById = (req, res) => {
     var id = req.params.id;
     db.query("SELECT * FROM users WHERE id = " + id, (err, result) => {
          if (err) {
               res.status(500).send(err);
          } else {
               res.json({
                    user: result,
               });
          }
     });
};

exports.updateUserById = (req, res) => {
     const id = req.params.id;
     db.query("SELECT * FROM users WHERE id = ?", id, (err, result) => {
          if (err) {
               return res.status(500).json({
                    message: "Database not Connected",
               });
          }
          if (result.length == 0) {
               return res.status(404).json({ message: "User not found" });
          }

          const { name, email } = req.body;
          if (!name && !email) {
               res.status(404).json({
                    message: "first name and last name is required",
               });
          } else {
               let query = "UPDATE users SET ";
               const values = [];
               if (name) {
                    query += "name = ? ";
                    values.push(name);
               }
               if (email) {
                    if (name) query += ", ";
                    query += "email = ? ";
                    values.push(email);
               }
               query += " WHERE id = ?";
               values.push(id);

               db.query(query, values, (err, result) => {
                    if (err) {
                         return res
                              .status(500)
                              .json({ message: "Database error", error: err });
                    } else {
                         res.json({
                              message: "User data updated successfully",
                         });
                    }
               });
          }
     });
};

exports.deleteUserById = (req, res) => {
     const id = req.params.id;
     db.query("SELECT * FROM users WHERE id = ?", id, (err, result) => {
          if (err) {
               return res.status(500).json({
                    message: err,
               });
          }
          if (result.length == 0) {
               return res.status(404).json({ message: "User not found" });
          }

          db.query("DELETE FROM users WHERE id = ?", id, (err, result) => {
               if (err) {
                    res.status(500).json({
                         message: err,
                    });
               } else {
                    res.json({
                         message: "Delete user sucessful",
                    });
               }
          });
     });
};
