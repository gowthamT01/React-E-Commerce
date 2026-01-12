import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="header-logo">
        <h1>GrowTech</h1>
      </div>

      <div className="header-body">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>

      <div className="sign-in">
        <button>Sign Up</button>
      </div>

      <div className="screen-mode">
        <select name="screen-mode" id="screen-mode">
          <option value="light">☀️</option>
          <option value="dark">🌙</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
