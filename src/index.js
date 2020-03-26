const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

mongoose.connect('mongodb+srv://admin:admin1234@cluster0-aaoey.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Database Connected Successfully')
})
.catch(err => {
    console.log('Unable to connect with the database', err)
})

app.use(express.json())
app.use(routes)
app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT || 3333
app.listen(3333)
