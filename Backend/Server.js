import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import debtRoutes from './Routes/debtRoutes.js'


dotenv.config()

const app=express(); 

app.use(cors())
app.use(express.json());

app.use('/api/debts', debtRoutes)

app.get('/api/test', (req, res)=>{
    res.json({message: "This is your backend speaking"})
})

mongoose.connect(process.env.MONGO_URI)
.then(()=>app.listen(5000))
.catch(err=>console.log(err))