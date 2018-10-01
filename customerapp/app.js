
var express = require("express");
var bodyParser = require("body-parser");

var path = require ("path");

var app = express();

// var logger = function(req,res, next){
//     console.log("Logging....");
//     next();
// }

// app.use(logger);

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// app.use(express.static(path.join(__dirname, 'public')));
//nodemon not working when i have the default dir , it always redirect to the default


// var person = [
//     {
//         name: 'Gaurav',
//         Age : 36
//     },
//     {

//         name: "Sandy",
//         Age : 45
//     }

// ]


app.get('/' , function(req,res){
    res.render("index.ejs");
    // res.json(person);
});

app.listen(3000, function(){
    console.log("Server started at port  : 3000")
})
