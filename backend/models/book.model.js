const mongoose = require("mongoose");
const Schema = mongoose.Schema ;

const bookSchema = new mongoose.Schema({
  cover: { type: String },
  name: { type: String ,required:true , unique:true},
  author: { type:Schema.Types.ObjectId,ref :"Author"},
  category:{type:Schema.Types.ObjectId, ref: "categories"},
  details :{type:String},
  reviews : [{
    user: {type: Schema.Types.ObjectId, ref: "User"},
    rating: { type: Number },
    body: String,
    date: Date
  }],
  shelve:{type:Schema.Types.ObjectId,ref :"Shelve"}
});

bookSchema.methods = {
  getAvgRating: function() {
    return this.reviews.reduce((total, review) => review.rating + total, 0) / (this.reviews.length * 5) * 5
  },
  getReviews: function () {
      return this.reviews
  },
  getUserReview: function (userId) {
      if (userReview = this.getReviews().filter((review) => {
        if (typeof review.user === 'object' && review.user !== null) return review.user._id == userId;
        else review.user == userId
      }))
        return userReview[0];
      else return null;
  },
  getDataTransferObject: function (userId) {
    return {
      ...this._doc,
      avgRating: this.getAvgRating(),
      userReview: this.getUserReview(userId)? this.getUserReview(userId): {}
    };
  }
}

bookSchema.statics = {
  list: function () {
      return this.find({}).populate("author").populate("category").exec();
  },
  get: function (id) {
      return this.findById(id).populate("reviews.user").populate("author").populate("category").populate("shelve").exec();
  },
  constructData: function (req) {
      return req.file? {
          ...req.body,
          cover: "images/" + req.file.filename
      } : req.body;
  },
  search: function (query) {
      return this.find({name: new RegExp(query)}).exec();
  }
}

const bookModel = mongoose.model('Book', bookSchema);

module.exports = bookModel;
