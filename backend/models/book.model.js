const mongoose = require("mongoose");
const Schema = mongoose.Schema ;




const bookSchema = new mongoose.Schema({
  user:{type: Schema.Types.ObjectId ,ref:"User"},
  cover: { type: String },
  name: { type: String ,required:true , unique:true},
  //author: { type:Schema.Types.ObjectId,ref :"Author"},
  avgRating: { type: Number },
  rating: { type: Number },

  category:{type:Schema.Types.ObjectId,ref :"categories"},
  details :{type:String},
  reviews : [{type :Object}] //each object key:value may be  username-review or fullname:review

});



bookSchema.methods.whatever = function(){

}

const bookModel = mongoose.model('Book',bookSchema);

module.exports = bookModel;