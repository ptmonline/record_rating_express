var request = require('request');
var cheerio = require('cheerio');
var firstHeader;
var thealbumarray = [];
var theartistarray = [];
var count = 0;
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
    var finishstring = titleAlbum + "_(" + titleArtist+"_album)"
    checkString(titleAlbum, titleArtist)
    function checkString(titleAlbum, titleArtist){
    count;
    // if(titleArtist == undefined || titleArtist == 'undefined' || titleArtist ==null ){
    if(count == 1){
      finishString = titleAlbum + '_(album)';
    }else if(count == 2){
      finishString = titleAlbum
    }else if(count == 3){
      console.log('sorry! no match found');
      firstHeader = 'Sorry no criteria found!'
      res.render('users', { titleAlbum: firstHeader});
      return false;
    }else{
      finishString = titleAlbum + '_(' + titleArtist +'_album)';
    }
   model.searchItems(finishString, function(err, callback){
        console.log(err)
        console.log('the call back is : ' + Object.keys(callback).length)
        if(Object.keys(callback).length){
          res.render('users', { titleAlbum: req.body.albumtitle, data: callback});
        }else{
          res.render('users', { titleAlbum: req.body.albumtitle, data: 'Sorry no album found!'});
        }

    })
  }
}