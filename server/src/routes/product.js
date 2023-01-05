const route = require("express").Router();
const ProductController = require("../controllers/ProductController");

route.get("/get-all", ProductController.getAll);
route.get("/products", ProductController.pagination);
route.post("/create", ProductController.create);
route.delete("/delete/:id", ProductController.delete);
route.patch("/update/:id", ProductController.update);
route.put("/update/all", ProductController.updateAll);

module.exports = route;
