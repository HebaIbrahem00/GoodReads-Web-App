const bookModel = require('../models/book.model');
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");


mongoose.connect(DB_URL,{useNewUrlParser:true},(err)=>

{
    if(!err){}
    else{

    }
})

//Server EndPoints/ API 
router.get('/',(req,res,next)=>{  
    const userID ;
    const shelve ;
    const all =false;

    if(shelve=="All") { all=true ;}

    if(!all)
    {
        bookModel.find({user:userID , shelve: shelve}, ( err , books)=>{
            if(!err) {return res.json(books)}

        })
    }
    else{
        bookModel.find({user :userID} ,(err, books)=>  {
            if(!err) {return res.json(books)}
      
          }
        )
    }


})

router.patch('/',(req,res)=>   //for updating rating or shelve

{

})

