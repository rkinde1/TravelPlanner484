const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.Port || 5000;
const connectDB = require('./config/db');



connectDB()
const app = express() 
app.use(express.json())
app.use(express.urlencoded({ extended: true}));


app.use('/api/users', require('./routes/userRoute')); //Dont think we are going to use this route

app.use('/api/signup', require('./routes/signUpRoute')); // 


app.use('/api/login', require('./routes/loginRoute')); // Both of these will use middleware in the userController
app.use('/api/itinerary', require('./routes/itineraryRoute'));

//app.use('/api/vacation', require('./routes/vacationRoute'));


app.use('*', (req, res) => {
    res.send('404! This not a valid URL.')
})

app.listen(port, () => console.log(`Server started on port ${port}`));

