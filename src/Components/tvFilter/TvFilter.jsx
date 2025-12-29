// src/Components/tvFilter/TvFilter.jsx
import React, { useState } from "react";
import "./TvFilter.css";

// Your reduced arrays
const TV_BRANDS = [
  "LG",
  "Sony", 
  "Samsung",
  "TCL",
  "Vizio",
  "Hisense",
  "Panasonic",
  "Philips"
];

const TV_MODELS = [
  "OLED CX Series",
  "Bravia X90J",
  "QLED Q80A",
  "The Frame",
  "6-Series",
  "P-Series Quantum",
  "HZ2000",
  "Ambilight 4K"
];

function TvFilter({ filters, setFilters }) {
  const [minPrice, setMinPrice] = useState(filters.minPrice);
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice);
  const [selectedBrands, setSelectedBrands] = useState(filters.brands || []);
  const [selectedModels, setSelectedModels] = useState(filters.models || []);

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const toggleModel = (model) => {
    setSelectedModels((prev) =>
      prev.includes(model)
        ? prev.filter((m) => m !== model)
        : [...prev, model]
    );
  };

  const applyFilters = () => {
    setFilters({
      ...filters,
      minPrice: Number(minPrice),
      maxPrice: Number(maxPrice),
      brands: selectedBrands,
      models: selectedModels,
    });
  };

  const handleAllBrandsClick = () => setSelectedBrands([]);
  const handleAllModelsClick = () => setSelectedModels([]);

  return (
    <aside className="tv-filter-sidebar">
      {/* Price Range */}
      <section className="tv-filter-section">
        <h3 className="tv-filter-title">Price</h3>
        <div className="tv-price-inputs">
          <div className="tv-price-box">${minPrice}</div>
          <span className="tv-price-separator">—</span>
          <div className="tv-price-box">${maxPrice}</div>
        </div>
        <input
          type="range"
          min="0"
          max="3000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="tv-price-slider"
        />
      </section>

      {/* Brand Filter */}
      <section className="tv-filter-section">
        <h3 className="tv-filter-title">Brand</h3>
        {TV_BRANDS.map((brand) => (
          <label key={brand} className="tv-checkbox-row">
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleBrand(brand)}
            />
            <span>{brand}</span>
          </label>
        ))}
        <label className="tv-checkbox-row">
          <input
            type="checkbox"
            checked={selectedBrands.length === 0}
            onChange={handleAllBrandsClick}
          />
          <span>ALL</span>
        </label>
      </section>

      {/* Model Filter */}
      <section className="tv-filter-section">
        <h3 className="tv-filter-title">Model</h3>
        {TV_MODELS.map((model) => (
          <label key={model} className="tv-checkbox-row">
            <input
              type="checkbox"
              checked={selectedModels.includes(model)}
              onChange={() => toggleModel(model)}
            />
            <span>{model}</span>
          </label>
        ))}
        <label className="tv-checkbox-row">
          <input
            type="checkbox"
            checked={selectedModels.length === 0}
            onChange={handleAllModelsClick}
          />
          <span>ALL</span>
        </label>
      </section>

      <button className="tv-filter-button" onClick={applyFilters}>
        FILTER
      </button>
    </aside>
  );
}

export default TvFilter;
