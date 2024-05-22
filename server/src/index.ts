import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
const router = express.Router();

// Init
const app = express();

dotenv.config();

// Connect to DB
const db = require("./config/db");

// Passport
// require('./config/passport')(passport);
// app.use(passport.initialize());
// app.use(passport.session());

// Bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/item", require("./routes/item"));
// app.use('/authentication', require('./routes/authentication'));
// app.use('/profile', require('./routes/profile'));

// Start the server
const port: string | number = process.env.SERVER_PORT || 4001;
app.listen(port, () => console.log(`Server started on port ${port}...`));
