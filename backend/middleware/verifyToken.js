const jwt = require("jsonwebtoken");

const SECRET_KEY = "SECRETKEY";

const authenticateToken = (req, res, next) => {
     const authHeader = req.headers["authorization"];
     const token = authHeader && authHeader.split(" ")[1];

     if (token == null) {
          return res.status(401).json({ message: "No token provided" });
     }

     jwt.verify(token, SECRET_KEY, (err, user) => {
          if (err) {
               return res.status(403).json({ message: "Invalid token" });
          }
          req.user = user;
          next();
     });
};

module.exports = authenticateToken;
