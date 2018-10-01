var http = require('http'),
    url = require('url'),
    qs = require('querystring');
 
var server = http.createServer(function (req, res) {
    let urlParts = url.parse(req.url, true),
        urlPathname = urlParts.pathname
        body = '',
        response = '';
    

    let paths = urlPathname.split('/');

    req.on('data', function (data) {
        body += data; 
    });
 
    req.on('end', function () {
        res.writeHead(200, {'Content-type':'application/json'});
        if(paths.length === 3){
            if(paths[1] === 'hello'){
                response = JSON.stringify({hello: paths[2]})
            } else {
                response = getJsonErrorResponse(404, 'Page Not Found. Go to the uri localhost:3333/hello/:name')
            }
        } else {
            response = getJsonErrorResponse(404, 'Page Not Found. Go to the uri localhost:3333/hello/:name')
        }
        
        res.end(response);
    });
 
});
server.listen(3333);
console.log("Server running at http://localhost:3333");


function getJsonErrorResponse(lngCode, strMessage) {
    let res = {
        code: lngCode,
        message: strMessage
    }

    return JSON.stringify(res)
}