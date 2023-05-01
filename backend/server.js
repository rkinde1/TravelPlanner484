const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.Port || 5000;
const connectDB = require('./config/db');




connectDB()
const app = express()
app.use(express.urlencoded({ extended: true}));
app.use(express.json())



app.use('/api/users', require('./routes/userRoute')); //Dont think we are going to use this route

app.use('/api/signup', require('./routes/signUpRoute')); // Will use middleware in the userController 


app.use('/api/login', require('./routes/loginRoute')); // Will use middleware in the userController

app.use('/api/itinerary', require('./routes/itineraryRoute'));

app.use('/api/event', function (req, res) {
    res.send(req.body);
});

app.use('/api/vacation', require('./routes/vacationRoute'));

app.use('*', (req, res) => {
    res.status(404).json({message: 'Page not found'});
})

app.listen(port, () => console.log(`Server started on port ${port}`));

