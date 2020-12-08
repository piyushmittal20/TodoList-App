var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/views'));



app.get('/', function(req, res) {
    res.sendFile('index.html')
})

app.use('/api/todos', todoRoutes);


app.listen(3000, function() {
    console.log("Server started")
});