import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import routes from "./routes/index";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

import "./config/database";
app.use("/api", routes.authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Сервер запущен на порте ${PORT} ...`);
});
