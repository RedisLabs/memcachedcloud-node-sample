var express = require("express");
var logfmt = require("logfmt");
var memjs = require('memjs');

var client = memjs.Client.create(process.env.MEMCACHEDCLOUD_SERVERS, { 
  username: process.env.MEMCACHEDCLOUD_USERNAME, 
  password: process.env.MEMCACHEDCLOUD_PASSWORD 
}); 

var app = express();
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
  res.render('index.html');
});

app.get('/command', function(req, res) {
  switch (req.query.a) {
    case "set":
      client.set("welcome_msg", "Hello from Redis!", function(err, success) {
        res.send(success);
      });
      break;
    case "get":
      client.get("welcome_msg", function (err, value, key) {
        if (value != null) {
          res.send(value);
        } else {
          res.send("N/A");
        }
      });
      break;
    case "stats":
      client.stats(function (err, server, stats) {
        if (stats != null) {
          var stats_res = "";
          for (var key in stats) {
            stats_res += key + ": " + stats[key] + "<br/>";
          }
          res.send(stats_res);
       } else {
          res.send("Error");
        }
      });
      break;
    case "delete":
      client.delete("welcome_msg", function (err, success) {
        res.send(success); 
      });
      break;
    default:
      res.send("");
  }
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
