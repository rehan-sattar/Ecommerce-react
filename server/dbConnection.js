const mongoose = require('mongoose');
const config = require('./confige');

mongoose.connect(
    config.DATABASE_URL,
    err => {
        if (err) {
            return console.log("Connection in Error!");
        };
        console.log('Connected Successfully!');
    }
)