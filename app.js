var express = require('express');

var app = express();

var port = 3000;
app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res) {
  res.send("hello world");
});

app.get('/books', function(req, res) {
  res.send("Hello Books!")
});

app.listen(port, function(err) {
  console.log('running on port ' + port);
});
