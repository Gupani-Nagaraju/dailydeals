import React, { useState } from "react";
import "./Computerpage.css";
import { computerData } from "../../stores/data/computers";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import ComputersFilter from "../../Components/computersfilter/ComputersFilter";

const Computerpage = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 200000,
    brands: [], // array of selected brands
  });

  const handleAddToCart = (item) => {
    addToCart(item);
    navigate("/cart");
  };

  const handleBuyNow = (item) => {
    addToCart(item);
    navigate("/order");
  };

  // apply price + multi-brand filters
  const filteredComputers = computerData.filter((item) => {
    const price = Number(item.price);
    const matchesPrice =
      price >= filters.minPrice && price <= filters.maxPrice;

    // if no brands selected => all; otherwise company must be in brands
    const matchesBrand =
      filters.brands.length === 0
        ? true
        : filters.brands.includes(item.company); // or item.brand

    return matchesPrice && matchesBrand;
  });

  return (
    <div className="acpage-layout">
      {/* left: filter */}
      <ComputersFilter filters={filters} setFilters={setFilters} />

      {/* right: product grid */}
      <div className="acpage-main">
        <div className="pagesection-computer">
          {filteredComputers.map((item) => (
            <div className="computer" key={item.id}>
              <div className="pageimg">
                <img src={item.image} alt={item.model} />
              </div>

              <div className="promodel">
                {item.company} {item.model}
              </div>

              <div className="price">₹{item.price}</div>

              <div className="description">{item.description}</div>

              <div className="action-buttons">
                <button
                  className="addcartbtn"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>

                <button
                  className="buybtn"
                  onClick={() => handleBuyNow(item)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Computerpage;
