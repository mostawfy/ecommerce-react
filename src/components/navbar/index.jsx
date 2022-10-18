import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar navbar-dark bg-dark navbar-expand position-fixed w-100">
        <div className="container">
          <div className="navbar-brand logo">Dream</div>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link class="nav-link" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link class="nav-link" to="/cart">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
