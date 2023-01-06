import Sequelize from "sequelize";
import db from "../repository/db.js";

const Bill = db.define('bill', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    establishmentName: {
        type:Sequelize.STRING,
        allowNull: false,
    }
}, {underscored: true});

export default Bill;