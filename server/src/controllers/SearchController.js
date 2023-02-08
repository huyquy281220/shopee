const Product = require("../models/product");

class SearchController {
    //[GET]
    async search(req, res, next) {
        try {
            const searchValue = req.query?.keyword;
            console.log(searchValue);
            const result = await Product.find({ $text: { $search: searchValue } });

            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new SearchController();
