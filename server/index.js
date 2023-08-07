require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const db = require('./db');

const port = process.env.PORT;

app.use(cors());
app.unsubscribe(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    res.status(status).json({message})
})

app.get("/", (req, res) => {
    res.send("Hello World!");
})

db.on("connect", client => {
    client.query("CREATE TABLE IF NOT EXISTS users (username VARCHAR(255), email VARCHAR(255))")
        .catch(err => console.log(err));
})

app.get("/users", async (req, res) => {
    const users = await db.query("SELECT * FROM users");
    res.status(200).json({ users });
})

app.post("/users", async (req, res) => {
  const user = await db.query("INSERT INTO users (username, email) VALUES ($1, $2)", [username, email]);
  res.status(200).json({ user });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})





