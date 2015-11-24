var request = require('request');
var cheerio = require('cheerio');
var count = 0;
var datainformation = [];
var firstHeader;
exports.searchItems = function(finishString, cb){
	    request({
		    uri: "https://en.wikipedia.org/wiki/" + finishString,
		  }, function(error, response, body) {
		    var $ = cheerio.load(body);
		    firstHeader = $('.firstHeading').text();
		    var	title = $('.wikitable.infobox').find('td > a');
		    var ititle = $('.wikitable.infobox').find('td > i > a');
		    // if($('#noarticletext').length == 1){
		    //   count += 1;
		    //   checkString(titleAlbum)
		    // }else{
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
		 	// }
		 	console.log('datainformation is : ' + typeof(datainformation))
		 	console.log('datainformation is too : ' + datainformation['Metacritic'])
		 	cb(null, datainformation)
		 });
	}
		