const express = require("express")
const app = express()
app.use(epxress.json())

app.get("/",(req,res)=>{
    console.log(process.env.API_KEY)
})
