const bookModel = require("../models/book.model");
const shelveModel = require("../models/shelve.model");
const authorModel = require("../models/author.model");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/goodreads";

/*const author = new authorModel({firstName:"Ahmed", lastName:"Khaled Tawfiq"});
author.save(function (err) {
    if (err) return handleError(err);
    else {console.log(' author saved') }
  });*/

/*const book = new bookModel({name:"Utopia",author:{_id:"5ecd85df9f755517e6397090"}});
book.save(function (err) {
    if (err) return handleError(err);
    else {console.log(' book saved') }
  });*/

/*const shelve = new shelveModel({name:"Currently Reading", book:{_id:"5ecd8611406c231844a0e5cd"}});
shelve.save(function (err) {
    if (err) return handleError(err);
    else {console.log( ' shelve saved') }
  });*/

bookModel.find({}).exec((err, books) => {
  if (!err) {
    console.log("books db ", books);
  }
});

shelveModel.find({}).exec((err, shelves) => {
  if (!err) {
    console.log("shelve db ", shelves);
  }
});

authorModel.find({}).exec((err, author) => {
  if (!err) {
    console.log("author db ", author);
  }
});
/*shelveModel.deleteMany({  }, function (err) {
    if (err) return handleError(err);
    // deleted at most one tank document
  });*/
//Server EndPoints/ API

router.post("/", (req, res, next) => {
  //this one shall be get ,

  const userID = req.body.id;
  const shelve = req.body.shelve;
  let all = false;
  console.log("request data ", shelve, userID);
  console.log("connection received");
  console.log(req.body);
  if (shelve == "All") {
    all = true;
  }

  if (!all) {
    console.log("not all working"); //don't forget to add user:userID to both finds at the end
    shelveModel
      .find({ name: shelve })
      .populate({
        path: "book",
        populate: [{ path: "author", model: "Author" }],
      })
      .exec((err, books) => {
        if (!err) {
          res.json(books);
          console.log("sent rsponse");
        }
      });
  } else {
    console.log("all working");
    shelveModel
      .find({})
      .populate({
        path: "book",
        populate: [{ path: "author", model: "Author" }],
      })
      .exec((err, books) => {
        if (!err) {
          res.json(books);
          console.log("sent rsponse");
        }
      });
  }
});

router.patch(
  "/",
  (
    req,
    res //for updating rating or shelve
  ) => {
    const userid = req.body._userid;
    const oldShelve = req.body._oldShelve;
    const newShelve = req.body._newShelve;
    const bookid = req.body._bookid;

    shelveModel.findOneAndUpdate({ name: oldShelve }).then((shelve) => {//don't forget to add user:userid to both finds at the end
      shelve.book.pull({ _id: bookid });
      shelve.save(function (err) {
        if (err) return handleError(err);
        else {
          shelveModel.findOneAndUpdate(
            { name: newShelve }, //don't forget to add user:userid to both finds at the end
            { $push: { book: { _id: bookid } } },
            (err) => {
              if (err) {
                return res.status(404).json({ message: "ErrorA" });
              }
              return res.status(200).json({
                success: true, //we better  send the success after both
                message: "successA",
              });
            }
          );

          console.log(" shelve updated");
        }
      });
    }); 
  }
);

module.exports = router;
