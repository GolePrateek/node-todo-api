//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
  if(error){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text:'Something to do.',
  //   completed:false
  // },(error,result)=>{
  //   if(error){
  //     return console.log('Unable to insert todo',error);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name : 'Prateek',
  //   age : 25,
  //   location : 'Raipur'
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert user',err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
  // });

  db.close();
});
