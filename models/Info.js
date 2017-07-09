/**
 * Created by ASUS-PC on 7/8/2017.
 */

const Sequelize = require('sequelize');
var sequelize = require('./config.js');

var Info = sequelize.define('Info', {
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    }
});

module.exports = Info;