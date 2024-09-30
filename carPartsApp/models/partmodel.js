const db = require("../config/db");

const Part = {
  findAll: () => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM parts";
      db.query(sql, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
};

module.exports = Part;
