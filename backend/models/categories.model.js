const mongoose = require('mongoose');
const categoriesSchema=new mongoose.Schema({
    name:{type:String,required:true,unique:true},
});
    //Forgin Key ==>book:{type:mongoose.Schema.Types.ObjectId,ref:'Name of Model'}

categoriesSchema.statics = {
    search: function (query) {
        return this.find({name: new RegExp(query)}).exec();
    },
}
const CatrgoriesModel=mongoose.model("categories",categoriesSchema)

module.exports=CatrgoriesModel;
