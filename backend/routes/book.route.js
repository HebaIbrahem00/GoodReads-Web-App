const express = require ("express")
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const upload = multer({dest: 'uploads'});//upload is a folder to upload all incoming files
const bookModel = require('../models/book.model')

router.get('/', (req, res) => {
    bookModel.list().then((books) => {
        res.json(books.map((book) => book.getDataTransferObject()))
    }).catch((err) => {
        res.status(400).json(err);
    });
})

router.get('/search', (req, res) => {
    bookModel.search(req.query.q).then((books) => {
        res.json(books.map((book) => book.getDataTransferObject()))
    }).catch((err) => {
        res.status(400).json(err);
    });
})

router.get('/:id', (req, res) => {
    bookModel.get(req.params.id).then((book) => {
        res.json(book.getDataTransferObject())
    }).catch((err) => {
        res.status(400).json(err);
    });
})

router.get('/:id/reviews', (req, res) => {
    bookModel.get(req.params.id).then((book) => {
        res.json(book.getReviews())
    }).catch((err) => {
        res.status(400).json(err);
    });
})

//single here means single file
router.post('/', upload.single('cover'), (req, res)=>{
    const book = new bookModel(bookModel.constructData(req));
    book.save((err, book)=>{
        console.log(err);
        if(!err) return res.json(book);
        res.json({
            code: 'Database_ERROR'
        })
    })
})

router.patch('/:id', upload.single('cover'), (req, res) => {
    const id = req.params.id
    bookModel.updateOne({
        _id: id
    }, {
        $set: bookModel.constructData(req)
    }, (err, book) => {
        if (err) res.status(400).json(err);
        else {
            bookModel.get(id).then((book) => {
                res.json(book)
            }).catch((err) => {
                res.status(400).json(err);
            });
        }
    })
})

router.delete('/:id',(req, res)=>{
    const id = req.params.id
    bookModel.deleteOne({
        _id: id
    }, (err, result) => {
        if (err) res.status(400).json(err);
        else res.json(result)
    })
})

module.exports = router;
