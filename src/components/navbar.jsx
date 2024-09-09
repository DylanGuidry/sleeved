import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../images/1337497_game_go_play_pikachu_pokemon_icon.png'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger shadow-sm custom-gradient">
      <div className="container-fluid">
        <Link className="navbar-brand py-2 px-3" to="/">
          <img src={logo} alt="Logo" style={{ height: '50px' }} /> 
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;