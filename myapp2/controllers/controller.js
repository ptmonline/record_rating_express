var request = require('request');
var cheerio = require('cheerio');
var firstHeader;
var thealbumarray = [];
var theartistarray = [];


var thealbumarray = [];
var model = require('../models/model');

exports.init= function(req, res){
  res.render('index', { title: 'hello'});
  thealbumarray = [];
  theartistarray = [];
  datainformation = [];
  count = 0;
}
exports.getter = function(req, res){
  console.log(req.body.albumtitle);
    console.log(req.body.albumartist);
    for (var x = 0; x < req.body.albumtitle.trim().split(' ').length; x++){
      if(req.body.albumtitle.split(' ')[x] == 'and' || req.body.albumtitle.split(' ')[x] == 'of' || req.body.albumtitle.split(' ')[x] == 'to' || req.body.albumtitle.split(' ')[x] == 'in'){
        thealbumarray.push(req.body.albumtitle.split(' ')[x].toLowerCase());
      }else{
        thealbumarray.push(req.body.albumtitle.split(' ')[x][0].toUpperCase() + req.body.albumtitle.split(' ')[x].slice(1).toLowerCase());
      }
    }
    for (var y = 0; y < req.body.albumartist.trim().split(' ').length; y++){
      theartistarray.push(req.body.albumartist.split(' ')[y][0].toUpperCase() + req.body.albumartist.split(' ')[y].slice(1).toLowerCase());
    }
    
    var titleAlbum = thealbumarray.toString().replace(/,/g , "_");
    var titleArtist = theartistarray.toString().replace(/,/g, "_");
    console.log('the title album is : ' + titleAlbum);
    console.log('... and the artist is ' + titleArtist);
    model.checkString(titleAlbum, titleArtist, function(err, callback){
        console.log(callback)
        res.render('users', { titleAlbum: 'howdy', data: callback});

    })
}