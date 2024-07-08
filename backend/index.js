import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/bookModel.js';
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for parsing cors
app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['POST', 'GET', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }));



app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send("Just Trying to learn");
})

app.use('/books', booksRoute);



mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("Database connected successfully");
        app.listen(PORT, () => {
            console.log(`The server is listening on port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });