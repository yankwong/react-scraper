import React, { Component } from 'react';
import Articleslist from './Articleslist';
import API from '../utils/API.js';

export default class Saved extends Component {
  state = {
    articles : []
  };

  componentDidMount() {
    API.getSavedArticles()
    .then(res => {
      console.log('res', res);
      let savedArticles = [];
      res.data.map((obj) => {
        savedArticles.push(
          {
            id      : obj._id,
            title   : obj.title,
            teaser  : obj.teaser,
            url     : obj.url,
            date    : obj.date,
          }
        );
        this.setState({articles : savedArticles});
      })
    })
    .catch(err => console.log(err));
  }

  handleDelete(id) {
    API.deleteSavedArticle(id)
    .then(res => {
      let savedArticles = this.state.articles.filter((article) => {
        return article.id !== id
      });
      console.log('setting new state!!');
      this.setState({articles : savedArticles});
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Articleslist articles={this.state.articles} 
                          onDelete={(id) => this.handleDelete(id)}
            />
          </div>                
        </div>  
      </div>
    );
  }
};