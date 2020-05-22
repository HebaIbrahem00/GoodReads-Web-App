const express = require ("express")
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const upload = multer({dest: 'uploads/'});//upload is a folder to upload all incoming files
const authorModel = require('../models/author.model')

router.get('/',(req, res)=>{
    res.send("listing all authors")
    res.send(`query string params = ${JSON.stringify(req.query)}`)
})

router.get('/:id',(req, res)=>{
    const id = req.params.id
    authorModel.findById(id, function (err, author) {
        if (err) res.status(401).json(err);
        else res.json(author);
    })
    // res.send(`listing author with id = ${id} and query string params = ${JSON.stringify(req.query)}`)
})

//single here means single file
router.post('/',upload.single('pic'),(req, res)=>{
    console.log(req.file)
    const authorData = req.body
    const author = new authorModel(authorData)
    const name = author.getFullName();
    console.log(name)
    author.save((err, author)=>{
        if(!err) return res.json(author);
        res.json({
            code: 'Database_ERROR'
        })
    })
})

router.patch('/:id',(req, res)=>{
    const id = req.params.id
    res.send(`edit an author with id = ${id}`)
})

router.delete('/:id',(req, res)=>{
    const id = req.params.id
    res.send(`delete a user with id = ${id}`)
})

module.exports = router;