const checkColors = require('../../utils/checkColor')
const formatString = require('../../utils/formatString')

module.exports = function formValidation(model, price, brand, startDate, endDate, colors) {
    const colorValidation = (checkColors(colors))
    const modelValidation = formatString(model)
    const brandValidation = formatString(brand)
    const priceValidation = (price >= 0)

    const startDateValidation = (startDate > new Date('2018-12-25'))
    const endDateValidation = (endDate > startDate)
    
    const formValidation = colorValidation && modelValidation && brandValidation && priceValidation && startDateValidation && endDateValidation

    return formValidation
}