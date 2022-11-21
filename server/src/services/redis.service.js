const client = require("../config/redis");

const init = {
    //lv1
    setPromise: async ({ key, value }) => {
        try {
            return new Promise((resolve, reject) => {
                client.set(key, value, (err, result) => {
                    return !err ? resolve(result) : reject(err);
                });
            });
        } catch (error) {}
    },

    getPromise: async ({ key, value }) => {
        try {
            return new Promise((resolve, reject) => {
                client.get(key, value, (err, result) => {
                    return !err ? resolve(result) : reject(err);
                });
            });
        } catch (error) {}
    },
};
