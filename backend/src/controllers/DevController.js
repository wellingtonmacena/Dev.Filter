const api = require('axios')
const Dev = require('../Models/Dev')
const toParse = require('../controllers/utils/parseStringAsArray')
const {findConnections, sendMessage} = require('../websocket')
module.exports = {

    async store(req, res) {

        const { github_username, techs, longitude, latitude } = req.body

        let dev = await Dev.findOne({ github_username })

        if (!dev) {
            const response = await api.get(`https://api.github.com/users/${github_username}`)

            const { name, bio, avatar_url } = response.data
            const techArray = toParse(techs)

            const location = {
                type: 'Point',
                coordinates: [
                    longitude,
                    latitude
                ]
            }
            dev = await Dev.create({
                github_username,
                name,
                bio,
                avatar_url,
                techs: techArray,
                location
            })


            const sendSocketMessageTo = findConnections(
                {latitude, longitude},
                techsArray,

                sendMessage(sendSocketMessageTo, 'new-dev'. dev)
            )
        }
        return res.json(dev)
    },

    async index(req, res, next) {

        const list = await Dev.find()

        //Faz contagem de quantos documentos há no banco
        const DocumentsCount = await Dev.countDocuments({ __v: 0 }, (err, count) => {
        })
        list.unshift({DocumentsCount:DocumentsCount})
        
        return res.json(list)
    },

    async destroy(req, res) {

        const { username } = req.params

        const found = await Dev.findOne({ github_username: username })

        await Dev.deleteOne({ github_username: username }, (err, result) => {

            if (!(found)) return res.status(404).json({ message: "Item not found" })
            if (err) return `It occurs error: ${err}`

            return res.json(["Item deleted with sucess", "Number of itens deleted: " + result.deletedCount])
        })
    },

    async update(req, res) {

        const { username } = req.params

        const { name, bio, techs } = req.body
        const found = await Dev.findOne({ github_username: username })
        const arrayTechs = toParse(techs)

        await Dev.updateOne({ github_username: username }, {
            $set: {
                name: name,
                bio: bio,
                techs: arrayTechs

            }
        })
            .catch(error => console.log(error))
            .then(() => {

                if (!found) return res.status(404).json({ error: `${username} not found` })
                else return res.json({ message: `${username} updated with sucess` })
            })
    }
}
