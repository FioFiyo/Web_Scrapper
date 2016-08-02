var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs')

request('http://substack.net/images/', function (error, response, html) {
  if (!error && response.statusCode == 200) {
  	$ = cheerio.load(html);
 
    fs.writeFile('images.csv', "",{'flag':'w'}, function(err){
				if(err){
					return console.error(err);
				}
				console.log("Data written successfully");
				
		}); //writefile

    	//FILE PERMISSION
  	$('tr td:first-child').each(function(i, element){
  		var filePermision = $(this).children();
  		// console.log(filePermision.text());
  		var absoluteURL = $(this).next().next().children();
  		// console.log(absoluteURL.text());
  		// A tag
  		var fileType = $(absoluteURL).text().split(".")[1];
  		// console.log(fileType);
 			metaData = filePermision + absoluteURL + fileType
		  fs.writeFile('images.csv',metaData,{'flag':'a'}, function(err){
				if(err){
					return console.error(err);
				}
				console.log("Data written successfully");
				
			}); //writefile

  	});
  };//closing if
});