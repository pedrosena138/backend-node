module.exports = function checkColor(phone_colors) {
    const test_colors = ['BLACK','WHITE', 'GOLD','PINK']
    const result = phone_colors.filter((item) => {return test_colors.indexOf(item) > -1})
    
    return (result.length === phone_colors.length)
}
