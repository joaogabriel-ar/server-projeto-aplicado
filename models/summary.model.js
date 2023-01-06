import Sequelize from "sequelize";
import db from "../repository/db.js";

const Summary = db.define('summary', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    bill_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    guest_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

},

    { 
        underscored: true,
    });

// Summary.hasMany(Product, {sourceKey: id, foreignKey: 'fk_product'});
// Summary.hasMany(Guest, {sourceKey: id, foreignKey: 'fk_guest'});
// Summary.hasMany(Bill, {sourceKey: id, foreignKey: 'fk_bill'});

export default Summary;