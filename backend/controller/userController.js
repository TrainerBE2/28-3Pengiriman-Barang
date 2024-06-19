const db = require("../utils/db");
const bcrypt = require("bcrypt");

exports.getAllUser = (req, res) => {
     const sql = `SELECT * FROM users WHERE role = 'USER'`;
     db.query(sql, (err, users) => {
          if (err) throw err.message;
          res.json({
               users,
          });
     });
};

exports.getUserById = (req, res) => {
     var id = req.params.id;
     db.query(`SELECT * FROM users WHERE id = ${id}`, (err, data) => {
          if (err) throw err;
          if (data.length === 0) {
               res.status(404).json({ data: "User not found" });
          } else {
               res.json({ data });
          }
     });
};

exports.registerUser = (req, res) => {
     const newUserData = req.body;
     const { name, email, password, role } = newUserData;

     if (!password) {
          return res.status(400).json({ message: "Password is required" });
     }

     bcrypt.hash(password, 10, (err, hashedPassword) => {
          if (err) {
               console.error("Error hashing password:", err);
               return res.status(500).send("Server error");
          }
          const insertUserQuery = `
              INSERT INTO users (name, email, password, role)
              VALUES (?, ?, ?, ?)
         `;
          const values = [name, email, hashedPassword, role || "USER"];

          db.query(insertUserQuery, values, (err, result) => {
               if (err) {
                    console.error("Error registering user:", err);
                    return res.status(400).send("Failed to register user");
               }
               const userId = result.insertId;
               const getUserQuery = `
                   SELECT * FROM users WHERE id = ?
              `;
               db.query(getUserQuery, [userId], (err, userData) => {
                    if (err) {
                         console.error("Error fetching user data:", err);
                         return res.status(500).send("Server error");
                    }

                    res.status(201).json({
                         message: "User registered successfully",
                         user: userData[0],
                    });
               });
          });
     });
};

exports.updateUserById = (req, res) => {
     const userId = req.params.id;
     const { name, email, password, role } = req.body;

     const getUserQuery = `SELECT * FROM users WHERE id = ?`;
     db.query(getUserQuery, [userId], (err, userData) => {
          if (err) {
               console.error("Error fetching user data:", err);
               return res.status(500).send("Server error");
          }

          if (userData.length === 0) {
               return res.status(404).json({ message: "User not found" });
          }

          let updateUserQuery = `
              UPDATE users
              SET name = ?, email = ?, role = ?
         `;
          let values = [name, email, role || "USER"];

          if (password) {
               bcrypt.hash(password, 10, (err, hashedPassword) => {
                    if (err) {
                         console.error("Error hashing password:", err);
                         return res.status(500).send("Server error");
                    }
                    updateUserQuery += ", password = ?";
                    values.push(hashedPassword);
                    executeUpdateQuery(updateUserQuery, values);
               });
          } else {
               executeUpdateQuery(updateUserQuery, values);
          }
     });
     function executeUpdateQuery(query, values) {
          query += " WHERE id = ?";
          values.push(userId);

          db.query(query, values, (err, result) => {
               if (err) {
                    console.error("Error updating user:", err);
                    return res.status(400).send("Failed to update user");
               }
               res.json({ message: "User updated successfully" });
          });
     }
};

exports.deleteUserbyId = (req, res) => {
     const userId = req.params.id;
     db.query(`DELETE FROM users WHERE id = ${userId}`, (err, result) => {
          if (err) throw err;
          res.json({
               message: `User id ${userId} Deleted`,
          });
     });
};
