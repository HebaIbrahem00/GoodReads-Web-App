const bookModel = require('../models/book.model');
const shelveModel = require('../models/shelve.model');
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/goodreads' ;


/*const shelve = new shelveModel({name:"Read"});
shelve.save(function (err) {
    if (err) return handleError(err);
    else {console.log('saved') }
  });*/


//Server EndPoints/ API 

router.post('/',(req,res,next)=>{    //this one shall be get , 
   
    const userID = req.body.id
    const shelve = req.body.shelve ;
    let all =false;
    console.log("request data " , shelve , userID)
    console.log("connection received")
    console.log(req.body)
    if(shelve=="All") { all=true ;}

    if(!all)
    {  console.log("not all working")
        shelveModel.find({user:userID , name:shelve}).populate('book').exec(( err , books)=>{
            if(!err) { res.json(books); console.log("sent rsponse")}

        })
    }
    else{
        console.log("all working")
        shelveModel.find({user:userID}).populate('book').exec((err, books)=>  {
            if(!err) { res.json(books); console.log("sent rsponse");}
        
          }
        )
    }


})

router.patch('/',(req,res)=>   //for updating rating or shelve

{

})


module.exports = router;