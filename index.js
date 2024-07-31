const express = require("express")
const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    console.log(process.env.API_KEY)
    res.send(process.env.API_KEY)
})

app.listen(8000,(req,res)=>{
    console.log("Server running")
})
