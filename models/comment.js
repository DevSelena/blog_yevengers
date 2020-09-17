const mongoose = require("../config/database");
const moment = require('moment');

let commentSchema = mongoose.Schema({
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
}) 

module.exports = mongoose.model("Comment", commentSchema);