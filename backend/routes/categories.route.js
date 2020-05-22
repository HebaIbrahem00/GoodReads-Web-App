const router = require('express').Router();
const CategoriesModel = require('../models/categories.model');
const mongoose = require('mongoose');




const connectDataBase=()=>{
        mongoose.connect('mongodb://localhost:27017/goodreads',{
            useNewUrlParser: true ,
            useUnifiedTopology: true
        },(err)=>{
            if(!err){
                return console.log("Sucessfully Connected DataBase")
            }
            console.log(err);
        })
}

//const mongoose = require('mongoose');
//const DB_URL = 'mongodb://localhost:27017/goodreads'
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

/*router.get('/:id',(req,res)=>{
    // res.send(`editing a post with id =${req.params.id} `
})*/
router.post('/',(req,res)=>{
    //connectDataBase();
    console.log("Post Method==>/categories/");
    const categoriesData=req.body;
    const category =new CategoriesModel(categoriesData)   
    category.save((err,category)=>{
            if(!err) return res.json(category);
            res.json({
                content : 'error'
             })
        })
    //mongoose.disconnect();
})

/*router.patch('/',(req,res)=>{
    res.send('editing a Categories Model')
})

router.delete('/',(req,res)=>{
    res.send('Deleting a Categories Model')
})*/
router.post('/update/:id',(req,res)=>{
    let categoriesData={}
    console.log("Edit Method==>/categories/");
    categoriesData.name=req.body.name;
   let query={_id:req.params.id} 
   CategoriesModel.update(query,categoriesData,(err)=>{
           if(!err) return res.json(categoriesData);
            res.json({
                content : 'error'
             })
        })
    //mongoose.disconnect();
})
router.delete('/:id',(req,res)=>{
   let query={_id:req.params.id} 
 CategoriesModel.remove(query,(err)=>{
           if(!err){ res.json({
			   content : 'Success  Deleting'
			})
		}
	   else{res.json({
			   content : 'Failure  Deleting'
	    })} 
        })
})

module.exports = router;
