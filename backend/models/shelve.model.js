const mongoose = require("mongoose");
const Schema = mongoose.Schema ;




const shelveSchema = new mongoose.Schema({
  user:{type: Schema.Types.ObjectId ,ref:"User"},
  book :  [{type: Schema.Types.ObjectId ,ref:"Book"}],
  name: { type: String ,required:true , unique:true},
 
});



const shelveModel = mongoose.model('Shelve',shelveSchema);

module.exports = shelveModel;