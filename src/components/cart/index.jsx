import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import "./style.css";

const Cart = () => {
  const globalCart = useSelector((state) => state.cartStore);
  const dispatch = useDispatch();

  const removeItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const cartItems = globalCart.cartList;

  let total = 0;

  cartItems.map((product) => {
    total += product.price;
  });

  return (
    <div className="cart container">
      <h2 className="Text-uppercase mb-2">Shopping Cart</h2>
      <small>You have {globalCart.cartCount} items in your cart.</small>
      <hr className="Text-uppercase mb-5" />
      {cartItems.map((item) => {
        return (
          <div className="row w-100 align-items-center justify-content-between mb-5">
            <div className="col-2">
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid w-75 mx-auto"
              />
            </div>
            <div className="col-4">
              <h3>{item.title}</h3>
              <div className="price">{item.price} EGP</div>
            </div>
            <div className="col-2">
              Quantity:{" "}
              <input type="number" className="form-control" min="1" value="1" />
            </div>
            <div className="col-2">
              Total:
              <div className="h4">{item.price} EGP</div>
            </div>
            <div className="col-1">
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => removeItem(item)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
      <hr />
      <div className="d-flex justify-content-between align-content-center mb-2">
        <div className="fw-bold h3 py-4">Total: {total} EGP</div>
        <button className="btn btn-lg proceed-btn align-self-center">
          Proceed to pay
        </button>
      </div>
    </div>
  );
};

export default Cart;
