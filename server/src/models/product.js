const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        name: { type: String, trim: true },
        description: { type: String, trim: true },
        quantity: { type: Number },
        price: { type: Number },
        category: [String],
        thumbnail: { type: String, maxLength: 4000 },
        images: [String],
        rating: {
            rate: Number,
            count: Number,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Products", ProductSchema);
