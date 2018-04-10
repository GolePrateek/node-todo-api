const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

// Todo.findOneAndRemove().then((doc)=>{
//   console.log(doc);
// });

Todo.findByIdAndRemove("5accbb5eae2b3ccca1f1969b").then((doc)=>{
  console.log(doc);
});
