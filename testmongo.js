const mongoose = require("mongoose")
const Article = require('./models/Article');

mongoose.Promise = Promise; // mongo came out before Promise is a thing, this will make mongoose use the default JS promise
mongoose.connect("mongodb://localhost/nyt-react", { // no need to use Robo 3T to manually make it
  useMongoClient: true
});

Article.create({
  title : 'test',
  date : '2010-12-12',
  url : 'google.com'
})
.then(function() {
  
})