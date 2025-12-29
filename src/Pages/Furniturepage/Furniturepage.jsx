import React, { useState } from 'react';
import "./Furniturepage.css";
import { furnitureData } from '../../stores/data/furniture';
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import FurnitureFilter from "../../Components/furnitureFilter/FurnitureFilter";

const Furniturepage = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 50000,
    brands: [],
    types: [], // new type filter
  });

  // Filter logic for both brand AND type
  const filteredFurniture = furnitureData.filter((item) => {
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
    <div className="furniturepage-layout">
      {/* Left: Filter Sidebar */}
      <FurnitureFilter filters={filters} setFilters={setFilters} />

      {/* Right: Product Grid */}
      <div className="furniturepage-main">
        <div className="pagesection">
          {filteredFurniture.map((item) => (
            <div className="furniture" key={item.id}>
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

export default Furniturepage;
