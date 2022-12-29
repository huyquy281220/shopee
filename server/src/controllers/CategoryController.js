const Category = require("../models/categories");

class CategoryController {
    //[GET] /get-all
    async getAll(req, res, next) {
        try {
            const categories = await Category.find({});
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //[POST] /create
    async create(req, res, next) {
        try {
            const reqData = req.body || null;
            const newCategory = new Category(reqData);
            await newCategory.save();
            res.status(201).json(newCategory);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //[PATCH] /update
    async update(req, res, next) {
        try {
            const newCategory = await Category.findByIdAndUpdate(req.params?.id, req.body, { new: true });
            res.status(200).json(newCategory);
        } catch (error) {
            console.log(error);
        }
    }

    //[DELETE] /delete
    async delete(req, res, next) {
        try {
            if (req.params.id) {
                const categoryId = req.params.id;
                await Category.deleteOne({ _id: categoryId });
                return res.status(200).json("Delete successfully");
            } else {
                await Category.deleteMany({});
                return res.status(200).json("Delete all category successfully");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = new CategoryController();
