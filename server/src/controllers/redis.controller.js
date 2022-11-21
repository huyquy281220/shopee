const { setPromise, getPromise } = require("../services/redis.service");

const redisController = (module.exports = {
    setPromise: async (req, res, next) => {
        try {
            const { key, payload } = req.body;

            return res.json({
                data: await setPromise({
                    key,
                    value: JSON.stringify(payload)
                })
            })
        } catch (error) {}
    },
});
