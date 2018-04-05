//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
  if(error){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID("5ac4cc4e60a607e88e0d0ee5")
  // }).toArray().then((docs)=>{
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err)=>{
  //   console.log('Unable to fetch todos',err);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos Count ${count}`);
  // }, (err)=>{
  //   console.log('Unable to fetch todos',err);
  // });

  db.collection('Users').find({name:'Prateek'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  }, (err)=>{
    console.log('Unable to fetch todos',err);
  });

  //db.close();
});
