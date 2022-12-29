const jwt = require("jsonwebtoken");

module.exports = {
    accessToken: (user) => {
        return jwt.sign({ id: user?._id }, process.env.SECRET_KEY, { expiresIn: "12h" });
    },
    refreshToken: (user) => {
        return jwt.sign({ id: user?._id }, process.env.SECRET_KEY, { expiresIn: "365d" });
    },
};
