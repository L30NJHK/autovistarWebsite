import { NavLink } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? 'navbar-btn active' : 'navbar-btn';

  return (
    // Main navbar section
    <nav className="nav">
      <nav className="navbar-section">
        <div className="navbar-spacing-div">
          <NavLink className="navbar-link" to="/">
            <span className="navbar-title ">Autovista</span>
          </NavLink>
          <div className="navbar-right-div">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/cars" className={linkClass}>
              Browse Cars
            </NavLink>
            <NavLink to="/saved" className={linkClass}>
              <div className="fav">
                Saved Cars <FaHeart className="heart" />
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
    </nav>
  );
};
export default Navbar;
