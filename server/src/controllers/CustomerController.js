const Customer = require("../models/customer");
var CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const customer = require("../models/customer");
const { accessToken, refreshToken } = require("../utils/token");

class CustomerController {
    //[POST] /register
    async register(req, res, next) {
        const customerData = new Customer({
            name: req.body?.name,
            email: req.body?.email,
            password: CryptoJS.AES.encrypt(req.body?.password, process.env.SALT).toString(),
        });
        try {
            const newCustomer = await customerData.save();
            res.status(201).json(newCustomer);
        } catch (error) {
            console.log(error);
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

            const accessTokenAuth = accessToken(customer);
            const refreshTokenAuth = refreshToken(customer);

            if (originPassword !== req.body?.password) {
                return res.status(401).json("Wrong password");
            }

            const { password, ...info } = customer._doc;

            res.status(200).json({ ...info, accessTokenAuth, refreshTokenAuth });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //[PATCH] /update
    async update(req, res, next) {
        try {
            const reqData = req.body || null;
            const customerUpdate = await Customer.findByIdAndUpdate(req.params?.id, reqData, { new: true });
            res.status(200).json(customerUpdate);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //[GET] /get-all
    async getAll(req, res, next) {
        try {
            const allCustomer = await Customer.find({});
            const user1 = await Customer.findOne({ email: "huyquy2812@gmail.com" });
            const bytes = CryptoJS.AES.decrypt(user1.password, process.env.SALT);
            const originPassword = bytes.toString(CryptoJS.enc.Utf8);
            res.status(200).json({ allCustomer, originPassword });
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }

    //[POST] /refresh
    async refreshToken(req, res) {
        try {
            const OldRefreshToken = req.cookies.refreshTokenAuth;
            if (!OldRefreshToken) {
                return res.status(401).json("you're not authenticated");
            }

            jwt.verify(OldRefreshToken, process.env.SECRET_KEY, (err, user) => {
                if (err) {
                    console.log(err);
                }

                const newAccessToken = accessToken(user);
                const newRefreshToken = refreshToken(user);
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = new CustomerController();
