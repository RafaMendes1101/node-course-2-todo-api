const _ = require("lodash");
const express = require("express");
const bodyParser = require("body-parser");
const {ObjectID} = require("mongodb");
const {mongoose} = require("./db/mongoose");
const {Todo} = require("./models/todo");
const {User} = require("./models/user");


var app = express();
const port = process.env.PORT || 3000;
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

app.get('/todos', (req,res) =>{
   Todo.find().then((todo) => {
       res.send({todo});
   }, (e) => {
       res.status(400).send(e);
   }) ;
});

app.get('/todos/:id', (req,res) => {
    var id = req.params.id;
    
   if (!ObjectID.isValid(id)){
       return res.status(404).send();
   } 
   Todo.findById(id).then((todo) => {
       if(!todo) {
           return res.status(404).send();
       }
       
       res.send({todo});
       
   }).catch((e) => {
       res.status(400).send();
   })
});

app.delete('todos/:id', (req,res) => {
    var id=req.params.id;
    
    if(!ObjectID.isValid(id)){
        return res.status(400).send();
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});
        
    }).catch((e) => {
        res.status(400).send();
    });
});

app.patch('todos/:id',(req,res) =>{
   var id = req.params.id;
   var body = _.pick(req.body, ['text', 'completed']);
   
    if(!ObjectID.isValid(id)){
        return res.status(400).send();
    }
    
    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }
    
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    })
});

app.listen(process.env.PORT, process.env.IP, () => {
    
    console.log(`Started at port ${port}`);
});

module.exports = {app};