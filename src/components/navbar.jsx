import './navbar.css';
import logo from '../images/1337497_game_go_play_pikachu_pokemon_icon.png';
import user from '../images/user.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger shadow-sm custom-gradient" style={{ backgroundColor: 'transparent' }}>
        <div className="container-fluid">
          <Link className="navbar-brand py-2 px-3" to="/">
            <img src={logo} alt="Logo" style={{ height: '50px' }} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item d-flex align-items-center" style={{ marginRight: '10px' }}>
                <Link className="nav-link custom-nav-link" to="/" style={{ padding: '5px' }}>Profile</Link>
              </li>
              <li className="nav-item d-flex align-items-center" style={{ height: '50px' }}>
                <form className="d-flex align-items-center" role="search">
                  <input className="form-control me-2" type="search" aria-label="Search"
                    style={{ height: '30px', borderRadius: '20px' }} />
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;