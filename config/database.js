const mysql = require('mysql2/promise')
const {info} = require('../mysql/mysql')

const pool = mysql.createPool(info)

const data = pool.query('set names utf8;')

module.exports = pool