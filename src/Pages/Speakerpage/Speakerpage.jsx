import React, { useState } from 'react';
import "./Speakerpage.css";
import { speakerData } from '../../stores/data/speaker';
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import SpeakerFilter from "../../Components/speakerFilter/SpeakerFilter";

const Speakerpage = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 3000,
    brands: [],
    models: [],
  });

  // Filter logic for brand AND model
  const filteredSpeakers = speakerData.filter((item) => {
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
    <div className="speakerpage-layout">
      {/* Left: Filter Sidebar */}
      <SpeakerFilter filters={filters} setFilters={setFilters} />

      {/* Right: Product Grid */}
      <div className="speakerpage-main">
        <div className="pagesection">
          {filteredSpeakers.map((item) => (
            <div className="speaker" key={item.id || item.model}>
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

export default Speakerpage;
