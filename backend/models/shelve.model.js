const mongoose = require("mongoose");
const Schema = mongoose.Schema ;

const bookModel = require('../models/book.model');


const shelveSchema = new mongoose.Schema({
  user:{type: Schema.Types.ObjectId ,ref:"User"},
  book :  [{type: Schema.Types.ObjectId ,ref:"Book"}],
  name: { type: String ,required:true },
 
});

shelveSchema.index({ name: 1, user: 1 }, { unique: true });

shelveSchema.methods.addShelve = function(){

}

shelveSchema.methods.getShelveBooks = function(){

}

const shelveModel = mongoose.model('Shelve',shelveSchema);

module.exports = shelveModel;