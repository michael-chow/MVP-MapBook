var express = require('express');
var bodyParser = require('body-parser');
var mongoose =  require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/mapbook');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/*', function(req, res) {
	res.redirect('/index.html');
});

app.listen(8888);