import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRouter from './routes/user.js';

dotenv.config(); 

const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: "https://d-portfolio-client.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"], // ✅ Allow common headers
    credentials: true,
}));

app.options('*', cors());

app.use('/api', userRouter);

mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME
}).then(() => console.log("MongoDB is connected..."))
    .catch((err) => console.log(err.message));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
