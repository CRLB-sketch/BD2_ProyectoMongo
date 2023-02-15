const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const port = process.env.PORT || 5000
const databaseMongoDB = require('./config/db')
const bodyParser = require('body-parser')
const cors = require('cors')

mongoose.set('strictQuery', true)

databaseMongoDB() // Database of MongoDB

const app = express()

app.use(cors({ origin: true }))
app.use(bodyParser.json())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Set All Avaliable Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/posts', require('./routes/postRoutes'))

app.listen(port, () => {
    console.log(`Server of Blog is running on ${port}`)
})
