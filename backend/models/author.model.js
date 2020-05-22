const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dob: Date,
    bio: String,
    pic: { data: Buffer, contentType: String },
    //authorImage:{type: String, required: true }
    //books: {type: mongoose.Schema.Types.ObjectId, ref:'book'}
})

const authorModel = mongoose.model('authorBook',authorSchema)

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

module.exports = authorModel
