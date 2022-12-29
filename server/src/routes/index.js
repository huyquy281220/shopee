const CategoryRoute = require("./category");
const ProductRoute = require("./product");
const CustomerRoute = require("./auth");

function routes(app) {
    app.use("/category", CategoryRoute);
    app.use("/product", ProductRoute);
    app.use("/user", CustomerRoute);
}

module.exports = routes;
