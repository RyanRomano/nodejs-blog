const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const blogController = require('./controllers/blogController');
const expressSanitizeEscape = require('express-sanitize-escape');

var app = express();

//Set Template Engine EJS
app.set('view engine', 'ejs');

//Set Static Files
app.use(express.static('./public'));
app.use(expressSanitizeEscape.middleware())
//Fire Controller
blogController(app);

//Listen to port
var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('You are listening to port 3000');
});
