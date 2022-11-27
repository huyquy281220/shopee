const route = require("express").Router();
const CategoryController = require("../controllers/CategoryController");

route.get("/get-all", CategoryController.getAll);
route.post("/create", CategoryController.create);
route.delete("/delete", CategoryController.delete);

module.exports = route;
