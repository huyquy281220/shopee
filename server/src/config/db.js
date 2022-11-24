const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connect successfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };
