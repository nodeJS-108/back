const Order = require("../models/orderModel");

exports.addOrder = async (req, res) => {
  const { partId } = req.body;
  const userId = req.user.id;
  const order = await Order.create({ userId, partId });
  res.status(201).json({ message: "Order created successfully", order });
};
