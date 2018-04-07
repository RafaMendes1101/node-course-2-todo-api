var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var User = mongoose.model('User',{
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    }
})

var newUser = new User({
    email: "rafael@rafael.com",
    password: "123456"
});

newUser.save().then((doc) =>{
    console.log('Salvou porra',doc)
}, (e) => {
    console.log('Deu ruim', e)
});


// var otherTodo = new Todo({});

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined,2));
// }, (e) => {
//     console.log('Deu ruim',e);
// });

//user

