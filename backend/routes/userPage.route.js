const bookModel = require('../models/book.model');
const shelveModel = require('../models/shelve.model');
const authorModel = require('../models/author.model');
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/goodreads' ;


/*const author1 = new authorModel({firstName:"Robert", lastName:"Green"});
author1.save(function (err) {
    if (err) return handleError(err);
    else {console.log('saved') }
  });*/

  /*const book2 = new bookModel({name:"Mastery",author:{_id:"5ecb632270f76f7011fc1103"}});
book2.save(function (err) {
    if (err) return handleError(err);
    else {console.log(' book saved') }
  });*/

  /*const shelve4 = new shelveModel({name:"Currently Reading", book:{_id:"5ecb634cf016de706a98bd3a"}});
shelve4.save(function (err) {
    if (err) return handleError(err);
    else {console.log( ' shelve saved') }
  });*/


  bookModel.find({}).exec((err, books)=>  {
    if(!err) {  console.log("books db ", 
    books);}

  })

  shelveModel.find({}).exec((err, shelves)=>  {
    if(!err) {  console.log("shelve db ", 
    shelves);}

  })


  authorModel.find({}).exec((err, author)=>  {
    if(!err) {  console.log("author db ", 
    author);}

  })
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
    {  console.log("not all working") //don't forget to add user:userID to both finds at the end
        shelveModel.find({ name:shelve}).populate({path:'book',populate:[{path:'author', model:'Author'}]}).exec(( err , books)=>{
            if(!err) { res.json(books); console.log("sent rsponse")}

        })
    }
    else{
        console.log("all working")
        shelveModel.find({}).populate({path:'book',populate:[{path:'author', model:'Author'}]}).exec((err, books)=>  {
            if(!err) { res.json(books); console.log("sent rsponse");}
        
          }
        )
    }


})

router.patch('/',(req,res)=>   //for updating rating or shelve

{

})


module.exports = router;
