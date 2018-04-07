var express = require("express");
var bodyParser = require("body-parser");
var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");
var {User} = require("./models/user");

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res) =>{
    var todo = new Todo({
        text: req.body.text,
        completed: req.body.completed,
        completedAt: req.body.completedAt
    });
    todo.save().then((doc)=>{
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.post('/user',(req,res) => {
   var user = new User({
       email: req.body.email,
       password: req.body.password
   });
   user.save().then((doc) => {
       res.send(doc);
   }, (e) => {
       res.status(400).send(e);
   });
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.log('Deu bom')
});