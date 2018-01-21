import React from 'react';
import Article from './Article';

const Articleslist = props => {
  return (
    props.articles.map((article) => {
      return (
        <Article 
          title={article.title} 
          teaser={article.teaser} />
      );
    })
  );
}

export default Articleslist;