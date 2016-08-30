var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/*', function(req, res) {
	res.redirect('/index.html');
});

app.listen(8888);