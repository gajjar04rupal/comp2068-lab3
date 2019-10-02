'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('sibling', { name: 'Raj', comment: 'Raj is very cute brother' });
});

module.exports = router;