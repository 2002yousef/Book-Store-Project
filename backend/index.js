import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import  booksRoute  from './routes/bookRoute.js';
 
const app = express();

// Middleware for parsing request body
app.use(express.json());

// root directory
app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Welcome to MERN Stack Tutorial')
});

app.use('/books', booksRoute);

// connecting to database
mongoose
.connect(mongoDBURL)
.then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    })
})
.catch((error) => {
    console.log(error)
});

