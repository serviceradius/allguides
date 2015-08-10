//dependencies for each module used
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var app = express();


var dotenv = require('dotenv');
dotenv.load();

//Route files to load
var index = require('./routes/index');
var srguide = require('./routes/srguide');
var uccguide = require('./routes/uccguide');
var abguide = require('./routes/abguide');
var tssguide = require('./routes/tssguide');

//Configures the Template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());

//Routes
app.get('/', index.view);
app.get('/srguide', srguide.view);
app.get('/uccguide', uccguide.view);
app.get('/abguide', abguide.view);
app.get('/tssguide', tssguide.view);

//set environment ports and start application
app.set('port', process.env.PORT || 3000);
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});