const mongoose = require('mongoose')
require('colors')

const databaseMongoDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_MONGO)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = databaseMongoDB