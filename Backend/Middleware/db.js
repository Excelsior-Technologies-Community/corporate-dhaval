const mysql = require("mysql2")

const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"dhaval893",
    database:"swiftfix"
})

db.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("db is connected")
    }
})

module.exports=db