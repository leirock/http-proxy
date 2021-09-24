var http = require('http');
var url = require('url');
var request = require('request');

http.createServer(onRequest).listen(8080);

function onRequest(req, res) {

    var queryData = url.parse(req.url, true).query;
    if (queryData.url) {
        request({
            url: queryData.url + '?d=mp'
        }).on('error', function(e) {
            res.end(e);
        }).pipe(res);
    }
    else {
        res.end("no url found");
    }
}