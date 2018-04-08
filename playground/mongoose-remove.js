const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
// const {User} = require("./../server/models/user");


Todo.remove({}).then((result) => {
    console.log(result);
});

Todo.findOneAndRemove({_id: '5ac9f68745c95e1a96cbe0e2'}).then((todo) => {
    console.log(todo);
})

Todo.findByIdAndRemove('5ac9f68745c95e1a96cbe0e2').then((todo) => {
   console.log(todo); 
});