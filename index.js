const express=require('express')
const app=express()
const cors=require('cors')
require('dotenv').config()
const port=process.env.PORT || 5000



app.use(cors())
app.use(express())









app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.listen(port,()=>{
    console.log(`Server is running port ${port}`)
})