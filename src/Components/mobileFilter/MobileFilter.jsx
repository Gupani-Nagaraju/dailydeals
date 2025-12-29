// src/Components/mobileFilter/MobileFilter.jsx
import React, { useState } from "react";
import "./MobileFilter.css";

// Your exact data arrays
const MOBILE_BRANDS = [
  "Apple",
  "Samsung",
  "Google",
  "OnePlus",
  "Xiaomi",
  "Sony",
  "LG",
  "Motorola",
  "Huawei",
  "Oppo",
  "Nokia",
  "Realme"
];

const MOBILE_MODELS = [
  "iPhone 13 Pro",
  "Galaxy Z Fold 3",
  "Pixel 6",
  "9 Pro",
  "Mi 11 Ultra",
  "Xperia 1 III",
  "G9 ThinQ",
  "Edge 20",
  "P50 Pro",
  "Find X5 Pro",
  "8.4 5G",
  "GT Master Edition"
];

function MobileFilter({ filters, setFilters }) {
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
    <aside className="mobile-filter-sidebar">
      {/* Price Range */}
      <section className="mobile-filter-section">
        <h3 className="mobile-filter-title">Price</h3>
        <div className="mobile-price-inputs">
          <div className="mobile-price-box">${minPrice}</div>
          <span className="mobile-price-separator">—</span>
          <div className="mobile-price-box">${maxPrice}</div>
        </div>
        <input
          type="range"
          min="0"
          max="2000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="mobile-price-slider"
        />
      </section>

      {/* Brand Filter */}
      <section className="mobile-filter-section">
        <h3 className="mobile-filter-title">Brand</h3>
        {MOBILE_BRANDS.map((brand) => (
          <label key={brand} className="mobile-checkbox-row">
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleBrand(brand)}
            />
            <span>{brand}</span>
          </label>
        ))}
        <label className="mobile-checkbox-row">
          <input
            type="checkbox"
            checked={selectedBrands.length === 0}
            onChange={handleAllBrandsClick}
          />
          <span>ALL</span>
        </label>
      </section>

      {/* Model Filter */}
      <section className="mobile-filter-section">
        <h3 className="mobile-filter-title">Model</h3>
        {MOBILE_MODELS.map((model) => (
          <label key={model} className="mobile-checkbox-row">
            <input
              type="checkbox"
              checked={selectedModels.includes(model)}
              onChange={() => toggleModel(model)}
            />
            <span>{model}</span>
          </label>
        ))}
        <label className="mobile-checkbox-row">
          <input
            type="checkbox"
            checked={selectedModels.length === 0}
            onChange={handleAllModelsClick}
          />
          <span>ALL</span>
        </label>
      </section>

      <button className="mobile-filter-button" onClick={applyFilters}>
        FILTER
      </button>
    </aside>
  );
}

export default MobileFilter;
