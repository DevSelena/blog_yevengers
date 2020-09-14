const mongoose = require("../config/database");
var autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose);

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
        type : Date,
        default:Date.now()
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
        type : Date,
        default : Date.now()
    },
    comments : {
        comment_data : [commentSchma]
    }
});


module.exports = mongoose.model("Board", boardSchma);