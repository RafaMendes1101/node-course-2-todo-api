//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
       return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');
    const db = client.db('TodoApp')
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5ac89eb4cb38ed15887c4ca7")
    // }, {
    //  $set: {
    //      completed: false
    //  }
    // }, {
    //     returnOriginal: false
    // }).then((result) =>{
    //     console.log(result);
    // });

db.collection('Users').findOneAndUpdate({_id: new ObjectID("5ac8aad15f826418a8f63912")},{
    $set: {
        location: 'Brasil'
    } , 
        $inc: {
            age: 1
        }
    },{
}).then((result) =>{
    console.log(result);
});

    //client.close();
});

