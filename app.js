//chama o espress
var express = require("express")
var app = express()
//cria as rotas 
app.get("/",(req, res) => {
     res.sendFile(__dirname + "/html/index.html")
})

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/html/cadastro.html")
})

app.get("/agendamento",(req, res) => {
    res.sendFile(__dirname + "/html/agendamento.html")
})

//ligar o servidor 
app.listen(3000, () =>{
    console.log("servidor ligado na porta 3000")
})