import express from "express";
import cors from "cors";
import productsRouter from "./routes/products.js";
import { serverConfig } from "./config.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/products", productsRouter);

const PORT = serverConfig.port;
app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
