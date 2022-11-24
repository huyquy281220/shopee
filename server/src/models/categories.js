const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
    {
        name: { type: String },
        count: { type: Number, default: 0 },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Categories", CategorySchema);
