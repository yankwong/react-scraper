import React from 'react';
import Article from './Article';

const Articleslist = props => {
  return (
    props.articles.map((article, index) => {
      return (
        <Article 
          key={index}
          url={article.url}
          title={article.title} 
          teaser={article.teaser} 
          onSave={(article) => props.onSave(article)}/>
      );
    })
  );
}

export default Articleslist;