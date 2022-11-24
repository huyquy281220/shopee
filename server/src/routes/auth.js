const route = require("express").Router();
const CustomerController = require("../controllers/CustomerController");

route.get("/get-all", CustomerController.getAll);
route.post("/register", CustomerController.register);
route.post("/login", CustomerController.login);
route.patch("/update/:id", CustomerController.update);

module.exports = route;
