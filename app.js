const express = require('express');
const app = express();
const path = require("path");
const User = require('./Model/User')
const bodyParser = require('body-parser')
const querys = require('./Model/querys');


app.use(express.static(path.join(__dirname,"public")))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
//app.use(express.urlencoded({extended:true}))

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/layouts/login.html")
})

app.get("/formRegister", (req,res) => {
    res.sendFile(__dirname + "/layouts/register.html")
})

app.post("/registro", (req,res) => {

    if(req.body.email == "" && req.body.senha == ""){
        console.log("Vazio")
        
    }else{
        querys.create(req);
    }
   
})

app.post("/login", (req,res) => {
    if(req.body.email == "" && req.body.senha == ""){
        res.sendFile(__dirname + "/layouts/login.html")
        
    }else{
        querys.login(req, res)
    }
    
    
})

app.listen(8070, () => {
    console.log("Servidor iniciado 8080: http://localhost:8070")
});