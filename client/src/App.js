import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Articleslist from './components/Articleslist';

import './App.css';

class App extends Component {
  state = {
    // call your own api to grab articles
    articles : [
      {
        title   : 'The Shadow Safety Net',
        teaser  : 'Federal and local governments are not doing their jobs, so nonprofit organizations are working to fill the void.'
      },
      {
        title   : 'Review: Beware of Family Members Bearing Gifts',
        teaser  : 'A year later, these Women’s March symbols have found new purpose as stuffed toys and talismans (when they’re not being worn, that is).'
      }
    ]
  };

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Articleslist articles={this.state.articles}/>
      </div>
    );
  }
}

export default App;
