import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <nav className="navbar navbar-light bg-faded">
      <Link to="/" className="navbar-brand">React Scrapper</Link>

      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/saved">Saved Articles</Link>
        </li>
        <li className="nav-item">
          <button className="btn btn-primary scrapeBtn">Scrape New Articles!</button>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;