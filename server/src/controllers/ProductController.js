const product = require("../models/product");
const Product = require("../models/product");

class ProductController {
    //[GET] /get-all
    async getAll(req, res, next) {
        try {
            const limit = Number(req.query?.limit) || null;
            const products = await Product.find({}).limit(limit);
            const count = await Product.count();
            res.status(200).json({ products, count });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //[GET] /:id
    async getById(req, res, next) {
        try {
            const id = req.params?.id;
            const product = await Product.findById(id);
            res.status(200).json(product);
        } catch (error) {
            console.log(error);
        }
    }

    //[GET] /products
    async pagination(req, res, next) {
        const limit = Number(req.query?.limit) || 12;
        const page = Number(req.query?.page) || 1;
        try {
            const products = await Product.find({})
                .limit(limit)
                .skip((page - 1) * limit)
                .exec();

            const count = await Product.count();

            const dataRes = {
                products,
                totalPage: Math.ceil(count / limit),
                count,
            };

            res.status(200).json({
                products,
                totalPage: Math.ceil(count / limit),
                count,
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //[POST] /create
    async create(req, res, next) {
        try {
            const newData = {
                name: req.body?.name,
                description: req.body?.description,
                quantity: req.body?.quantity || 0,
                price: req.body?.price,
                category: req.body?.category || [],
                thumbnail: req.body?.thumbnail || "",
                images: req.body?.images || [],
            };
            const newProduct = new Product(newData);
            await newProduct.save();
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //[PATCH] /update/:id
    async update(req, res, next) {
        try {
            const reqData = req.body || null;
            const newProduct = await Product.findByIdAndUpdate(req.params?.id, reqData, { new: true });
            res.status(200).json(newProduct);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //[PUT] /update/all
    async updateAll(req, res, next) {
        const dataUpdate = { selected: 1 };
        try {
            const newRecords = await Product.updateMany({}, dataUpdate);
            res.status(200).json(newRecords);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //[DELETE] /delete
    async delete(req, res, next) {
        try {
            if (req.params.id) {
                const productId = req.params.id;
                await Product.deleteOne({ _id: productId });
                res.status(200).json("Delete successfully");
            } else {
                await Product.deleteMany({});
                res.status(200).json("Delete all product successfully");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = new ProductController();
