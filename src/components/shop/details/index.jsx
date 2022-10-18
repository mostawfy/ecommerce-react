import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    fetch("https://fakestoreapi.com/products/" + params.id)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
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
      <div className="product-detail vh-100 d-flex justify-content-center align-items-center container">
        <div className="product-wrapper d-flex justify-content-center align-items-center">
          <div className="product-img me-5 w-25">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid w-100 h-100"
            />
          </div>
          <div className="product-info w-50">
            <div className="cat fw-bold text-uppercase mb-2">
              {product.category}
            </div>
            <h3>{product.title}</h3>
            <div className="price text-danger mb-4">{product.price} EGP</div>
            <div className="desc text-muted mb-5">{product.description}</div>
            <button className="btn btn-dark text-uppercase">Add to cart</button>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetails;
