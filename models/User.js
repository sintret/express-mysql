/**
 * Created by ASUS-PC on 7/8/2017.
 */

const Sequelize = require('sequelize');
var sequelize = require('./config.js');

var User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        unique: true
    },
    password: {
        type: Sequelize.STRING
    },
    fullname: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});

module.exports = User;