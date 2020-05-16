const mongoose = require('mongoose');
const categoriesSchema=new mongoose.Schema({
    name:{type:String,required:true,unique:true},
});
    //Forgin Key ==>book:{type:mongoose.Schema.Types.ObjectId,ref:'Name of Model'}

const CatrgoriesModel=mongoose.model("categories",categoriesSchema)

module.exports=CatrgoriesModel;
