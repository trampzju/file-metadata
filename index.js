var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

app.use(bodyParser.json()); 

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
});
 
app.post('/fileanalyse', upload.single('the-file'), function (req, res, next) {
  var file = req.file
  var result = {"fileSize": file.size};
  res.send(JSON.stringify(result));
});
 
var server = app.listen(process.env.PORT || 5000, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
 
});