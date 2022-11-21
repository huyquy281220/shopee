const { createClient } = require("redis");
const client = createClient({
    url: process.env.REDIS_URI,
});

client.ping((err, result) => {
    console.log(result);
});

client.on("connect", () => {
    console.log("Redis client connected");
});

client.on("error", (err) => {
    console.error(err);
});

module.exports = client;
