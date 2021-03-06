const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "5acb8459de9d4d6049aa6e1b";

if(!ObjectID.isValid(id)){
  console.log('ID not valid.');
}

// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log("todos",todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log("todo",todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log("Id not found.");
//   }
//   console.log("findById",todo);
// }).catch((e)=>{
//   console.log(e);
// });

User.findById("5ac7c2e7eb9b2b60353acbd2").then((user)=>{
  if(!user){
    return console.log("Id not found.");
  }
  console.log(JSON.stringify(user,undefined,2));
}).catch((e)=>{
  console.log(e);
});
