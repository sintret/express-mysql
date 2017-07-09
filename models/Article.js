/**
 * Created by ASUS-PC on 7/8/2017.
 */
const Sequelize = require('sequelize');
var sequelize = require('./config.js');

var Article = sequelize.define('Article', {
    image: {
        type: Sequelize.STRING,
    },
    title: {
        type: Sequelize.STRING
    },

    description: {
        type: Sequelize.TEXT
    },userCreate: {
        type: Sequelize.INTEGER
    },userUpdate:{
        type: Sequelize.INTEGER
    }
});

module.exports = Article;