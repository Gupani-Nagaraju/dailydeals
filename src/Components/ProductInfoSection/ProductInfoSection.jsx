import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./ProductInfoSection.css";

const ProductInfoSection = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState(
    product?.variants?.[0] || "Default"
  );

  return (
    <div className="product-info">
      <h2>{product.company} {product.model}</h2>
      <p className="desc">{product.description}</p>
      <h3 className="price">₹ {product.price}</h3>

      {product.variants?.length > 0 && (
        <div className="variant">
          <label>Variant:</label>
          <select value={variant} onChange={(e) => setVariant(e.target.value)}>
            {product.variants.map((v, i) => (
              <option key={i} value={v}>{v}</option>
            ))}
          </select>
        </div>
      )}

      <div className="quantity">
        <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
      </div>

      <div className="actions">
        <button
          className="add-cart"
          onClick={() => addToCart(product, quantity, variant)}
        >
          Add to Cart
        </button>
        <button className="buy-now">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductInfoSection;
