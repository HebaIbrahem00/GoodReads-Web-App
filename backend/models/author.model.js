const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dob: Date,
    bio: String,
    pic: String,
    books: [{
        type: mongoose.Schema.Types.ObjectId, ref:'book'
    }]
})

authorSchema.methods = {
    getFullName: function () {
        return this.firstName + ' ' + this.lastName
    },
    getBooks: function () {
        return this.books
    }
}

authorSchema.statics = {
    list: function () {
        return this.find({}).exec();
    },
    get: function (id) {
        return this.findById(id).exec();
    },
    constructData: function (req) {
        return req.file? {
            ...req.body,
            pic: "images/" + req.file.filename
        } : req.body;
    }
}

module.exports = mongoose.model('Author', authorSchema)
