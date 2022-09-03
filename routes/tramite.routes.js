module.exports = app => {
    const tramites = require("../controllers/tramite.controller")
    var router = require("express").Router()

    router.post("/", tramites.create)
    router.get("/", tramites.findAll)
    router.get("/:id", tramites.findOne)
    router.put("/:id", tramites.update)
    router.delete("/:id", tramites.delete)
    router.delete("/",tramites.deleteAll)

    app.use('/api/tramites', router)
}