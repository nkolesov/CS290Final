var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');
app.set('port',6296);
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/',function(req, res){
	res.render('home');
});

app.get('/resume',function(req, res){
	res.render('resume');
});

app.get('/projects',function(req, res){
	res.render('projects');
});

app.get('/contact',function(req, res){
	res.render('contact');
});



app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});