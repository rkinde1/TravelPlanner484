const { application } = require('express');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.Port || 5000;
const connectDB = require('./config/db');
const { getUser, register } = require('./controllers/userController');



connectDB()
const app = express() 
app.use(express.json())
app.use(express.urlencoded({ extended: false}));


app.use('/api/users', require('./routes/userRoute'));

/*
app.use('*', (req, res) => {
    res.send('404! This not a valid URL.')
})
*/
app.post('/signup', (req, res) => {
    res.send(req.body);
})
app.listen(port, () => console.log(`Server started on port ${port}`));

