const route = require("express").Router();
const CartController = require("../controllers/CartController");

route.get("/get-all", CartController.getAll);
route.patch("/update/:id", CartController.update);
route.post("/", CartController.getById);

module.exports = route;
