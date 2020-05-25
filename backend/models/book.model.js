const mongoose = require("mongoose");
const Schema = mongoose.Schema ;

const bookSchema = new mongoose.Schema({
  cover: { type: String },
  name: { type: String ,required:true , unique:true},
  author: { type:Schema.Types.ObjectId,ref :"author"},
  // category:{type:Schema.Types.ObjectId, ref: "categories"},
  details :{type:String},
  reviews : [{
    // user: {type: Schema.Types.ObjectId, ref: "User"},
    rating: { type: Number },
    body: String,
    date: Date
  }]
});

bookSchema.methods = {
  getAvgRating: function() {
    return this.reviews.reduce((total, review) => review.rating + total, 0) / (this.reviews.length * 5) * 5
  },
  getReviews: function () {
      return this.reviews
  },
  getDataTransferObject: function () {
    return {
      ...this._doc, avgRating: this.getAvgRating()
    };
  }
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
          cover: "images/books/" + req.file.filename
      } : req.body;
  },
  search: function (query) {
      return this.find({name: new RegExp(query)}).exec();
  },
}

const bookModel = mongoose.model('Book', bookSchema);

module.exports = bookModel;
