const User = require('./User')

const create = (req,res) =>{
    
    const user = findOne(req.body.email)
    user.then((user)=>{
        
        if(req.body.email == user.email){
             console.log("Email ja cadastrado");
             res.sendFile(__dirname + "/layouts/register.html")
             return
        }
    }).catch(()=>{
        let novoUser = User.create({
            email: req.body.email,
            senha: req.body.senha
        }).then(()=>{
                 console.log("Cadastrado")
        }).catch(()=>{
            console.log(" Não Cadastrado")
        })
    })
    
}


const findOne = (req) => User.findOne({where: {email: req}})
.then((user)=>{
    return user
}).catch(()=>{

})



//LOGIN

const login = (req, res) => {
    const user = findOne(req.body.email)
    user.then((user)=>{
        
        if(req.body.email == user.email && req.body.senha == user.senha){
            console.log("logado");
            res.send("Logado")
            
       } 
       if(req.body.senha != user.senha){
            console.log("login invalido");
            res.send("login invalido")
       }
    }).catch(()=>{
        
    })

}








module.exports = {create, findOne, login};

