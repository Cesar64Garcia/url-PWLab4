var http = require('http'),
    url = require('url'),
    qs = require('querystring');
 
var server = http.createServer(function (req, res) {
    var urlParts = url.parse(req.url, true),
        urlParams = urlParts.query,
        urlPathname = urlParts.pathname
        body = '';
         
    req.on('data', function (data) {
        body += data; 
    });
 
    req.on('end', function () {
        res.writeHead(200, {'Content-type':'application/json'});
        if(urlPathname === '/hello/')
            res.end(JSON.stringify(urlParams));
        else 
            res.end("Error 404");
    });
 
});
server.listen(3333);
console.log("Server running at http://localhost:3333");
