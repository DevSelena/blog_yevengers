const mongoose = require("../config/database");
var autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose);

const boardSchma = mongoose.Schema({
    idx : {
        type :Number
    },
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
    comment :{
        type: Object
    }
});
  
boardSchma.plugin(autoIncrement.plugin,{ model : 'Board', field : 'idx', startAt : 1 });

module.exports = mongoose.model("Board", boardSchma);