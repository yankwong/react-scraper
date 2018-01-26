import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Form from './components/Form';
import Articleslist from './components/Articleslist';
import API from './utils/API.js';

import './App.css';

class App extends Component {
  state = {
    articles : [],
    query : ''
  };

  componentDidMount() {
    this.getArticles();
  }

  getArticles() {
    API.getArticles(this.state.query)
    .then(res => {
      let resultArticles = [];
      
      res.data.response.docs.map(element => {
        let title  = element.headline.main,
            teaser = element.snippet,
            url    = element.web_url;

        resultArticles.push({title: title, teaser : teaser, url : url})
      });

      this.setState({articles : resultArticles});
    })
    .catch(err => console.log(err));
  }

  handleSubmit(query) {
    this.setState({query : query}, () => {
      console.log('heyhey', this.state.query);
      this.getArticles();
    });
  };

  saveArticle(articleObj) {
    API.saveArticle(articleObj)
    .then(res => {
      console.log('from saveArticle', res);
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Form doSubmit={(query) => this.handleSubmit(query)} />
        <Articleslist articles={this.state.articles} 
                      onSave={(articleObj) => this.saveArticle(articleObj)}/>
      </div>
    );
  }
}

export default App;
