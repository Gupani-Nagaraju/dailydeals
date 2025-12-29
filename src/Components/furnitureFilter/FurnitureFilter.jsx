// src/Components/furnitureFilter/FurnitureFilter.jsx
import React, { useState } from "react";
import "./FurnitureFilter.css";

// Update these arrays to match your actual furnitureData
const FURNITURE_BRANDS = ["IKEA", "Godrej", "Urban Ladder", "Pepperfry", "Flipkart"];
const FURNITURE_TYPES = ["Sofa", "Bed", "Chair", "Table", "Wardrobe", "Dining"];

function FurnitureFilter({ filters, setFilters }) {
  const [minPrice, setMinPrice] = useState(filters.minPrice);
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice);
  const [selectedBrands, setSelectedBrands] = useState(filters.brands || []);
  const [selectedTypes, setSelectedTypes] = useState(filters.types || []);

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const applyFilters = () => {
    setFilters({
      ...filters,
      minPrice: Number(minPrice),
      maxPrice: Number(maxPrice),
      brands: selectedBrands,
      types: selectedTypes,
    });
  };

  const handleAllBrandsClick = () => {
    setSelectedBrands([]);
  };

  const handleAllTypesClick = () => {
    setSelectedTypes([]);
  };

  return (
    <aside className="furniture-filter-sidebar">
      {/* Price Range */}
      <section className="furniture-filter-section">
        <h3 className="furniture-filter-title">Price</h3>

        <div className="furniture-price-inputs">
          <div className="furniture-price-box">${minPrice}</div>
          <span className="furniture-price-separator">—</span>
          <div className="furniture-price-box">${maxPrice}</div>
        </div>

        <input
          type="range"
          min="0"
          max="50000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="furniture-price-slider"
        />
      </section>

      {/* Brand Filter */}
      <section className="furniture-filter-section">
        <h3 className="furniture-filter-title">Brand</h3>

        {FURNITURE_BRANDS.map((brand) => (
          <label key={brand} className="furniture-checkbox-row">
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleBrand(brand)}
            />
            <span>{brand}</span>
          </label>
        ))}

        <label className="furniture-checkbox-row">
          <input
            type="checkbox"
            checked={selectedBrands.length === 0}
            onChange={handleAllBrandsClick}
          />
          <span>ALL</span>
        </label>
      </section>

      {/* Type Filter */}
      <section className="furniture-filter-section">
        <h3 className="furniture-filter-title">Type</h3>

        {FURNITURE_TYPES.map((type) => (
          <label key={type} className="furniture-checkbox-row">
            <input
              type="checkbox"
              checked={selectedTypes.includes(type)}
              onChange={() => toggleType(type)}
            />
            <span>{type}</span>
          </label>
        ))}

        <label className="furniture-checkbox-row">
          <input
            type="checkbox"
            checked={selectedTypes.length === 0}
            onChange={handleAllTypesClick}
          />
          <span>ALL</span>
        </label>
      </section>

      <button className="furniture-filter-button" onClick={applyFilters}>
        FILTER
      </button>
    </aside>
  );
}

export default FurnitureFilter;
