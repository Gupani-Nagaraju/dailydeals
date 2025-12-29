import React from "react";
import { useCart } from "../../context/CartContext";
import "./Cartpage.css";

const Cartpage = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    cartTotal,
  } = useCart();

  if (cartItems.length === 0) {
    return <h2 className="empty-cart">Your cart is empty</h2>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      <div className="cart-grid">
        {cartItems.map((item) => (
          <div className="cart-card" key={item.id}>
            <img src={item.image} alt={item.model} />

            <div className="cart-details">
              <h4>
                {item.company} {item.model}
              </h4>

              <p className="cart-price">₹ {item.price}</p>

              <div className="quantity">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <h3 className="cart-total">Total: ₹ {cartTotal}</h3>
    </div>
  );
};

export default Cartpage;
