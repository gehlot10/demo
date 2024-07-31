const express = require("express")
const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(8000,(req,res)=>{
    console.log("Server running")
})
