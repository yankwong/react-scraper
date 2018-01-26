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
    
}
module.exports = {
    // getTodoList: getTodoList
    addArticle : addArticle
}