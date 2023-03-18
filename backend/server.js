const express = require('express')
const dotenv = require('dotenv').config()
const port = 5000

const app = express() 

app.get('/get/users',(req,res) => {
    res.status(200).json({ message: 'Get goals'});
})

app.listen(port, () => console.log(`Server started on port ${port}`));

