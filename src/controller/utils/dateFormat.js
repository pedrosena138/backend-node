module.exports = function dateFormat(date) {
    const date_array = date.split('-')

    return new Date(date_array.reverse().join('-'))
}