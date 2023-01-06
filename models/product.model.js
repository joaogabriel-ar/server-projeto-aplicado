import Sequelize from "sequelize";
import db from "../repository/db.js";

const Product = db.define('product',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
}, {underscored:true});


export default Product;