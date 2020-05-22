const router = require('express').Router();
const BooksModel = require('../models/book.model');
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
    console.log("Get Method==>/Books/");
    console.log(req.body);
    //res.send("API is working properly");
    BooksModel.find({},(err,Books)=>{
        console.log("Find = "+Books);
        if(!err) return res.json(Books);
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
    console.log("Post Method==>/Books/");
    const booksData=req.body;
    const book =new BooksModel(booksData)   
    book.save((err,book)=>{
            if(!err) return res.json(book);
            res.json({
                content : 'error'
             })
        })
    //mongoose.disconnect();
})

router.post('/update/:id',(req,res)=>{
    console.log("Edit Method==>/categories/");
    const booksData=req.body;
    const query={_id:req.params.id} 
   BooksModel.update(query,booksData,(err)=>{
           if(!err) return res.json(booksData);
            res.json({
                content : 'error'
             })
        })
    //mongoose.disconnect();
})
router.delete('/:id',(req,res)=>{
   let query={_id:req.params.id} 
 BooksModel.remove(query,(err)=>{
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
