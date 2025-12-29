// src/Components/fridgeFilter/FridgeFilter.jsx
import React, { useState } from "react";
import "./FridgeFilter.css";

// Common fridge brands - update to match your fridgeData.company values
const FRIDGE_BRANDS = ["Samsung", "LG", "Whirlpool", "Godrej", "Haier"];

function FridgeFilter({ filters, setFilters }) {
  const [minPrice, setMinPrice] = useState(filters.minPrice);
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice);
  const [selectedBrands, setSelectedBrands] = useState(filters.brands || []);

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const applyFilters = () => {
    setFilters({
      ...filters,
      minPrice: Number(minPrice),
      maxPrice: Number(maxPrice),
      brands: selectedBrands,
    });
  };

  const handleAllClick = () => {
    setSelectedBrands([]);
  };

  return (
    <aside className="fridge-filter-sidebar">
      {/* Price Range */}
      <section className="fridge-filter-section">
        <h3 className="fridge-filter-title">Price</h3>

        <div className="fridge-price-inputs">
          <div className="fridge-price-box">${minPrice}</div>
          <span className="fridge-price-separator">—</span>
          <div className="fridge-price-box">${maxPrice}</div>
        </div>

        <input
          type="range"
          min="0"
          max="100000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="fridge-price-slider"
        />
      </section>

      {/* Brand Multi-Select */}
      <section className="fridge-filter-section">
        <h3 className="fridge-filter-title">Brand</h3>

        {FRIDGE_BRANDS.map((brand) => (
          <label key={brand} className="fridge-checkbox-row">
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleBrand(brand)}
            />
            <span>{brand}</span>
          </label>
        ))}

        <label className="fridge-checkbox-row">
          <input
            type="checkbox"
            checked={selectedBrands.length === 0}
            onChange={handleAllClick}
          />
          <span>ALL</span>
        </label>

        <button className="fridge-filter-button" onClick={applyFilters}>
          FILTER
        </button>
      </section>
    </aside>
  );
}

export default FridgeFilter;
