//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
       return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');
    const db = client.db('TodoApp')
    
    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Walk the dog'}).then((result) => {
    //     console.log(result);
    // });
    
    // delete one
    // db.collection('Todos').deleteOne({text: 'Have a beer'}).then((result) => {
    //     console.log(result);
    // })
    
    //findOne And Delete
    //  db.collection('Todos').findOneAndDelete({text: 'Something to do'}).then((result) => {
    //      console.log(result);
         
    //  });
     
    //  db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) =>{
    //     console.log('deu ruim', err)
    // });

    //client.close();
});

