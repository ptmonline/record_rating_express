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

// router.post('/', function (req, res) {
//     console.log(req.body.albumtitle);
//     console.log(req.body.albumartist);
//     for (var x = 0; x < req.body.albumtitle.split(' ').length; x++){
//       if(req.body.albumtitle.split(' ')[x] == 'and' || req.body.albumtitle.split(' ')[x] == 'of' || req.body.albumtitle.split(' ')[x] == 'to' || req.body.albumtitle.split(' ')[x] == 'in'){
//         thealbumarray.push(req.body.albumtitle.split(' ')[x].toLowerCase());
//       }else{
//         thealbumarray.push(req.body.albumtitle.split(' ')[x][0].toUpperCase() + req.body.albumtitle.split(' ')[x].slice(1).toLowerCase());
//       }
//     }
//     for (var y = 0; y < req.body.albumartist.split(' ').length; y++){
//       theartistarray.push(req.body.albumartist.split(' ')[y][0].toUpperCase() + req.body.albumartist.split(' ')[y].slice(1).toLowerCase());
//     }
    
//     var titleAlbum = thealbumarray.toString().replace(/,/g , "_");
//     var titleArtist = theartistarray.toString().replace(/,/g, "_");
//     console.log('the title album is : ' + titleAlbum);
//     console.log('... and the artist is ' + titleArtist);
//     res.send(titleAlbum);
// });

module.exports = router;
