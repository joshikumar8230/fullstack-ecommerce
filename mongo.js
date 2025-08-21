const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://joshikumar:jackfrost23@react.jjrb5ty.mongodb.net/');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
   console.log("connection succeeded");
})
const UserSchema= new mongoose.Schema({
    email: {type:String,required:true},
    password: {type:String,required:true},
    name: {type:String,required:true},
    mno: {type:String,required:true}
  });
  const product_Schema = new mongoose.Schema({});
  const Order_Schema = new mongoose.Schema({
      email: {type:String,required:true},
    product: {type:String,required:true},
    address: {type:String,required:true}
  });
  const collection= mongoose.model("collection",UserSchema);
  const orders= mongoose.model("orders",Order_Schema);
   const details= mongoose.model("product_details",product_Schema);
  module.exports = {details,collection,orders}