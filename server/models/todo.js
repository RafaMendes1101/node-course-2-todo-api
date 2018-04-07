var mongoose = require("mongoose");

var Todo = mongoose.model('Todo', {
  text:{
     type: String  ,
     required: true,
     minlength: 4,
     trim: true // remove the empty spaces
  },
  completed :{
      type: Boolean,
      default: false
  },
  completedAt: {
      type: Number,
      default: null
  }
});

// var newTodo = new Todo({
//     text: '  Cook  '
// });

// newTodo.save().then((doc) => {
//     console.log('Saved', doc)
// }, (e) => {
//     console.log('Burrice', e)
// });


module.exports = {Todo};

// var otherTodo = new Todo({});

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined,2));
// }, (e) => {
//     console.log('Deu ruim',e);
// });