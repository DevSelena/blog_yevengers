const express = require('express');
const api = express.Router();
const Board = require('../models/board')
const result = require('../lib/defaultResult');
const Joi = require('@hapi/joi');

api.get('/find', async (req, res) => {
    try{
        return res.status(200).send(result(true,200,"성공","데이터"))
    }catch(err){
        return res.status(400).send(result(true,400,"실패",err))
    }
});
api.post('/save', async (req, res) => {
    try{
        return res.status(200).send(result(true,200,"성공","데이터"))
    }catch(err){
        return res.status(400).send(result(true,400,"실패",err))
    }
});
api.put('/update', async (req, res) => {
    try{
        return res.status(200).send(result(true,200,"성공","데이터"))
    }catch(err){
        return res.status(400).send(result(true,400,"실패",err))
    }
});
api.delete('/remove', async (req, res) => {
    try{
        return res.status(200).send(result(true,200,"성공","데이터"))
    }catch(err){
        return res.status(400).send(result(true,400,"실패",err))
    }
});

module.exports = api;