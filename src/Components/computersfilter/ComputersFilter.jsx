// src/Components/computersFilter/ComputersFilter.jsx
import React, { useState } from "react";
import "./ComputersFilter.css";

// change to match computerData.company values
const COMPUTER_BRANDS = ["Dell", "HP", "Lenovo", "Asus"];

function ComputersFilter({ filters, setFilters }) {
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
      brands: selectedBrands, // array of selected brands
    });
  };

  const handleAllClick = () => {
    setSelectedBrands([]); // empty array means ALL brands
  };

  return (
    <aside className="computers-filter-sidebar">
      {/* Price */}
      <section className="computers-filter-section">
        <h3 className="computers-filter-title">Price</h3>

        <div className="computers-price-inputs">
          <div className="computers-price-box">₹{minPrice}</div>
          <span className="computers-price-separator">—</span>
          <div className="computers-price-box">₹{maxPrice}</div>
        </div>

        <input
          type="range"
          min="0"
          max="200000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="computers-price-slider"
        />
      </section>

      {/* Brand (multi-select) */}
      <section className="computers-filter-section">
        <h3 className="computers-filter-title">Brand</h3>

        {COMPUTER_BRANDS.map((brand) => (
          <label key={brand} className="computers-checkbox-row">
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleBrand(brand)}
            />
            <span>{brand}</span>
          </label>
        ))}

        <label className="computers-checkbox-row">
          <input
            type="checkbox"
            checked={selectedBrands.length === 0}
            onChange={handleAllClick}
          />
          <span>ALL</span>
        </label>

        <button className="computers-filter-button" onClick={applyFilters}>
          FILTER
        </button>
      </section>
    </aside>
  );
}

export default ComputersFilter;
