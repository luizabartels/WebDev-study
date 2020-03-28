const express = require("express") //uma const não permite que sobre-escreva
const app = express() //cria um cópia inteira do express
const handlebars = require('express-handlebars')

/* CONFIG */

    /* TEMPLATE ENGINE WITH HANDLEBARS */

        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    
    /* DATABASE CONECTION WITH SEQUELIZE */

        const Sequelize = require('sequelize')
        const sequelize = new Sequelize('sistemaDeCadastro', 'root', 'Cb25032013', {host: "localhost", dialect: 'mysql'})

        sequelize.authenticate().then(function(){
            console.log("Conectado com sucesso!")
        }).catch(function(erro){
            console.log("Falha ao se conectar: " +erro)
        })


/* EXEMPLO DE COMO CONECTAR AO BD E CRIAR UMA TABELA COM SEQUELIZE

const Postagem = sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//Postagem.sync({force: true})

Postagem.create({
    titulo: "Um título",
    conteudo: "com conteúdo"
})
*/

/* ROTAS 
app.get("/", function(req, res)
{
    res.sendFile(__dirname + "/html/index.html") //__dirname é para apontar o local onde este código está salvo
});

app.get("/sobre", function(req, res)
{
    res.sendFile(__dirname + "/html/sobre.html") //__dirname é para apontar o local onde este código está salvo
});

app.get("/blog", function(req, res)
{
    res.send("Bem-vindo ao meu blog.")
});

app.get('/ola/:nome', function(req, res)
{
    res.send("Ola " + req.params.nome);
});
*/


app.listen(8081, function(){ console.log("Servidor rodando no servidor local.") })

