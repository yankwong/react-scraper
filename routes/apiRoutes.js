// const axios = require("axios");
const router  = require("express").Router();
const DB      = require('../modules/db.js');

// router.get("/recipes", (req, res) => {
//   axios
//     .get("http://www.recipepuppy.com/api/", { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

router.get('/api/articles', (req, res) => {
  console.log('GET API')
});

// save an article to mongo
router.post('/api/articles', (req, res) => {
  console.log('from API: ', req, res);
  // Article.create({
  //   title : 'test',
  //   date : '2010-12-12',
  //   url : 'google.com'
  // })
  // .then(function() {
    
  // })
});

router.delete('/api/articles', (req, res) => {

});

module.exports = router;
