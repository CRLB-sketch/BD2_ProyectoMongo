const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const port = process.env.PORT || 5000
const databaseMongoDB = require('./config/db')
const bodyParser = require('body-parser')
const cors = require('cors')

mongoose.set('strictQuery', true)

// Database of MongoDB
databaseMongoDB()

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
    console.log(`Server of Blog is running on ${port}`)
})