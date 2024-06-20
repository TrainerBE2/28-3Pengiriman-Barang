const db = require("../utils/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getAllUser = (req, res) => {
     const sql = `SELECT * FROM users WHERE role = 'USER'`;
     db.query(sql, (err, users) => {
          if (err) throw err.message;
          res.json({
               users,
          });
     });
};

exports.loginUser = (req, res) => {
     const secretkey = "SECRETKEY";
     const { email, password } = req.body;
     db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
          if (err) throw err;
          if (result === 0) {
               res.json({ message: "Invalid email or password" });
          }
          const user = result[0];
          bcrypt.compare(password, user.password, (err, isMatch) => {
               if (err) throw err;
               if (!isMatch) {
                    return res
                         .status(401)
                         .json({ error: "Invalid email or password" });
               }
               const token = jwt.sign(
                    {
                         id: user.id,
                         email: user.email,
                         role: user.role,
                    },
                    secretkey,
                    { expiresIn: "1h" }
               );
               res.json({
                    message: "Login Succesfully",
                    user,
                    token,
               });
          });
     });
};

exports.getUserById = (req, res) => {
     var id = req.params.id;
     db.query(`SELECT * FROM users WHERE id = ${id}`, (err, result) => {
          if (err) throw err;
          if (result.length === 0) {
               res.status(404).json({ data: "User not found" });
          }
          const user = result[0];
          res.json({
               user,
          });
     });
};

exports.profileUser = (req, res) => {
     var id = req.params.id;
     db.query(`SELECT * FROM users WHERE id = ${id}`, (err, result) => {
          if (err) throw err;
          if (result.length === 0) {
               res.status(404).json({ data: "User not found" });
          }
          const user = result[0];
          res.json({
               profile: {
                    user: user.name,
                    email: user.email,
                    role: user.role,
               },
          });
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

exports.getAllPaketByUserId = (req, res) => {
     const userId = req.params.id;
     const query = `
     SELECT 
         u.id AS user_id, u.name AS user_name, u.email, u.role,
         p.id AS paket_id, p.name AS paket_name, p.quantity, p.status AS paket_status,
         pay.id AS payment_id, pay.metode AS payment_metode, pay.status AS payment_status, pay.price
     FROM users u
     JOIN pakets p ON u.id = p.user_id
     LEFT JOIN payments pay ON p.id = pay.paket_id
     WHERE u.id = ?;
 `;

     db.query(query, [userId], (err, results) => {
          if (err) {
               console.error("Error executing query:", err);
               return res.status(500).json({ error: "Database query error" });
          }

          if (results.length === 0) {
               return res
                    .status(404)
                    .json({ message: "Tidak ada paket untuk user ini" });
          }

          // Grouping packages and payments by user info
          const userInfo = {
               id: results[0].user_id,
               name: results[0].user_name,
               email: results[0].email,
               role: results[0].role,
               Paket: results.map((result) => ({
                    id: result.paket_id,
                    name: result.paket_name,
                    quantity: result.quantity,
                    status: result.paket_status,
                    payment: {
                         payment_id: result.payment_id,
                         metode: result.payment_metode,
                         status: result.payment_status,
                         price: result.price,
                    },
               })),
          };

          res.json(userInfo);
     });
};

exports.getPaketDetailByUserId = (req, res) => {
     const userId = req.params.userId;
     const paketId = req.params.paketId;

     const query = `
         SELECT 
             p.id AS paket_id, p.user_id, p.name AS paket_name, p.quantity, p.status AS paket_status,
             pay.id AS payment_id, pay.metode AS payment_metode, pay.status AS payment_status, pay.price
         FROM pakets p
         LEFT JOIN payments pay ON p.id = pay.paket_id
         WHERE p.user_id = ? AND p.id = ?;
     `;

     db.query(query, [userId, paketId], (err, results) => {
          if (err) {
               console.error("Error executing query:", err);
               return res.status(500).json({ error: "Database query error" });
          }

          if (results.length === 0) {
               return res.status(404).json({
                    message: "Tidak ada pesanan untuk user ini",
               });
          }

          // Format the result
          const paketDetail = {
               id: results[0].paket_id,
               name: results[0].paket_name,
               quantity: results[0].quantity,
               status: results[0].paket_status,
               payment: {
                    payment_id: results[0].payment_id,
                    metode: results[0].payment_metode,
                    status: results[0].payment_status,
                    amount: results[0].price,
               },
          };

          res.json(paketDetail);
     });
};
