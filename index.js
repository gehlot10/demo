const express = require("express")
var cors = require("cors")
const app = express()
const PORT = process.env.PORT || 5000;

const start = ()=>{

    try{
        app.listen(PORT, ()=>{
            console.log("Server is running at port ",PORT)
        })
    }
    catch(error){
        console.log({err:error})
    }
}
start();

app.get("/",(req,res)=>{
    res.send("Hello")
})
app.use(cors())
app.use(express.json())


