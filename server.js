import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'express'
import userRouter from './routes/user.js';
import cors from 'cors'

const app = express();

app.use(bodyParser.json())
app.use(cors({
    origin:true,
    methods:["GET", "POST", "PUT", "DELETE"],
    credentials:true
}))
app.use('/api', userRouter)

mongoose.connect("mongodb+srv://deepika-610:Deepikasimran@cluster0.6z70n.mongodb.net/",{
    dbName:"D_Portfolio"
}).then(()=> console.log("MongoDB is connected....")).catch((err) => console.log(err.message));

const port= 3000;
app.listen(port, () =>console.log(`server is running on port ${port}`))