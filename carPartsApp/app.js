const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./config/db");

dotenv.config();

db.connect();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/parts", require("./routes/partRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
