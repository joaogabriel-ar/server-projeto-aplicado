import Sequelize from "sequelize";

const sequelize = new Sequelize('projeto-aplicado', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    port: '5432'
});

sequelize.authenticate().then(() => {
    console.log("Success!");
}).catch((err) => {
    console.log(err);
});

export default sequelize;