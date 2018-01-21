import React from 'react';

const Navbar = props => {
  return (
    <nav className="navbar navbar-light bg-faded">
      <a className="navbar-brand" href="#">React Scrapper</a>

      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Saved Articles</a>
        </li>
        <li className="nav-item">
          <button className="btn btn-primary scrapeBtn">Scrape New Articles!</button>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;