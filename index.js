require("dotenv").config()
const express = require("express")//import
const mysql = require("mysql")

// const path = require()

const index= express()
//create connection
var db = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password:process.env.DBPASS,
    database: process.env.DBNAME

})

db.connect((error) => {
    if (error) throw error;
    console.log("mysql connected...   ")
})

index.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
index.get('./',(req,res)=>{
    res.sendFile('reg.html')
})
})
/*index.get('/martin',(req,res)=>{
    res.write('<h1 style="color:red">dommy</h1>');
})*/

// var sql ="create table register (firstname varchar(255),)
// db.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("table created..");
// });


index.listen(3000)