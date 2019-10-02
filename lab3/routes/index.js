﻿'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { name: 'Rupal', comment: 'I am a Programmer' });
});

module.exports = router;