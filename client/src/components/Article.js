import React, { Component } from 'react';

class Article extends Component {

  handleSave(event) {
    event.preventDefault();
    this.props.onSave({
      title  : this.props.title,
      teaser : this.props.teaser,
      url    : this.props.url,
      date   : this.props.date,
    });
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.onDelete(this.props.id);
  }

  doRenderButton() {
    if (this.props.onSave) {
      return (
        <button className="saveBtn" onClick={(event) => this.handleSave(event)}>Save Article</button>
      );
    }
    else {
      return (
        <button className="deleteBtn" onClick={(event) => this.handleDelete(event)}>Delete Article</button>
      );
    }
  }
  
  render() {
    return (
      <div className="article wrapper">
        <div className="row title">
          <div className="col-10 titleCol">{this.props.title}</div>
          <div className="col-2 saveCol">
            { this.doRenderButton() }
          </div>
        </div>
        <div className="row teaser">
          <div className="col-12">
            <p>{this.props.teaser}</p>
            <p>{this.props.url}</p>
            <p>{this.props.date}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Article;