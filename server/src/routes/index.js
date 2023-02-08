const CategoryRoute = require("./category");
const ProductRoute = require("./product");
const CustomerRoute = require("./auth");
const CartRoute = require("./cart");
const SearchRoute = require("./search");

function routes(app) {
    app.use("/category", CategoryRoute);
    app.use("/product", ProductRoute);
    app.use("/user", CustomerRoute);
    app.use("/cart", CartRoute);
    app.use("/search", SearchRoute);
}

module.exports = routes;
