const express = require("express");
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const helmet = require('helmet');
const db = require("./config/db");
const port = process.env.PORT || 4080;

db.connect();

//user middleware
app.use(morgan("combined"));
app.use(helmet());

// add body-parser
app.use(express.json())

// error handler middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || 'Internal Server Error',
        },
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
