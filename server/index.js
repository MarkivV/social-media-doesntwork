import mongoose from "mongoose";
import express from "express"
import bodyParser from "express";
import cors from "cors"
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import dotenv from "dotenv"

const app = express();
dotenv.config()

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors({credentials: true}))
app.use('/posts', postRoutes)
app.use('/users', userRoutes)


// const con = "mongodb+srv://markiv:Djdf23300714@mern.ikb09.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 3001

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true})
    .then(()=>app.listen(PORT, ()=>console.log(`server on ${PORT}`)))
    .catch((error)=>console.log(error.message));
