const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dob: Date,
    bio: String,
    pic: String,
    books: [{
        type: mongoose.Schema.Types.ObjectId, ref:'Book'
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
        return this.findById(id).populate('books').exec();
    },
    constructData: function (req) {
        return req.file? {
            ...req.body,
            pic: "images/authors/" + req.file.filename
        } : req.body;
    },
    search: function (query) {
        let name = query.split(' ')
        let searchObject = (name.length == 2)? {
            $or: [{firstName: new RegExp(query)}, {lastName: new RegExp(query)}, {
                $and: [{firstName: new RegExp(name[0])}, {lastName: new RegExp(name[1])}]
            }]
        } : {
            $or: [{firstName: new RegExp(query)}, {lastName: new RegExp(query)}]
        }
        
        return this.find(searchObject).exec();
    },
}

module.exports = mongoose.model('author', authorSchema)
