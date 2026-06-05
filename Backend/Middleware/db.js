const mysql = require("mysql2")

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"dhaval893",
    database:"corporate"
})

db.connect((err)=>{
    if(err){
        console.log("db connection failed" , db)
    }else{
        console.log("db is connected")
    }

})
module.exports=db