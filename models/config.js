const Sequelize = require('sequelize');
const sequelize = new Sequelize("test","root","",{
    host:'localhost',
    dialect:'mysql',
    define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true
    }
});
module.exports = sequelize;