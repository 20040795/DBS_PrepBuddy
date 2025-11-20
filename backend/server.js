import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import "./models/User.js"; // import models to sync them

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);

// ROOT
app.get("/", (req, res) => {
  res.send("DBS Interview Portal Backend Running ✔");
});

// DB Sync
sequelize
  .sync()
  .then(() => console.log("Database synced ✔"))
  .catch((err) => console.log("DB Sync Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
