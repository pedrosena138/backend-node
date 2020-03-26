const Phone = require('../models/Phone')

module.exports = {
    async index(req, res) {
        const {id} = req.params
        await Phone.findById(id)
        .then((phone) => {
            if (phone) {
                return res.json(phone)
            } else {
                return res.status(404).send()
            }
        })
        .catch(err => {
            console.log(err)
            return res.status(404).send()
        })
    }
}