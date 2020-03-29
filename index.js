const express = require("express") //uma const não permite que sobre-escreva
const app = express() //cria um cópia inteira do express
const Handlebars = require('handlebars')
const handlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const insecureHandlebars = allowInsecurePrototypeAccess(Handlebars)
const bodyParser = require('body-parser')
const Post = require('./models/Post')

/* CONFIG */

    /* TEMPLATE ENGINE WITH HANDLEBARS */

        app.engine('handlebars', handlebars({defaultLayout: 'main',
        handlebars: allowInsecurePrototypeAccess(Handlebars)
    }))
        app.set('view engine', 'handlebars')
    
    /* BODY PARSER */

        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
    
    /* DATABASE CONECTION WITH SEQUELIZE */

        

/* ROUTES */ 

    app.get("/", function(req, res)
    {
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts})
        })
        
    })

    app.get("/cad", function(req, res)
    {
        res.render('formulario')
    })

    app.post("/add", function(req, res)
    {
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Houve um erro: " + erro)
        })
    })

    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.send("Postagem deletada com sucesso!")
        }).catch(function(erro){
            res.send("Esta postagem não existe!")
        })
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

