const db = require("../config/db");
const bcrypt = require("bcryptjs");

const User = {
  create: (userData) => {
    const { name, email, password } = userData;
    const hashedPassword = bcrypt.hashSync(password, 10);
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
      db.query(sql, [name, email, hashedPassword], (err, result) => {
        if (err) reject(err);
        resolve({ id: result.insertId, name, email });
      });
    });
  },

  findByEmail: (email) => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM users WHERE email = ?";
      db.query(sql, [email], (err, result) => {
        if (err) reject(err);
        resolve(result[0]);
      });
    });
  },
};

module.exports = User;
