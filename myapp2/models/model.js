var request = require('request');
var cheerio = require('cheerio');
var count = 0;
var datainformation = [];
var firstHeader;
var ctrl = require('../controllers/controller.js')
exports.checkString = function(titleAlbum, titleArtist, cb) {
	function checkcheck(titleAlbum, titleArtist){
	var finishstring = titleAlbum + "_(" + titleArtist+"_album)"
	count;
    // if(titleArtist == undefined || titleArtist == 'undefined' || titleArtist ==null ){
    if(count == 1){
      finishString = titleAlbum + '_(album)';
    }else if(count == 2){
      finishString = titleAlbum
    }else if(count == 3){
      console.log('sorry! no match found');
      firstHeader = 'Sorry no criteria found!'
      cb(null, 'Sorry!')
      // res.render('users', { titleAlbum: titleArtist});
      return false;
    }else{
      finishString = titleAlbum + '_(' + titleArtist +'_album)';
    }
    searchItems(finishString)
	};
	function searchItems (finishString){
	    request({
		    uri: "https://en.wikipedia.org/wiki/" + finishString,
		  }, function(error, response, body) {
		    var $ = cheerio.load(body);
		    firstHeader = $('.firstHeading').text();
		    var	title = $('.wikitable.infobox').find('td > a');
		    var ititle = $('.wikitable.infobox').find('td > i > a');
		    if($('#noarticletext').length == 1){
		      count += 1;
		      checkcheck(titleAlbum)
		    }else{
			    $(title).each(function(){
			      	var punctuation = $(this).parent().next().find('span').attr('title')
			        var wordPunctuation = $(this).parent().next().text();
			        if(punctuation){
			        	datainformation[$(this).attr('title')] = punctuation;
			        }else{
			        	datainformation[$(this).attr('title')] = wordPunctuation;
			        }
				})
			     $(ititle).each(function(){
			     	var punctuation = $(this).parent().parent().next().find('span').attr('title')
			        var wordPunctuation = $(this).parent().parent().next().text();
			        if(punctuation){
			        	datainformation[$(this).attr('title')] = punctuation;
			        }else{
			        	datainformation[$(this).attr('title')] = wordPunctuation;
			        }

			      })
		 	}
		 	cb(null, datainformation)
		 });
		 };
	checkcheck(titleAlbum, titleArtist);
	};