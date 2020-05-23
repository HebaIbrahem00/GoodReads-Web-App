const mongoose = require("mongoose");
const Schema = mongoose.Schema ;




const bookSchema = new mongoose.Schema({
  name: { type: String ,required:true , unique:true},
  details :{type:String},
  category:{type:Schema.Types.ObjectId,ref :"categories"},   
  cover: { type: String },
  author: { type:Schema.Types.ObjectId,ref :"Author"},
  avgRating: { type: Number },
  rating: { type: Number },
  reviews : [{type :Object}], //each object key:value may be  username-review or fullname:review
  user:{type: Schema.Types.ObjectId ,ref:"User"}
});



bookSchema.methods.whatever = function(){

}
bookSchema.statics = {
    list: function () {
        return this.find({}).exec();
    },
    get: function (id) {
        return this.findById(id).exec();
    },
    constructData: function (req) {
        return req.file? {
            ...req.body,
            cover: "images/" + req.file.filename
        } : req.body;
    }
}


const bookModel = mongoose.model('Book',bookSchema);

module.exports = bookModel;
