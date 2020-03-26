module.exports = function formatString(phone_string) {
    const noSpaceString = phone_string.replace(/\s{1,}/g, '')
    return (noSpaceString.length >= 2 && noSpaceString.length <=255)
}