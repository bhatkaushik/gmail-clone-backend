import express from 'express';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import UserRoute from './routes/userRoutes.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'
import morgan from "morgan";

// rest object
const app =express();

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

// config dotenv
dotenv.config();

// port
const PORT = process.env.PORT || 8000  ;

// middleware
app.use(cors());
app.use(morgan('dev'))
app.use(express.json())

//routes
app.use('/',Routes) 
app.use('/users',UserRoute)

// username and password fetching from dotenv
const username = process.env.DB_USERNAME ;
const password = process.env.DB_PASSWORD ;

// database
Connection(username,password)

// listnening to server
app.listen(PORT, ()=>console.log(`server is running successfully on PORT ${PORT}`));