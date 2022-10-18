import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";

const Navbar = () => {
  const globalCartCount = useSelector((state) => state.cartStore.cartCount);
  return (
    <div>
      <div className="navbar navbar-dark bg-dark navbar-expand position-fixed w-100">
        <div className="container">
          <div className="navbar-brand logo">Dream</div>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item mx-2 cart-link">
              <Link className="nav-link" to="/cart">
                Cart
                <span className="badge ms-1">{globalCartCount}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
