const mongoose = require("../config/database");
const moment = require('moment');
const tz = require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

let commentSchma = mongoose.Schema({
    name : {
        type : String
    },
    password : {
        type : String
    },
    comment :{
        type: String
    },
    comment_date:{
        type : String,
        default: moment().format('YYYY-MM-DD HH:mm:ss')
    }
});

let boardSchma = mongoose.Schema({
    name : {
        type : String
    },
    password : {
        type : String
    },
    title : {
        type : String
    },
    content : {
        type : String
    },
    board_date : {
        type : String,
        default: moment().format('YYYY-MM-DD HH:mm:ss')
    },
    comments : {
        type : [commentSchma]
    }
});


module.exports = mongoose.model("Board", boardSchma);