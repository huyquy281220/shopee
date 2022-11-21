const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        name: { type: String, },
        description: {},
        quantity: {},
        price: {},
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Products", ProductSchema);
