import express from "express";
import cors from "cors";
import factorialRoutes from "./routes/factorialRoutes.js"

const app = express();

app.use(cors())
app.use(express.json())

app.use("/api/factorial", factorialRoutes)

app.get("/", (_req, res) => {
  res.send("Server is running");
});

export default app;