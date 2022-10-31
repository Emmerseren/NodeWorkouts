const express = require('express')
require('dotenv').config()
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

// express app
const app = express()

// middelware
app.use(express.json())

app.use((req, res, next) => {
 console.log(req.path, req.method)
 next()
})
// routes
app.use('/api/workouts', workoutRoutes)

// connect to db

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // after connection to db then listen for request 
    app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})




