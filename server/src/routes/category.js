const route = require("express").Router();
const CategoryController = require("../controllers/CategoryController");

route.get("/get-all", CategoryController.getAll);
route.post("/create", CategoryController.create);
route.patch("/update/:id", CategoryController.update);
route.delete("/delete/:id", CategoryController.delete);

module.exports = route;
