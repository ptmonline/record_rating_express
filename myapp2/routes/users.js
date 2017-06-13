var express = require('express');
var router = express.Router();
var datainformation = require('../public/javascripts/client');

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log(typeof datainformation)
	for (var index in datainformation) {
		console.log(index + ' : ' + datainformation[index])
	};
	
	res.render('users', { data: datainformation});
});

module.exports = router;
