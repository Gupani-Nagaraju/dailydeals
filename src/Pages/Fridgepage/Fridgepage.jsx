import React, { useState } from 'react';
import "./Fridgepage.css";
import { fridgeData } from '../../stores/data/fridge';
import { useCart } from "../../context/CartContext"; // if you have cart
import { useNavigate } from "react-router-dom"; // if you have routing
import FridgeFilter from "../../Components/Fridgefilter/FridgeFilter";

const Fridgepage = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 100000,
    brands: [], // multi-select brands
  });

  // Filter logic
  const filteredFridges = fridgeData.filter((item) => {
    const price = Number(item.price.replace('$', ''));
    const matchesPrice = 
      price >= filters.minPrice && price <= filters.maxPrice;

    const matchesBrand = 
      filters.brands.length === 0 
        ? true 
        : filters.brands.includes(item.company);

    return matchesPrice && matchesBrand;
  });

  const handleBuyNow = (item) => {
    addToCart(item);
    navigate("/order");
  };

  return (
    <div className="fridgepage-layout">
      {/* Left: Filter Sidebar */}
      <FridgeFilter filters={filters} setFilters={setFilters} />

      {/* Right: Product Grid */}
      <div className="fridgepage-main">
        <div className="pagesection">
          {filteredFridges.map((item) => (
            <div className="fridge" key={item.id}>
              <div className="pageimg">
                <img src={item.image} alt={item.model} />
              </div>

              <div className="promodel">
                {item.company} {item.model}
              </div>

              <div className="price">${item.price}</div>

              <div className="description">{item.description}</div>

              <button 
                className="buybtn" 
                onClick={() => handleBuyNow(item)}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fridgepage;
