const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const OrderSchema = new Schema(
    {
        // customerId: {type: mongoose.ObjectId, ref: "Customers"},
        status: { type: String, enum: ["success", "failure", "pending"] },
        requestTime: new Date(),
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Orders", OrderSchema);
