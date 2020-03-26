const express = require('express')
const routes = express.Router()
const PhoneController = require('./controller/PhoneController')
const SearchController = require('./controller/SearchController')

routes.get('/phones', PhoneController.index)
routes.post('/phones', PhoneController.register)
routes.delete('/delete/:id', PhoneController.delete)
routes.put('/update/:id', PhoneController.update)

routes.get('/search/:id', SearchController.index)

module.exports = routes
