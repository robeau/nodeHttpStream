/**
 * Created by natalie on 10/7/2015.
 */
var http = require('http');
var https = require('https');
var fs = require('fs');
var wstream = fs.createWriteStream('output');

https.get('https://api.github.com/search/repositories?q=angular', function (res) {
    res.pipe(wstream);
});
