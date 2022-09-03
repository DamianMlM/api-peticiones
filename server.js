const express = require("express")
const cors = require("cors")
const app = express()
const db = require("./models")


var corsOptions = {
    origin: "http://localhost:3001"
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

db.sequelize.sync()
    .then(()=>{
        console.log("Base de datos sincronizada")
    }).catch((err)=>{
        console.log("Falló la sincronización de la DB "+err.message)
    })


app.get('/', (req,res)=>{
    res.send({
        mensaje:"Es el index"
    })
})

require("./routes/tramite.routes")(app)
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log("Servidor corriendo en el puerto "+PORT)
})
