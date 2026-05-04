const express = require("express");
const pool = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

pool.query("select 1")
  .then(() => console.log("Banco conectado"))
  .catch(err => console.error("Erro ao conectar no banco", err));

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
});

app.get("/db-health", async (req, res) => {
  try {
    await pool.query("select 1");
    res.json({ db: "ok" });
  } catch (err) {
    res.status(500).json({ db: "error" });
  }
});