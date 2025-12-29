// src/Components/menFilter/MenFilter.jsx
import React, { useState } from "react";
import "./MenFilter.css";

// Your exact data arrays
const allModels = [
  "Sporty Tee",
  "ClassicFit", 
  "511 Slim Fit",
  "Signature Polo",
  "Apex Bionic",
  "Tech Mesh Shorts",
  "Crewneck Sweater",
  "ModernFit Suit",
  "Essentials Hoodie",
  "Alpha Khaki",
  "Endurance+ Swim Trunks",
  "Classic Blazer"
];

const MEN_BRANDS = [
  "Nike",
  "Calvin Klein", 
  "Levi's",
  "Ralph Lauren",
  "The North Face",
  "Under Armour",
  "Tommy Hilfiger",
  "Hugo Boss",
  "Adidas",
  "Dockers",
  "Speedo",
  "Brothers"
];

const MEN_TYPES = [
  "T-Shirt",
  "Dress Shirt",
  "Jeans",
  "Polo Shirt",
  "Jacket",
  "Shorts",
  "Sweater",
  "Suit",
  "Hoodie",
  "Chinos",
  "Swim Trunks",
  "Blazer"
];

function MenFilter({ filters, setFilters }) {
  const [minPrice, setMinPrice] = useState(filters.minPrice);
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice);
  const [selectedBrands, setSelectedBrands] = useState(filters.brands || []);
  const [selectedTypes, setSelectedTypes] = useState(filters.types || []);
  const [selectedModels, setSelectedModels] = useState(filters.models || []);

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
      types: selectedTypes,
      models: selectedModels,
    });
  };

  const handleAllBrandsClick = () => setSelectedBrands([]);
  const handleAllTypesClick = () => setSelectedTypes([]);
  const handleAllModelsClick = () => setSelectedModels([]);

  return (
    <aside className="men-filter-sidebar">
      {/* Price Range */}
      <section className="men-filter-section">
        <h3 className="men-filter-title">Price</h3>
        <div className="men-price-inputs">
          <div className="men-price-box">${minPrice}</div>
          <span className="men-price-separator">—</span>
          <div className="men-price-box">${maxPrice}</div>
        </div>
        <input
          type="range"
          min="0"
          max="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="men-price-slider"
        />
      </section>

      {/* Brand Filter */}
      <section className="men-filter-section">
        <h3 className="men-filter-title">Brand</h3>
        {MEN_BRANDS.map((brand) => (
          <label key={brand} className="men-checkbox-row">
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleBrand(brand)}
            />
            <span>{brand}</span>
          </label>
        ))}
        <label className="men-checkbox-row">
          <input
            type="checkbox"
            checked={selectedBrands.length === 0}
            onChange={handleAllBrandsClick}
          />
          <span>ALL</span>
        </label>
      </section>

      {/* Type Filter */}
      <section className="men-filter-section">
        <h3 className="men-filter-title">Type</h3>
        {MEN_TYPES.map((type) => (
          <label key={type} className="men-checkbox-row">
            <input
              type="checkbox"
              checked={selectedTypes.includes(type)}
              onChange={() => toggleType(type)}
            />
            <span>{type}</span>
          </label>
        ))}
        <label className="men-checkbox-row">
          <input
            type="checkbox"
            checked={selectedTypes.length === 0}
            onChange={handleAllTypesClick}
          />
          <span>ALL</span>
        </label>
      </section>

      {/* Model Filter */}
      <section className="men-filter-section">
        <h3 className="men-filter-title">Model</h3>
        {allModels.map((model) => (
          <label key={model} className="men-checkbox-row">
            <input
              type="checkbox"
              checked={selectedModels.includes(model)}
              onChange={() => toggleModel(model)}
            />
            <span>{model}</span>
          </label>
        ))}
        <label className="men-checkbox-row">
          <input
            type="checkbox"
            checked={selectedModels.length === 0}
            onChange={handleAllModelsClick}
          />
          <span>ALL</span>
        </label>
      </section>

      <button className="men-filter-button" onClick={applyFilters}>
        FILTER
      </button>
    </aside>
  );
}

export default MenFilter;
