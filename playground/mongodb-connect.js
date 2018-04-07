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
    
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err){
    //         return console.log('Erro porra', err);
    //     }
        
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });
    
     db.collection('Users').insertOne({
        name: 'Rafael',
        age: 31,
        location: 'Leeds'
    }, (err, result) => {
        if (err){
            return console.log('Erro porra', err);
        }
        
      console.log(result.ops[0]._id.getTimestamp());
      console.log(JSON.stringify(result.ops, undefined, 2))
    });
    
    // var age = '41';
    
    // db.collection('Users').find({age: age}).count().then((count) => {
    //     console.log(`Users count: ${count}`);
      
    // }, (err) =>{
    //     console.log('deu ruim', err)
    // });
    
    // db.collection('Users').find({age: age}).toArray().then((docs) => {
    //     console.log('Users');
    //     console.log(JSON.stringify(docs, undefined,2));
      
    // }, (err) =>{
    //     console.log('deu ruim', err)
    // });
    
   // client.close();
});