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
    

    //  db.collection('Users').insertOne({
    //     name: 'Lucas',
    //     age: '30',
    //     location: 'Leeds'
    // }, (err, result) => {
    //     if (err){
    //         return console.log('Erro porra', err);
    //     }
        
    //   console.log(result.ops[0]._id.getTimestamp());
    //   console.log(JSON.stringify(result.ops, undefined, 2))
    // });
    
    var age = '41';
    
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5ac897d28b9c02143601be0c")
        
    }).then((result) => {
        console.log(result);
    });
    
    db.collection('Users').find().count().then((count) => {
        console.log(`Users count: ${count}`);
      
    }, (err) =>{
        console.log('deu ruim', err)
    });
    
    db.collection('Users').find().toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined,2));
      
    }, (err) =>{
        console.log('deu ruim', err)
    });
    
   // client.close();
});

