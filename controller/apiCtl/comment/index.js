const express = require('express');
const comment = express.Router();
const Comment = require('../../../models/comment')
const result = require('../../../lib/defaultResult');
const Joi = require('@hapi/joi');

comment.get('/find/', async (req, res) => {
    try{
        Comment.find({}, function (err, comment) {
            return res.status(200).send(result(true,200,{data: comment }))
        });
    }catch(err){
        return res.status(400).send(result(true,400,"실패",err))
    }
});

comment.post('/save', async (req, res) => {
    try{
        let comment_data = new Comment();
        comment_data.name = req.body.name;
        comment_data.password = req.body.password;
        comment_data.comment = req.body.title;

        comment_data.save(function (err) {
            if(err){
              console.log(err);
              return res.status(200).send(result(true,400,"실패",err))
            }
            return res.status(200).send(result(true,200,"성공", comment_data ))
        });
    }catch(err){
        return res.status(400).send(result(true,400,"실패",err))
    }
});

comment.put('/update', async (req, res) => {
    try{
        return res.status(200).send(result(true,200,"성공","데이터"))
    }catch(err){
        return res.status(400).send(result(true,400,"실패",err))
    }
});

comment.delete('/remove', async (req, res) => {
    try{
        Comment.findOne({idx : req.body.idx, password : req.body.password},(err,board) =>{

            if(err)  return res.status(400).send(result(true,400,"비밀번호를 확인해주세요. ",""))

            Comment.remove({ idx : req.body.idx}, (err, data) => {
                if(err) return res.status(400).send(result(true,400,"삭제 성공 ",err))
                return res.status(200).send(result(true,200,"삭제 성공 ",data))
            })            
        })
    }catch(err){
        return res.status(400).send(result(true,400,"실패",err))
    }
});

module.exports = comment;