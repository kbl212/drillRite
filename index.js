var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(express.static(__dirname + '/public'));

















var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('listening on port: ', port);
});