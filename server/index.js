require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const db = require('./db');
const {userRouter} = require('./routes');

const port = process.env.PORT;

app.use(cors());
app.unsubscribe(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', userRouter);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    res.status(status).json({message})
})

db.on('connect', (client) =>
    client.query('CREATE TABLE IF NOT EXISTS users (username VARCHAR(255), email VARCHAR(255) UNIQUE)'));

app.get('/', (req, res) => {
    res.send('Hi there!');
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})





