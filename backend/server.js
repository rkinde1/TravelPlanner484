const { application } = require('express');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.Port || 5000;
const connectDB = require('./config/db');


connectDB()
const app = express() 
app.use(express.json())
app.use(express.urlencoded({ extended: false}));

app.use('/api/users', require('./routes/userRoute')); //Dont think we are going to use this route

app.use('/api/signup', require('./routes/signUpRoute')); // |
app.use('/api/login', require('./routes/loginRoute')); //  V Both of these will use middleware in the userController

/*
app.use('*', (req, res) => {
    res.send('404! This not a valid URL.')
})
*/
app.listen(port, () => console.log(`Server started on port ${port}`));

