const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Connect to DB
mongoose.connect("mongodb://test:test@ds125555.mlab.com:25555/articles");
const articlesSchema = new mongoose.Schema({
    author: String,
    title: String,
    body: String
});

const Article = mongoose.model('Article', articlesSchema);

const urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){
    //render the view
    app.get('/', function(req, res){
        res.send("Hello world");
    });

    app.get('/blog', function(req, res){
        //get data from db and send to view
        Article.find({}, function(err, data){
            if (err) throw err;
            res.render('blog', {articles: data});
        });
    });

    app.get('/edit/:title', function(req, res){
        Article.find({title:req.params.title.replace(/\-/g, " ")}, function(err, data){
            res.render('edit', {article: data});
        });
    })

    //add a blog article
    app.post('/blog', urlencodedParser, function(req, res){
        //get data from the view, add to mongodb.
        const newArticle = Article(req.body).save(function(err, data){
            if (err) throw err;
            res.json(data);
        });
    });

    // delete a blog article
    app.delete('/blog/:title', function(req, res){
        //delete requested item from mongo db
        Article.find({title:req.params.title.replace(/\-/g, " ")}).remove(function(err,data){
            if (err) throw err;
            res.json(data);
        });
    });
};