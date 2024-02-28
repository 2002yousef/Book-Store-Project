import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();

// root directory
app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Welcome to MERN Stack Tutorial')
});

// Route for save a new book

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

