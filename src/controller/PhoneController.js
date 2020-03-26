const crypto = require('crypto')
const Phone = require('../models/Phone')
const formValidation = require('./utils/formValidation')
const dateFormat = require('./utils/dateFormat')

module.exports = {
    async index(req, res) {
        await Phone.find()
        .then((phones) => {
            return res.status(200).json(phones)
        })
        .catch((err) => {
            console.log(err)
            return res.status(400).send(err)
        })
    },

    async register(req, res) {
        const {phone_model, price, brand, colors} = req.body
        const code = crypto.randomBytes(4).toString('HEX')
        let {startDate, endDate} = req.body

        startDate = dateFormat(startDate)
        endDate = dateFormat(endDate)

        const validation = formValidation(phone_model,price,brand,startDate,endDate,colors)
        
        if (validation) {
            await Phone.create({
                phone_model, 
                price, brand, 
                startDate,
                endDate, 
                colors,
                code})
            .then(() => {
                return res.status(200).send({message: `Phone ${code.toUpperCase()} registered`})
            })
            .catch(err => {
                console.log(err)
                return res.status(400).send(err)
            })
        } else {
            return res.status(400).send({message:'Impossible to register - Required field not match'})
        }
    },
 
    async delete(req, res) {
        const {id} = req.params
       
        await Phone.findById(id)
        .then(phone => {
            phone.delete()
            .then ((phone) => {
                return res.status(204).send({message: `Phone ${id} deleted`})
            })
            .catch(err => {
                console.log(err)
                return res.status(400).send(err)
            })
        })
        .catch(err => {
            console.log(err)
            return res.status(404).send(err)
        })
            
    },

    async update(req, res) {
        const {id} = req.params
        const {phone_model, price, brand, colors} = req.body
        let {startDate, endDate} = req.body

        startDate = dateFormat(startDate)
        endDate = dateFormat(endDate)
        
        const validation = Validation(phone_model,price,brand,startDate,endDate,colors)
        
        if (validation) {
            await Phone.findById(id)
            .then(phone => {
                phone.phone_model = phone_model
                phone.price = price
                phone.brand = brand
                phone.startDate = startDate
                phone.endDate = endDate
                phone.colors = colors
                phone.save()
                .then(phone => {
                    return res.send({message: `Phone ${phone.code} updated`})
                })
                .catch(err => {
                    console.log(err)
                    return res.status(400).send(err)
                })
            })
            .catch(err => {
                console.log(err)
                return res.status(404).send(err)
            })
        } else {
            res.status(400).send({menssage: 'Impossible update table - field not match'})
        }
    }
}