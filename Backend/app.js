const express = require("express")
const app = express()
app.use(express.json())
const cors = require("cors")
app.use(cors())

const db = require("./Middleware/db")


app.listen(4000 , ()=>{
    console.log("server is running")
})