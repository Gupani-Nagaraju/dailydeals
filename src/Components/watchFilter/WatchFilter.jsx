// src/Components/watchFilter/WatchFilter.jsx
import React, { useState } from "react";
import "./WatchFilter.css";

// Your reduced arrays (6 each)
const WATCH_BRANDS = [
  "Apple",
  "Samsung",
  "Fitbit",
  "Garmin",
  "Fossil",
  "Casio"
];

const WATCH_MODELS = [
  "Watch Series 7",
  "Galaxy Watch 4",
  "Versa 3",
  "Forerunner 945",
  "Gen 5",
  "G-Shock GA-2100"
];

function WatchFilter({ filters, setFilters }) {
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
    <aside className="watch-filter-sidebar">
      {/* Price Range */}
      <section className="watch-filter-section">
        <h3 className="watch-filter-title">Price</h3>
        <div className="watch-price-inputs">
          <div className="watch-price-box">${minPrice}</div>
          <span className="watch-price-separator">—</span>
          <div className="watch-price-box">${maxPrice}</div>
        </div>
        <input
          type="range"
          min="0"
          max="6000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="watch-price-slider"
        />
      </section>

      {/* Brand Filter */}
      <section className="watch-filter-section">
        <h3 className="watch-filter-title">Brand</h3>
        {WATCH_BRANDS.map((brand) => (
          <label key={brand} className="watch-checkbox-row">
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleBrand(brand)}
            />
            <span>{brand}</span>
          </label>
        ))}
        <label className="watch-checkbox-row">
          <input
            type="checkbox"
            checked={selectedBrands.length === 0}
            onChange={handleAllBrandsClick}
          />
          <span>ALL</span>
        </label>
      </section>

      {/* Model Filter */}
      <section className="watch-filter-section">
        <h3 className="watch-filter-title">Model</h3>
        {WATCH_MODELS.map((model) => (
          <label key={model} className="watch-checkbox-row">
            <input
              type="checkbox"
              checked={selectedModels.includes(model)}
              onChange={() => toggleModel(model)}
            />
            <span>{model}</span>
          </label>
        ))}
        <label className="watch-checkbox-row">
          <input
            type="checkbox"
            checked={selectedModels.length === 0}
            onChange={handleAllModelsClick}
          />
          <span>ALL</span>
        </label>
      </section>

      <button className="watch-filter-button" onClick={applyFilters}>
        FILTER
      </button>
    </aside>
  );
}

export default WatchFilter;
