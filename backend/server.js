const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.Port || 5000;
const connectDB = require('./config/db');


connectDB()
const app = express() 

app.use('/api/users', require('./routes/userRoute'));

app.listen(port, () => console.log(`Server started on port ${port}`));

