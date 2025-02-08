import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'express'
import userRouter from './routes/user.js';
import cors from 'cors'

const app = express();

app.use(bodyParser.json())
app.use(cors({
    origin: "https://d-portfolio-client.onrender.com",
    methods:["GET", "POST", "PUT", "DELETE"],
    credentials:true
}))
app.use('/api', userRouter)

mongoose.connect(process.env.MONGO_URI,{
    dbName:process.env.DB_NAME
}).then(()=> console.log("MongoDB is connected....")).catch((err) => console.log(err.message));

const port= process.env.PORT||3000;
app.listen(port, () =>console.log(`server is running on port ${port}`))