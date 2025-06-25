const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./src/config/db");

const authRoutes = require("./src/routes/auth.routes");
const restaurantRoutes = require("./src/routes/restaurant.routes");
const menuRoutes = require("./src/routes/menu.routes");
const orderRoutes = require("./src/routes/order.routes");
const reviewRoutes = require("./src/routes/review.routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",  // ✅ your React frontend
    credentials: true                 // ✅ allow cookies/tokens
  })
);

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);
app.use("/review", reviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
