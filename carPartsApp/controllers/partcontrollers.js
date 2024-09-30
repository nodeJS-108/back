const Part = require("../models/partModel");

exports.getParts = async (req, res) => {
  const parts = await Part.findAll();
  res.json(parts);
};
