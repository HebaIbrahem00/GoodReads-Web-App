const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dob: Date,
    bio: String,
    pic: { data: Buffer, contentType: String },
    books: {type: mongoose.Schema.Types.ObjectId, ref:'book'}
})

authorSchema.methods.getFullName = function(){
    return this.firstName +' '+ this.lastName
}

authorSchema.statics.getAuthorsByFullName = function(fullName, cb){
    const [firstName, lastName] = fullName.split(" ");
    this.find({firstName:firstName, lastName:lastName},cb)
}

// authorModel.getAuthorsByFullName('Menna Abdallah', (err, users)=>{
//     console.log(authors)
// })

const authorModel = mongoose.model('author',authorSchema)
module.exports = authorModel
