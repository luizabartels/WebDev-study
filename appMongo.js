const mongoose = require('mongoose')

//se colocar outra barra e ditigar nomear um banco qualquer
//, o Mongo irá criá-lo caso não exista ou irá adentrá-lo caso exista.

mongoose.connect('mongodb://localhost/primeiroBanco', {useUnifiedTopology: true, useNewUrlParser: true,
}).then(() => {
    console.log("MongoDB conectado")
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao mongoDB: "+err)
}) 

//Model - Users

const UserSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: false
    }
})

const UserModel = mongoose.model('users', UserSchema)

new UserModel({
    nome: "Luiza",
    sobrenome : "Bartels",
    email: "email@email.com",
    idade: 27
}).save().then(() => {
    console.log("Usuário criado com sucesso!")
}).catch((err) => {
    console.log("Houve um erro ao registrar: " + err)
})