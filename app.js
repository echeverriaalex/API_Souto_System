const express = require("express");
const router = require("./router");
const app = express();
const port = 4000

app.use('/', router);

/*
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('Souto_System', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

async function test(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }


}

test()

const User = sequelize.define('User', {
    firstName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lasName:{
        type: DataTypes.STRING
    }
})

console.log(User === sequelize.model.User);

const jane = User.build({name: 'Jane'});
console.log(jane instanceof User);
console.log(jane.name);

//await jane.save();

const jane2 =  User.create({name: "Jane2"}).then();
*/

/*
npm i mysql2 # MySQL

*/

app.listen(port, () =>{
    console.log(`API Rest Souto System in port ${port}`);
})