module.exports = (sequelize, Sequelize) => {
    const Tramite = sequelize.define("tramite", {
        id : {
            type: Sequelize.INTEGER,
            primaryKey : true
        },
        nombre : {
            type: Sequelize.STRING
        },
        notas :{
            type : Sequelize.STRING
        },
        requisitos : {
            type : Sequelize.STRING
        }
    },{
        freezeTableName : true,
        timestamps : false
    })

    return Tramite
}