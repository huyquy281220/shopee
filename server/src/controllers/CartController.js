const Cart = require("../models/cart");

class CartController {
    //GET /get-all
    async getAll(req, res, next) {
        try {
            const carts = await Cart.find({});

            res.status(200).json(carts);
        } catch (error) {
            console.log(error);
        }
    }

    //[GET] /:id
    async getById(req, res, next) {
        try {
            const email = req.body?.email;
            const cartClient = req.body?.cart;
            const cart = await Cart.findOne().populate({ path: "user", match: { user: email } });
            if (JSON.stringify(cartClient) === JSON.stringify(cart.products)) {
                return res.status(200).json(cart);
            }
            const newCart = await Cart.findOneAndUpdate({}, { products: cartClient }, { new: true }).populate({ path: "user", match: { user: email } });
            console.log(newCart);
            return res.status(200).json(newCart);
        } catch (error) {
            console.log(error);
        }
    }

    //[PATCH] /update/:id
    async update(req, res, next) {
        try {
            const reqData = req.body;
            const cartId = req.params?.id;
            console.log(cartId);
            const cart = await Cart.findByIdAndUpdate(cartId, reqData, { new: true });

            res.status(200).json(cart);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new CartController();
