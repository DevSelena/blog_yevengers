const mongoose = require('mongoose');
const {info} = require('../database/mongodb')

mongoose.connect(info,{
    useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(()=>console.log('mongoDB connected..'))
.catch(err=>console.log(err))

module.exports = mongoose;