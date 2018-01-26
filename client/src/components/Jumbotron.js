import React from 'react';

const Jumbotron = props => {
  return (
    <div className={props.classes + " jumbotron jumbotron-fluid"}>
      <h1 className="text-center">
        <strong><i className="fa fa-newspaper-o" aria-hidden="true"></i> New York Times Search</strong>
      </h1>
    </div>
  );
}
export default Jumbotron;