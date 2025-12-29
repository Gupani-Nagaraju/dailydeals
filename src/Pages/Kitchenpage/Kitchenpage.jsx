import React, { useState } from 'react';
import "./Kitchenpage.css";
import { kitchenData } from '../../stores/data/kitchen';
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import KitchenFilter from "../../Components/kitchenFilter/KitchenFilter";

const Kitchenpage = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 30000,
    brands: [],
    types: [], // kitchen appliance types
  });

  // Filter logic for both brand AND type
  const filteredKitchen = kitchenData.filter((item) => {
    const price = Number(item.price.replace('$', ''));
    const matchesPrice = 
      price >= filters.minPrice && price <= filters.maxPrice;

    const matchesBrand = 
      filters.brands.length === 0 
        ? true 
        : filters.brands.includes(item.company);

    const matchesType = 
      filters.types.length === 0 
        ? true 
        : filters.types.includes(item.type); // assuming item.type exists

    return matchesPrice && matchesBrand && matchesType;
  });

  const handleBuyNow = (item) => {
    addToCart(item);
    navigate("/order");
  };

  return (
    <div className="kitchenpage-layout">
      {/* Left: Filter Sidebar */}
      <KitchenFilter filters={filters} setFilters={setFilters} />

      {/* Right: Product Grid */}
      <div className="kitchenpage-main">
        <div className="pagesection">
          {filteredKitchen.map((item) => (
            <div className="kitchen" key={item.id}>
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

export default Kitchenpage;
