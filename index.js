const express = require("express") //uma const não permite que sobre-escreva
const app = express() //cria um cópia inteira do express
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

/* CONFIG */

    /* TEMPLATE ENGINE WITH HANDLEBARS */

        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    
    /* BODY PARSER */

        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
    
    /* DATABASE CONECTION WITH SEQUELIZE */

        

/* ROUTES */ 

    app.get("/cad", function(req, res)
    {
        res.render('formulario')
    })

    app.post("/add", function(req, res)
    {
        res.send("Texto: "+req.body.titulo+" Conteúdo: "+req.body.conteudo)
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

