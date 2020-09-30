const { Pool } = require("pg")

module.exports = new Pool({
    user:'postgres',
    password: "romi1101",
    host: "localhost",
    port: 5432,
    database: "gymmanager"
})