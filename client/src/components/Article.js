import React from 'react';

const Article = props => {
  return (
    <div className="article wrapper">
      <div className="row title">
        <div className="col-10 titleCol">{props.title}</div>
        <div className="col-2 saveCol">
          <button className="saveBtn" onClick="#">Save Article</button>
        </div>
      </div>
      <div className="row teaser">
        <div className="col-12">
          <p>{props.teaser}</p>
        </div>
      </div>
    </div>
  );
}

export default Article;