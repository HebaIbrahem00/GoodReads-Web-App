const router = require('express').Router();
const CategoriesModel = require('../models/categories.model');
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
router.get('/:id',(req,res)=>{
     res.send(`editing a post with id =${req.params.id}`)
})


module.exports = router;
