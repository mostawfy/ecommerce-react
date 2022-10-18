import { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  } else {
    return (
      <div className="products">
        <div className="container">
          <h2 className="text-center mb-5 display-4 text-uppercase">Shop</h2>
          <div className="row g-5 justify-content-stretch">
            {products.map((product) => {
              return (
                <div className="col-md-4">
                  <div className="product position-relative d-flex flex-column justify-content-center align-items-center border border-1 rounded-3 text-center">
                    <div className="product-img mb-3 ">
                      <img src={product.image} alt="" className="img-fluid" />
                    </div>
                    <div className="product-title mb-3">{product.title}</div>
                    <div className="product-price text-muted  mb-auto">
                      {product.price} EGP
                    </div>
                    <button className="cart-btn btn btn-dark rounded-0 text-white py-3">
                      Add to cart
                    </button>
                    <Link
                      to={`/shop/${product.id}`}
                      key={product.id}
                      className="position-absolute w-100 h-100"
                    ></Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default Shop;
