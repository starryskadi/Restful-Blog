var express = require('express'),
    bodyParser = require('body-parser'),
    methodOveride = require('method-override'),
    expressSanitizer = require('express-sanitizer'),
    mongoose = require('mongoose');

var app = express();

// APP CONFIG
mongoose.connect('mongodb://192.168.0.1:27017/restful_blog_app',{useNewUrlParser: true});
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOveride("_method"));
app.use(expressSanitizer()); // Use it under body parser
// Mongoose Model Config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now} // set default time
});

var Blog = mongoose.model('Blog', blogSchema);


app.get('/', function(req,res) {
    res.redirect('blogs');
})

// INDEX ROUTE
app.get('/blogs', function(req,res) {
    Blog.find({}, function (error, result) {
        if(error) {
            console.log("Error!");
        }
        else {
            res.render('index', {blogs: result});
        }
    });
});

// NEW ROUTE
app.get('/blogs/new', function(req,res) {
    res.render('new')
});

// CREATE ROUTE
app.post('/blogs', function(req,res) {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function(error,data) {
        if (error) {
            res.render('new');
        } else {
            res.redirect('/blogs');
        }
    })
})
//Show Page
app.get('/blogs/:id', function(req,res) {
    Blog.findById(req.params.id, function(error,result) {
        if(error) {
            res.redirect('/blogs');            
        } else {
            res.render('show', {blog: result});
        }
    })
})
// EDIT PAGE
app.get('/blogs/:id/edit',function(req,res) {
    Blog.findById(req.params.id,function(error,result) {
        if(error) {
            res.redirect('/blogs');
        } else {
            res.render('edit', {blog: result});
        }
    })    
})
// UPDATE ROUTE
app.put('/blogs/:id' , function(req,res) {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(error, result) {
        if (error) {
            res.redirect('/blogs');
        } else {
            res.redirect('/blogs/' + req.params.id);
        }
    }) // id New Data, call back
})
// DELETE ROUTE
app.delete('/blogs/:id', function(req,res) {
    Blog.findByIdAndDelete(req.params.id, function(error) {
        if(error) {
            res.redirect('/blogs');
        } else {
            res.redirect('/blogs');
        }
    })
});
app.listen(3000, function() {
    console.log("Server is Running");
})

