import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero vh-100">
      <div className="container text-end py-5 d-flex align-items-end flex-column justify-content-center h-100">
        <h1 className="text-uppercase fw-bold mb-5  ms-auto display-2">
          All Your <span>Dreams</span> in one place
        </h1>
        <Link to="/shop">
          <button className="btn btn-outline-dark btn-lg text-uppercase">
            Go Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
