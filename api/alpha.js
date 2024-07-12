require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const router = require('./router');
const error_middleware = require('./middleware/error');

const app = express();
const port = process.env.PORT;
const database = process.env.DB_URL;

app.use(express.json(), function (req, res, next) {
    res.setHeader('X-Powered-By', 'deceit-league')
    next()
})

app.use('/v1', router)
app.use(error_middleware);


const start = async() => {
    try {
        await mongoose.connect(database);
        app.listen(port, () => console.log(`Server is up on port ${port}`));
    } catch (e){
        console.log(e)
    }
}

start()