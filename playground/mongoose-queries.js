const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// var id = '5ac9ee481a37451289a9232d';
// //console.log(ObjectID);

// if (!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//         if (!todos) {
//         return console.log("Id not found");
//     }
//     console.log('Find all Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//         if (!todo) {
//         return console.log("Id not found");
//     }
//     console.log('Find one Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log("Id not found");
//     }
//     console.log('Find Todo By ID', todo);
// }).catch((e) => console.log(e));


var id = '5ac9eb469f6497101e725f15';

User.findById('5ac9eb469f6497101e725f15').then((user) =>{
   if (!user){
       return console.log("User not found");
   } 
   console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});
