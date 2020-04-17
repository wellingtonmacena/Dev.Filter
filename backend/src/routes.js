const {Router} = require('express')

const routes = Router()


const DevController = require('./Controllers/DevController')
const SearchController = require('./Controllers/SearchController')

routes.post("/devs", DevController.store)
routes.get("/devs", DevController.index)
routes.delete("/devs/:username", DevController.destroy)
routes.put("/devs/:username", DevController.update)

routes.get("/search/", SearchController.index)



module.exports = routes