
const express = ("express");
const router = exppress.Router();

const mongoose = require("mongoose");

const usernameSchema = moongoose.Schema({
    email: {type: String, required: true, unique: true },
    username: {type: String, required: true, unique: true },
    password: {type: String, required: true}
});

router.post("/signup");
module.exports = router;
module.exports = mongoose.model('user', usernameSchema);