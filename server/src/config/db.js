const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connect successfully");
        res.status(200).json("Connection successfully");
    } catch (error) {
        console.log(error);
        res.status(500).json("Connection failed");
    }
}

module.exports = { connect };
