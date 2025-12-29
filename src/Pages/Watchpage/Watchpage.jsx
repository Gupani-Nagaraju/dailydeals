import React, { useState } from 'react';
import "./Watchpage.css";
import { watchData } from '../../stores/data/watch';
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import WatchFilter from "../../Components/watchFilter/WatchFilter";

const Watchpage = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 6000,
    brands: [],
    models: [],
  });

  // Filter logic for brand AND model
  const filteredWatches = watchData.filter((item) => {
    const price = Number(item.price);
    const matchesPrice = 
      price >= filters.minPrice && price <= filters.maxPrice;

    const matchesBrand = 
      filters.brands.length === 0 
        ? true 
        : filters.brands.includes(item.brand); // uses item.brand

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
    <div className="watchpage-layout">
      {/* Left: Filter Sidebar */}
      <WatchFilter filters={filters} setFilters={setFilters} />

      {/* Right: Product Grid */}
      <div className="watchpage-main">
        <div className="pagesection">
          {filteredWatches.map((item) => (
            <div className="watch" key={item.id}>
              <div className="pageimg">
                <img src={item.image} alt={item.model} />
              </div>

              <div className="promodel">
                {item.brand} {item.model} {/* Fixed: uses item.brand */}
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

export default Watchpage;
