const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "070702",
    database: "lectureProfile"
})

module.exports = client