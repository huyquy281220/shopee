const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
    {
        fname: { type: String, trim: true, minLength: [2, "Minimum 2 characters"], maxLength: [25, "Maximum 25 characters"] },
        lname: { type: String, trim: true, minLength: [2, "Minimum 2 characters"], maxLength: [25, "Maximum 25 characters"] },
        username: { type: String, unique: true, trim: true, minLength: [5, "Minimum 5 characters"], maxLength: [25, "Maximum 25 characters"] },
        email: { type: String, unique: true, required: true, match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please fill a valid email address"] },
        password: { type: String, unique: true, required: true, trim: true, minLength: [6, "Minimmum 6 characters"], maxLength: [100, "Maximum 100 characters"] },
        phone: { type: String, minLength: [8, "Minimmum 8 characters"], maxLength: [15, "Maximum characters"] },
        birthDay: { type: Date },
        address: {
            city: String,
            street: String,
        },
        profilePic: { type: String, maxLength: 4000 },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Customers", CustomerSchema);
