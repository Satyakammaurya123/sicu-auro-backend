import express from "express";
import { urlencoded, json } from "body-parser";
import cors from "cors";
import { config } from "dotenv";
import router from "./routes";
import connectDB from "./config/db";

const app = express();

// Load environment variables
config();

// Middleware
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

app.use("/api/v1/", router);

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, async () => {
  //db.connect
  await connectDB();
  console.log(`Server is running on port ${port}`);
});
