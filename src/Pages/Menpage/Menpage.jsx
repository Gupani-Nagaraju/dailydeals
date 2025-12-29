import React, { useState } from 'react';
import "./Menpage.css";
import { menData } from '../../stores/data/men';
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import MenFilter from "../../Components/menFilter/MenFilter";

const Menpage = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 500,
    brands: [],
    types: [],
    models: [], // new model filter
  });

  // Filter logic for brand, type, AND model
  const filteredMen = menData.filter((item) => {
    const price = Number(item.price);
    const matchesPrice = 
      price >= filters.minPrice && price <= filters.maxPrice;

    const matchesBrand = 
      filters.brands.length === 0 
        ? true 
        : filters.brands.includes(item.brand); // note: item.brand (not company)

    const matchesType = 
      filters.types.length === 0 
        ? true 
        : filters.types.includes(item.type);

    const matchesModel = 
      filters.models.length === 0 
        ? true 
        : filters.models.includes(item.model);

    return matchesPrice && matchesBrand && matchesType && matchesModel;
  });

  const handleBuyNow = (item) => {
    addToCart(item);
    navigate("/order");
  };

  return (
    <div className="menpage-layout">
      {/* Left: Filter Sidebar */}
      <MenFilter filters={filters} setFilters={setFilters} />

      {/* Right: Product Grid */}
      <div className="menpage-main">
        <div className="pagesection">
          {filteredMen.map((item) => (
            <div className="men" key={item.id}>
              <div className="pageimg">
                <img src={item.image} alt={item.model} />
              </div>

              <div className="promodel">
                {item.brand} {item.model} {/* note: item.brand (not company) */}
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

export default Menpage;
