const Sequelize = require('sequelize')
const sequelize = new Sequelize('users', 'root', 'pedro89982442', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() =>{
    console.log("Conectou ao Banco de dados");
}).catch(()=>{
    console.log("Não conectou ao Banco de dados");
})

module.exports = sequelize;