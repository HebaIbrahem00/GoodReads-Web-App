const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dob: Date,
    bio: String,
    pic: URL,
    books: {type: mongoose.Schema.Types.ObjectId, ref:'book'}
})

const authorModel = mongoose.model('author',authorSchema)

authorSchema.methods.getFullName = function(){
    return this.firstName +' '+ this.lastName
}

authorSchema.statics.getAuthorsByFullName = function(fullName, cb){
    const [firstName, lastName] = fullName.split(" ");
    this.find({firstName:firstName, lastName:lastName},cb)
}

const authorModel = mongoose.model('author', authorSchema)

authorModel.getAuthorsByFullName('Menna Abdallah', (err, users)=>{
    console.log(authors)
})

module.exports = authorModel
