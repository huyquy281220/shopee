const route = require("express").Router();
const SearchController = require("../controllers/SearchController");

route.get("/", SearchController.search);

module.exports = route;
