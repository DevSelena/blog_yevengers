const mongoose = require("../config/database");
const autoIncrement = require("mongoose-auto-increment");

let commentSchema = mongoose.Schema({
    idx : {
        type :Number
    },
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
}) 

commentSchema.plugin(autoIncrement.plugin,{ model : 'Comment', field : 'idx', startAt : 1 });

module.exports = mongoose.model("Comment", commentSchema);