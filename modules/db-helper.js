'use strict';

const db = require('./db');
const dataHelper = require('./data-helper');

// function getTodoList(callback) {
//     db.TodoList.findOne({}, function (error, data) {
//         if (error) {
//             callback(error);
//         } else {
//             const returnList = {
//                 id: data.data._id,
//                 todos: data.data.todos.map(dataHelper.documentToString),
//                 completed: data.data.completed.map(dataHelper.documentToString)
//             };

//             callback(error, returnList);
//         }
//     });
// }

function addArticle(article, callback) {
    db.Article.create(article)
    .then(function(dbNote) {
      // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
    })
}
module.exports = {
    // getTodoList: getTodoList
    addArticle : addArticle
}