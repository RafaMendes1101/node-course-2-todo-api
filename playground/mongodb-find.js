//const MongoClient = require('mongodb').MongoClient;

// ES6 feature
// var user = {name: 'Rafael', age: '31'};
// var {name} = user;// captura o valor de nome para o usuario
// console.log(name);

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
       return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');
    
     const db = client.db('TodoApp')
    
    //  db.collection('Todos').insertOne({
    //      text: 'Walk the dog',
    //      completed: true
    //  }, (err, result) => {
    //      if (err){
    //          return console.log('Erro porra', err);
    //  }
        
    //      console.log(JSON.stringify(result.ops, undefined, 2))
    //  });
    
    // db.collection('Todos').find({
    //     _id: new ObjectID('5ac893065f9e8b134f990821')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) =>{
    //     console.log('deu ruim', err)
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
        
    }, (err) =>{
        console.log('deu ruim', err)
    });
    
    //client.close();
});

