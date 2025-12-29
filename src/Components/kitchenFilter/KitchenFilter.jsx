// src/Components/kitchenFilter/KitchenFilter.jsx
import React, { useState } from "react";
import "./KitchenFilter.css";

// Common kitchen appliance brands and types - update to match your kitchenData
const KITCHEN_BRANDS = ["Philips", "Prestige", "Bajaj", "Wonderchef", "Butterfly"];
const KITCHEN_TYPES = ["Mixer Grinder", "Juicer", "Oven", "Chimney", "Gas Stove", "Induction"];

function KitchenFilter({ filters, setFilters }) {
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
    <aside className="kitchen-filter-sidebar">
      {/* Price Range */}
      <section className="kitchen-filter-section">
        <h3 className="kitchen-filter-title">Price</h3>

        <div className="kitchen-price-inputs">
          <div className="kitchen-price-box">${minPrice}</div>
          <span className="kitchen-price-separator">—</span>
          <div className="kitchen-price-box">${maxPrice}</div>
        </div>

        <input
          type="range"
          min="0"
          max="30000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="kitchen-price-slider"
        />
      </section>

      {/* Brand Filter */}
      <section className="kitchen-filter-section">
        <h3 className="kitchen-filter-title">Brand</h3>

        {KITCHEN_BRANDS.map((brand) => (
          <label key={brand} className="kitchen-checkbox-row">
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleBrand(brand)}
            />
            <span>{brand}</span>
          </label>
        ))}

        <label className="kitchen-checkbox-row">
          <input
            type="checkbox"
            checked={selectedBrands.length === 0}
            onChange={handleAllBrandsClick}
          />
          <span>ALL</span>
        </label>
      </section>

      {/* Type Filter */}
      <section className="kitchen-filter-section">
        <h3 className="kitchen-filter-title">Type</h3>

        {KITCHEN_TYPES.map((type) => (
          <label key={type} className="kitchen-checkbox-row">
            <input
              type="checkbox"
              checked={selectedTypes.includes(type)}
              onChange={() => toggleType(type)}
            />
            <span>{type}</span>
          </label>
        ))}

        <label className="kitchen-checkbox-row">
          <input
            type="checkbox"
            checked={selectedTypes.length === 0}
            onChange={handleAllTypesClick}
          />
          <span>ALL</span>
        </label>
      </section>

      <button className="kitchen-filter-button" onClick={applyFilters}>
        FILTER
      </button>
    </aside>
  );
}

export default KitchenFilter;
