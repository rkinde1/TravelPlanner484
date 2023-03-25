const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.Port || 5000;
const connectDB = require('./config/db');
const path = require("path");


connectDB()
const app = express() 
app.use(express.json())
app.use(express.urlencoded({ extended: false}));
app.use('/api/users', require('./routes/userRoute'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "login.js"));
});

app.post('/login', (req, res) => {
    res.send(req.body);
    const {username, password} = req.body;
    res.send(username);
    res.send(password);
});

app.listen(port, () => console.log(`Server started on port ${port}`));

