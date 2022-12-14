const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const db = require("./src/config/db");
const routes = require("./src/routes");
const port = process.env.PORT || 4080;

db.connect();
//user middleware
app.use(morgan("combined"));
app.use(cors());
app.use(helmet());

//static file
app.use(express.static(path.join(__dirname, "resources")));
app.get("/", (req, res) => {
    res.sendFile("index.html", { root: path.join(__dirname, "src/resources") });
});

// add body-parser
app.use(express.json());

routes(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
