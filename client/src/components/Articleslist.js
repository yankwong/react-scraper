import React from 'react';
import Article from './Article';

const Articleslist = props => {
  return (
    props.articles.map((article, index) => {
      if (props.onDelete) {
        return (
          <Article 
            key={index}
            url={article.url}
            title={article.title} 
            date={article.date} 
            teaser={article.teaser} 
            id={article.id}
            onDelete={(id) => props.onDelete(id)}
          />
        );
      }
      else {
       return (
          <Article 
            key={index}
            url={article.url}
            title={article.title} 
            date={article.date} 
            teaser={article.teaser} 
            onSave={(article) => props.onSave(article)}
          />
        ); 
      }
    })
  );
}

export default Articleslist;