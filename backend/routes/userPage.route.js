const bookModel = require('../models/book.model');
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/goodreads' ;




//Server EndPoints/ API 

router.post('/',(req,res,next)=>{    //this one shall be  get , 
   
    const userID = req.body.id
    const shelve = req.body.shelve ;
    let all =false;
    console.log("request data " , shelve , userID)
    console.log("connection received")
    console.log(req.body)
    if(shelve=="All") { all=true ;}

    if(!all)
    {  console.log("not all working")
        bookModel.find({user:userID , shelve: shelve}, ( err , books)=>{
            if(!err) {return res.json(books)}

        })
    }
    else{
        console.log("all working")
        bookModel.find({user :userID} ,(err, books)=>  {
            if(!err) {return res.json(books)}
      
          }
        )
    }


})

router.patch('/',(req,res)=>   //for updating rating or shelve

{

})


module.exports = router;