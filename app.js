var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/hello/:name', function(req, res) {
    let obj = {hello: req.params.name}
    res.send(JSON.stringify(obj));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});