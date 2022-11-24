const Customer = require("../models/customer");
var CryptoJS = require("crypto-js");

class CustomerController {
    //[POST] /register
    async register(req, res, next) {
        try {
            const customerData = {
                email: req.body?.email,
                password: CryptoJS.AES.encrypt(req.body?.password, process.env.SALT).toString(),
            };
            const newCustomer = new Customer(customerData);
            await newCustomer.save();
            res.status(201).json(newCustomer);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //[POST] /login
    async login(req, res, next) {
        try {
            const customer = await Customer.findOne({ email: req.body?.email });
            if (!customer) {
                return res.status(400).json("Invalid email");
            }

            const bytes = CryptoJS.AES.decrypt(customer.password, process.env.SALT);
            const originPassword = bytes.toString(CryptoJS.enc.Utf8);

            if (originPassword !== req.body?.password) {
                return res.status(401).json("Wrong password");
            }

            const { password, ...info } = customer._doc;

            res.status(200).json({ ...info });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //[PATCH] /update
    async update(req, res, next) {
        try {
            const { password, ...info } = req.body || null;
            const customerUpdate = await Customer.findByIdAndUpdate(req.params?.id, ...info, { new: true });
            res.status(200).json(customerUpdate);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //[GET] /get-all
    async getAll(req, res, next) {
        try {
            const allCustomer = await Customer.find({});
            res.status(200).json(allCustomer);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
}

module.exports = new CustomerController();
