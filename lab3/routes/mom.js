'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('mom', { name: 'Ranjan', comment: 'Ranjan is very friendly' });
});

module.exports = router;