const express = require ("express")
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const upload = multer({dest: 'uploads/'});//upload is a folder to upload all incoming files
const authorModel = require('../models/author.model')

router.get('/', (req, res) => {
    authorModel.list().then((authors) => {
        res.json(authors)
    }).catch((err) => {
        res.status(400).json(err);
    });
})

router.get('/:id', (req, res) => {
    authorModel.get(req.params.id).then((author) => {
        res.json(author)
    }).catch((err) => {
        res.status(400).json(err);
    });
})

router.get('/:id/books', (req, res) => {
    authorModel.get(req.params.id).then((author) => {
        res.json(author.getBooks())
    }).catch((err) => {
        res.status(400).json(err);
    });
})

//single here means single file
router.post('/', upload.single('pic'), (req, res)=>{
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

router.patch('/:id', upload.single('pic'), (req, res) => {
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

router.delete('/:id',(req, res)=>{
    const id = req.params.id
    authorModel.deleteOne({
        _id: id
    }, (err, result) => {
        if (err) res.status(400).json(err);
        else res.json(result)
    })
})

module.exports = router;
