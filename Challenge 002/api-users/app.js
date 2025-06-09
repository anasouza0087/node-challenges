const express = require("express");

const app = express();
const PORT = 3000;

// Middleware para permitir receber JSON no corpo das requisições
app.use(express.json());

// Rota de teste
app.get("/", (req, res) => {
  res.send("Servidor rodando com Express! 🚀");
});

app.get("/home", (req, res) => {
  res.send("Bem vindo! 🚀");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
