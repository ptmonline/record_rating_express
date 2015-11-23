
var express = require('express');
var router = express.Router();
// var datainformation = require('../public/javascripts/client');
var ctrl = require('../controllers/controller.js')
var request = require('request');
var cheerio = require('cheerio');
var firstHeader;
var thealbumarray = [];
var theartistarray = [];
var datainformation = [];
var count = 0;

/* GET home page. */
router.get('/', ctrl.init);
router.post('/', ctrl.getter);

module.exports = router;
