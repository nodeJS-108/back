const db = require('../config/db');

const Order = {
  create: (orderData) => {
    const { userId, partId } = orderData;
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO orders (user_id, part_id) VALUES (?, ?)';
      db.query(sql, [userId, partId], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
};

module.exports = Order;