var mongoose = require("mongoose");


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
});

// var newUser = new User({
//     email: "rafael@rafael.com",
//     password: "123456"
// });

// newUser.save().then((doc) =>{
//     console.log('Salvou porra',doc)
// }, (e) => {
//     console.log('Deu ruim', e)
// });

module.exports = {User}  ;