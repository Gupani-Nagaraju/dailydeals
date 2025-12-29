// src/Components/speakerFilter/SpeakerFilter.jsx
import React, { useState } from "react";
import "./SpeakerFilter.css";

// Your exact data arrays
const SPEAKER_BRANDS = [
  "Bose",
  "Sonos",
  "JBL",
  "Sony",
  "Ultimate Ears",
  "Harman Kardon",
  "Anker",
  "Marshall",
  "Yamaha",
  "Bang & Olufsen",
  "UE"
];

const SPEAKER_MODELS = [
  "SoundLink Revolve",
  "One SL",
  "Flip 5",
  "SRS-XB43",
  "MEGABOOM 3",
  "Aura Studio 3",
  "Soundcore Flare",
  "Stanmore II",
  "Home Speaker 500",
  "MusicCast 20",
  "Beoplay A9",
  "BOOM 2"
];

function SpeakerFilter({ filters, setFilters }) {
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
    <aside className="speaker-filter-sidebar">
      {/* Price Range */}
      <section className="speaker-filter-section">
        <h3 className="speaker-filter-title">Price</h3>
        <div className="speaker-price-inputs">
          <div className="speaker-price-box">${minPrice}</div>
          <span className="speaker-price-separator">—</span>
          <div className="speaker-price-box">${maxPrice}</div>
        </div>
        <input
          type="range"
          min="0"
          max="3000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="speaker-price-slider"
        />
      </section>

      {/* Brand Filter */}
      <section className="speaker-filter-section">
        <h3 className="speaker-filter-title">Brand</h3>
        {SPEAKER_BRANDS.map((brand) => (
          <label key={brand} className="speaker-checkbox-row">
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleBrand(brand)}
            />
            <span>{brand}</span>
          </label>
        ))}
        <label className="speaker-checkbox-row">
          <input
            type="checkbox"
            checked={selectedBrands.length === 0}
            onChange={handleAllBrandsClick}
          />
          <span>ALL</span>
        </label>
      </section>

      {/* Model Filter */}
      <section className="speaker-filter-section">
        <h3 className="speaker-filter-title">Model</h3>
        {SPEAKER_MODELS.map((model) => (
          <label key={model} className="speaker-checkbox-row">
            <input
              type="checkbox"
              checked={selectedModels.includes(model)}
              onChange={() => toggleModel(model)}
            />
            <span>{model}</span>
          </label>
        ))}
        <label className="speaker-checkbox-row">
          <input
            type="checkbox"
            checked={selectedModels.length === 0}
            onChange={handleAllModelsClick}
          />
          <span>ALL</span>
        </label>
      </section>

      <button className="speaker-filter-button" onClick={applyFilters}>
        FILTER
      </button>
    </aside>
  );
}

export default SpeakerFilter;
