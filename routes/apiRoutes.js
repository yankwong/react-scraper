// const axios = require("axios");
const router  = require("express").Router();
const DB      = require('../modules/db.js');
const Article = require('../models/Article');


router.get('/health-check', (req, res) => {
  res.json({
    message: 'Everything is good'
  })
});


router.get('/articles', (req, res) => {
  Article.find({}, function(err, docs) {
    if (!err) {
      res.json(docs);
    }
    else {
      throw err;
    }
  });
});

// save an article to mongo
router.post('/articles', (req, res) => {
  Article.create({
    title : req.body.title,
    date  : req.body.date,
    teaser : req.body.teaser,
    url : req.body.url
  })
  .then(function() {
    res.status(200);
  })
});

router.post('/delete-article/:aid', (req, res) => {
  Article.findByIdAndRemove(req.params.aid, function (err, todo) {
    if (err) {
      // Send Failure Header
      console.log(err);      
      res.sendStatus(400);
    } 
    else {
      console.log('successfully deleted!');
      res.sendStatus(200);
    }
  });
});

module.exports = router;
