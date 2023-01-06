import Sequelize from "sequelize";
import db from "../repository/db.js";
const Guest = db.define('guest',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    guestName: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {underscored:true});

export default Guest;