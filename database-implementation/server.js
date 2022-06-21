// requiring packages: 
const express = require("express")
const mysql = require("mysql")
const server = express()
const bodyparser = require("bodyparser")

// create application
// create connection

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    // database
    database: 'parkville'
})

db.connect((err)=>{
   if(err){
       throw err;
   }
   console.log("connected to mysql successfully")
})

// creating a database
function createDatabase(){
    let sql = "CREATE DATABASE parkville"
    db.query(sql,(err,result)=>{
        if(err)throw err
        else result
        console.log(result);
        console.log("Database has been created")
    })
}
// createdDatabase()

// creating functions to use to integrate into the database

// create a role table
function createRoleTable(){
    let sql = 'CREATE TABLE Role(
        id INT AUTO_INCREMENT,
        name VARCHAR(100),
        PRIMARY KEY (id)
    )';
    db.query(sql,(err, result)=>{
        if(err) throw err
        console.log("Role table has been created");
        console.log(result);
    })

}
// department
function createTables(){
    createTables()
}

server.listen("5500",()=>{
    console.log("server has started on port 5500")
})