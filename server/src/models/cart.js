const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema(
    {
        products: { type: Array, default: ["1", "2"] },
        user: { type: Schema.Types.ObjectId, ref: "Customers" },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
