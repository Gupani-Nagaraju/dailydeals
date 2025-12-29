import React, { useState } from "react";
import "./Mobilepage.css";
import { mobileData } from "../../stores/data/mobiles";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import MobileFilter from "../../Components/mobileFilter/MobileFilter";

const Mobilepage = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 2000,
    brands: [],
    models: [],
  });

  // Filter logic for brand AND model
  const filteredMobiles = mobileData.filter((item) => {
    const price = Number(item.price);
    const matchesPrice = 
      price >= filters.minPrice && price <= filters.maxPrice;

    const matchesBrand = 
      filters.brands.length === 0 
        ? true 
        : filters.brands.includes(item.company);

    const matchesModel = 
      filters.models.length === 0 
        ? true 
        : filters.models.includes(item.model);

    return matchesPrice && matchesBrand && matchesModel;
  });

  const handleBuyNow = (item) => {
    addToCart(item);
    navigate("/order");
  };

  return (
    <div className="mobilepage-layout">
      {/* Left: Filter Sidebar */}
      <MobileFilter filters={filters} setFilters={setFilters} />

      {/* Right: Product Grid */}
      <div className="mobilepage-main">
        <div className="pagesection">
          {filteredMobiles.map((item) => (
            <div className="mobile-card" key={item.id}>
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

export default Mobilepage;
