var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.listen(3000, function() {
  console.log('Listening on port 3000');
});

app.use(express.static('assets'));
app.use(bodyParser.json());

var messages = [];

app.get('/messages', function(request, response, next) {
  response.status(200).json({ messages : messages });
});

app.post('/messages', function (req, res, next) {
  messages.push({ message: req.body.message, time: new Date() });
  res.status(200).json({ messages: messages });
});
