const db = require("../models")
const Tramite =db.Tramite
const Op = db.Sequelize.Op

//Crear un nuevo tramite
exports.create=(req, res)=>{
    if (!req.body.nombre) {
        res.status(400).send({
                messaje:"Nombre no puede ser vacio"
        })
        return 
    }
    const tramite ={
        nombre :req.body.nombre,
        notas: req.body.notas,
        requisitos:req.body.requisitos,
    }
    Tramite.create(tramite)
    .then(data=>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({

        })
    })
}
//retornar todos los tramintes
exports.findAll = (req, res)=>{
    Tramite.findAll()
        .then(data=>{
            res.send(data)
    })
    .catch(err =>{
        res.status(500)
            res.send({
                mensaje : err.message || "Algo ocurrió cuando consultamos los trámites"
        })
    })
}
//Buscar un oslo tramite
exports.findOne = (req, res)=>{
    const id = req.params.id
    Tramite.findByPk(id)
        .then(data =>{
            if(data){
                res.send(data)
            }else{
                res.status(404).send({
                    mensaje : "No existe ese tramite"
                })
            }
        }).catch(err=>{
            res.status(500).send({
                mensaje : "Error al consultar el trámite"
            })
        })
}
//Actualizar un trámite por id
exports.update = (req,res) => {
    const id = req.params.id
    Tramite.update(req.body, {
        where : {id:id}
    }).
    then(num => {
        if(num == 1){
            res.send({
                mensaje: "Trámite actualizado"
            })
        }else{
            res.send({
                mensaje: "No se pudo actualizar el trámite, quizás no exista."
            })
        }
    }).catch(err=>{
        res.status(500).send({
            mensaje : "Error al actualizar el trámite"
        })
    })
}

//Eliminar un trámite por id
exports.delete = (req,res) => {
    const id = req.params.id
    Tramite.destroy({
        where: {id:id}
    }).then(num => {
        if(num == 1){
            res.send({
                mensaje: "Trámite eliminado"
            })
        }else{
            res.send({
                mensaje: "No se pudo eliminar el trámite, quizás no exista."
            })
        }
    }).catch(err=>{
        res.status(500).send({
            mensaje : "Error al eliminar el trámite"
        })
    })
}

//Eliminar todos los trámites
exports.deleteAll = (req,res)=>{
    Tramite.destroy({
        where : {},
        truncate : false
    }).then(num =>{
        res.send({
            mensaje: `Se eliminaron ${num} trámites`
        })
    }).catch(err=>{
        res.status(500).send({
            mensaje:
            err.message || "No se pudieron eliminar"
        })
    })
}
