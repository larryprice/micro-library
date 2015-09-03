var express = require('express'),
    jade = require('jade');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.render('entry.jade');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
