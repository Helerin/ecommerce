require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Api do e-commerce rodando"));

app.listen(3001, () => console.log("Servidor backend na porta 3001"));

