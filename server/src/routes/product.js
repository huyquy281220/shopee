const route = require("express").Router();
const ProductController = require("../controllers/ProductController");

route.get("/get-all", ProductController.getAll);
route.post("/create", ProductController.create);
route.delete("/delete/", ProductController.delete);
route.patch("/update/:id", ProductController.update);

module.exports = route;
