module.exports = 
    function toParse(ArrayAsString) {
        const techArray = ArrayAsString.split(',').map(tech => tech.trim())
        return techArray
    }
