const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Sasa5454",
    database: "lectureProfile"
})

module.exports = client
