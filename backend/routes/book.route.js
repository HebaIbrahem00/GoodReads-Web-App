const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const upload = multer({ dest: "uploads" }); //upload is a folder to upload all incoming files
const bookModel = require("../models/book.model");
const shelveModel = require("../models/shelve.model");

router.get("/", (req, res) => {
  bookModel
    .list()
    .then((books) => {
      res.json(
        books.map((book) => book.getDataTransferObject(req.query.user_id))
      );
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/search", (req, res) => {
  bookModel
    .search(req.query.q)
    .then((books) => {
      res.json(books.map((book) => book.getDataTransferObject()));
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/:id", (req, res) => {
  bookModel
    .get(req.params.id)
    .then((book) => {
      res.json(book.getDataTransferObject(req.query.user_id));
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/:id/reviews", (req, res) => {
  bookModel
    .get(req.params.id)
    .then((book) => {
      res.json(book.getReviews());
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/:id/review", multer().none(), (req, res) => {
  id = req.params.id;
  bookModel
    .get(id)
    .then((book) => {
      let userReview = book.getUserReview(req.body.user_id);
      let allReviews = book.getReviews();
      let updated = false;
      if (userReview) {
        if (req.body.rating) {
          userReview.rating = req.body.rating;
          updated = true;
        }
        if (req.body.body) {
          userReview.body = req.body.body;
          updated = true;
        }
        if (updated) userReview.date = Date.now();
      } else {
        if (!req.body.user_id)
          return res.status(400).json({
            err: "You need to specify userId",
          });

        userReview = {
          user: req.body.user_id,
          rating: req.body.rating ? req.body.rating : 1,
          body: req.body.body ? req.body.body : "",
          date: Date.now(),
        };
        allReviews = [userReview, ...allReviews];
        updated = true;
      }
      if (updated) {
        bookModel.updateOne(
          {
            _id: id,
          },
          {
            $set: {
              reviews: allReviews,
            },
          },
          (err, book) => {
            if (err) res.status(400).json(err);
            else {
              bookModel
                .get(id)
                .then((book) => {
                  res.json(book.getDataTransferObject(req.body.user_id));
                })
                .catch((err) => {
                  res.status(400).json(err);
                });
            }
          }
        );
      } else res.json(book.getDataTransferObject(req.body.user_id));
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//single here means single file
router.post("/", upload.single("cover"), (req, res) => {
  const book = new bookModel(bookModel.constructData(req));
  book.save((err, book) => {
    console.log(err);
    if (!err) return res.json(book.getDataTransferObject());
    res.json({
      code: "Database_ERROR",
    });
  });
});

router.patch("/:id", upload.single("cover"), (req, res) => {
  const id = req.params.id;
  bookModel.updateOne(
    {
      _id: id,
    },
    {
      $set: bookModel.constructData(req),
    },
    (err, book) => {
      if (err) res.status(400).json(err);
      else {
        bookModel
          .get(id)
          .then((book) => {
            res.json(book.getDataTransferObject());
          })
          .catch((err) => {
            res.status(400).json(err);
          });
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  bookModel.deleteOne(
    {
      _id: id,
    },
    (err, result) => {
      if (err) res.status(400).json(err);
      else res.json(result);
    }
  );
});

router.post("/:id/addtoshelve", (req, res) => {
  const userid = req.body._userid;
  const shelve = req.body._shelve;
  // const newShelve = req.body._newShelve;
  const bookid = req.body._bookid;
  console.log("requets dataa ", req.body);

  shelveModel.find({ name: shelve, user: userid }).exec((err, shelves) => {
    if (err) {
      console.log(err);
    } else {
      console.log("shelve db ", shelves);
      if (!shelves.length) {
        //that means the shelve is not found

        const newshelve = new shelveModel({
          user: { _id: req.body._userid },
          name: req.body._shelve,
          book: { _id: req.body._bookid },
        });
        newshelve.save(function (err,thenewshelve) {
          if (err) console.log("error saving new shelve model", err);
          else {
            console.log(" shelve saved");
            bookModel.findOneAndUpdate(
              { _id: bookid },
               { shelve: { _id: thenewshelve._id } } 
            ,
              (err,book) => {
                if (err) {
                  console.log("couldn't add shelve to book");
                }
                else{console.log("updated book",book)}
              
              
            return res.status(200).json({
              success: true,
              message: "book added to new shelve ",
            })});
          }
        });
      } else {
        //here the shelve is already
        shelveModel.findOneAndUpdate(
          { name: shelve, user: userid },
          { $push: { book: { _id: bookid } } },
          (err,shelvefound) => {
            if (err) {
              return res.status(404).json({ message: "ErrorA" });
            } else {
              console.log("shelve found",shelvefound)
             
              bookModel.findOneAndUpdate(
                { _id: bookid },
                 { shelve: { _id: shelvefound._id } } 
              ,
                (err,book) => {
                  if (err) {
                    console.log("couldn't add shelve to book");
                  }
                  else{console.log("updated book",book)}
                
                
              return res.status(200).json({
                success: true,
                message: "book added to existing shelve ",
              })});
            }
          }
        );
      }
    }
  });
});

module.exports = router;
