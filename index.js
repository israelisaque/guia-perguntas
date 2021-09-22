const express = require("express");
const app = express();

// Setando o EJS como View Engine 
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get("/:nome/:lang", (req, res) => {
  const nome = req.params.nome;
  const lang = req.params.lang;
  const exibirMsg = true;

  const produtos = [
    {nome: "Doritos", preco: 3.14},
    {nome: "Coca-cola", preco: 5},
    {nome: "Frango", preco: 10},
    {nome: "Carne", preco: 15},
    {nome: "Redbull", preco: 6},
    {nome: "Nescau", preco: 4}
  ]

  res.render("index", {
    nome: nome, 
    lang: lang,
    empresa: "Mobicare",
    funcionarios: 300,
    msg: exibirMsg,
    produtos: produtos
  });
})

app.listen(8080, () => {
  console.log("App rodando!");
})