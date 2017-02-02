// Sample Curl Commands:

// npm install
// node app.js
// Do the curl commands in a separate CLI window

// this returns the digest
// curl -X POST -H "Content-Type: application/json" -d '{"message": "foo"}' localhost:3000/messages

// should return the value
// curl localhost:3000/messages/2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae

// should return 404 not found
// curl localhost:3000/messages/whatever

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sha256 = require('js-sha256');
var map = {};

app.use(bodyParser.json());

app.get('/messages/:hashId', function (req, res) {
	var sha = req.params.hashId;
	if (map[sha]) {
		res.send({message: map[sha]});
	}
	else {
		res.sendStatus(404);
	}
});

app.post('/messages', function (req, res) {
	var message = req.body.message;
	var sha = sha256(message);
	map[sha] = message;
	res.send({digest: sha});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});