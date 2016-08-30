var express = require('express');
var bodyParser = require('body-parser');
var mongoose =  require('mongoose');
var Db = require('./db');

var app = express();

mongoose.connect('mongodb://localhost/mapbook');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/save', function(req, res) {
	console.log('BODY>>, ', req.body);
	var newCollection = new Db({
		title: req.body.title,
		des: req.body.des,
		lat: req.body.lat,
		lng: req.body.lng
	});
	newCollection.save(function(err, saved){
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(saved);
		}
	});
});

app.get('/fetch', function(req, res) {
	Db.find({},function(err, collection){
		if(err) {
			console.log(err);
			res.status(500).send(err);
		} else {
			console.log('fetched', collection);
			res.send(collection);
		}
	});
});

app.get('/*', function(req, res) {
	res.redirect('/index.html');
});

app.listen(8888);