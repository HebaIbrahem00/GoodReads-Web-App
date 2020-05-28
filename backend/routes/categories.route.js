const router = require('express').Router();
const CategoriesModel = require('../models/categories.model');
const bookModel = require("../models/book.model");
router.get('/',(req,res)=>{
    console.log("Get Method==>/categories/");
    console.log(req.body);
    //res.send("API is working properly");
    CategoriesModel.find({},(err,Categories)=>{
        console.log("Find = "+Categories);
        if(!err) return res.json(Categories);
        res.json({
            code:'Error DataBase =>GetMethod'
        });

    })
})

router.get('/search', (req, res) => {
    CategoriesModel.search(req.query.q).then((categories) => {
        res.json(categories)
    }).catch((err) => {
        res.status(400).json(err);
    });
})

router.get('/:id',(req,res)=>{
     res.send(`editing a post with id =${req.params.id}`)
})

router.post('/:id',(req,res)=>{
    const categoryid =req.body.catid ;

    bookModel
    .find({category:categoryid})
    .populate('author')
    .exec((err, books) => {
      if (!err) {
        res.json(books);
        console.log("sent rsponse");
      }
    });


})
module.exports = router;
