const router = require('express').Router();
const CategoriesModel = require('../models/categories.model');
const multer = require("multer");
const authorModel = require('../models/author.model')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null,file.originalname);
      }
    });
const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ||file.mimetype === 'image/jpg') {
        cb(null, true);
    } else {
        cb(new Error('File Not Image '), false);
    }
    };
const upload = multer({
    storage:storage,
    limits: {
            fileSize: 1024 * 1024 * 5
      },
    fileFilter: fileFilter
});

router.get('/category',(req,res)=>{
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
router.post('/category',(req,res)=>{
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
router.post('/category/update/:id',(req,res)=>{
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
router.delete('/category/:id',(req,res)=>{
    console.log("delete Method==>/categories/")
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
router.get('/author', (req, res) => {
    authorModel.list().then((authors) => {
        res.json(authors)
    }).catch((err) => {
        res.status(400).json(err);
    });
})
/*router.post('/',upload.single('pic'),(req, res)=>{
    console.log(req.file)
    const authorData =req.body
    const author = new authorModel(authorData)
    author.pic=req.file.path;
        author.save((err, author)=>{
        if(!err) {return res.json(author);}
        console.log(err);
        res.json({
            code: 'Database_ERROR'
        })
    })
})*/
//single here means single file
router.post('/author', upload.single('pic'), (req, res)=>{
    const author = new authorModel(authorModel.constructData(req));
    const name = author.getFullName();
    console.log(name)
    author.save((err, author)=>{
        if(!err) return res.json(author);
        res.json({
            code: 'Database_ERROR'
        })
    })
})

router.patch('/author/:id', upload.single('pic'), (req, res) => {
    const id = req.params.id
    authorModel.updateOne({
        _id: id
    }, {
        $set: authorModel.constructData(req)
    }, (err, author) => {
        if (err) res.status(400).json(err);
        else {
            authorModel.get(id).then((author) => {
                res.json(author)
            }).catch((err) => {
                res.status(400).json(err);
            });
        }
    })
})

router.post('/update/:id', upload.single('pic'), (req, res) => {
    const id = req.params.id
    authorModel.updateOne({
        _id: id
    }, {
        $set: authorModel.constructData(req)
    }, (err, author) => {
        if (err) res.status(400).json(err);
        else {
            authorModel.get(id).then((author) => {
                res.json(author)
            }).catch((err) => {
                res.status(400).json(err);
            });
        }
    })
})

router.delete('/author/:id',(req, res)=>{
    const id = req.params.id
    authorModel.deleteOne({
        _id: id
    }, (err, result) => {
        if (err) res.status(400).json(err);
        else res.json(result)
    })
})

module.exports = router;
