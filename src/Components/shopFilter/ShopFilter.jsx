import React, { useState } from "react";
import "./ShopFilter.css";

const COLORS = [
  { id: "cs-black",  value: "Black",  className: "cs-black" },
  { id: "cs-violet", value: "Violet", className: "cs-violet" },
  { id: "cs-blue",   value: "Blue",   className: "cs-blue" },
  { id: "cs-yellow", value: "Yellow", className: "cs-yellow" },
  { id: "cs-red",    value: "Red",    className: "cs-red" },
  { id: "cs-green",  value: "Green",  className: "cs-green" },
];

const BRANDS = ["LG", "Acer", "Carrier", "Honeywell"];

function ShopFilter({ filters, setFilters }) {
  const [minPrice, setMinPrice] = useState(filters.minPrice);
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice);
  const [selectedSize, setSelectedSize] = useState(filters.size || "S");
  const [selectedColor, setSelectedColor] = useState(filters.color || "");
  const [selectedBrand, setSelectedBrand] = useState(filters.brand || "ALL");

  const tags = ["Paintings", "Pens", "Desktop Watches", "Calculators"];

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  const applyFilters = () => {
    setFilters({
      ...filters,
      minPrice: Number(minPrice),
      maxPrice: Number(maxPrice),
      size: selectedSize,
      color: selectedColor,
      brand: selectedBrand === "ALL" ? "" : selectedBrand,
    });
  };

  return (
    <aside className="filter-sidebar">
      {/* Categories */}
      <section className="filter-section">
        <h3 className="filter-title">Categories</h3>

        <label className="checkbox-row">
          <input type="checkbox" />
          <span>Pierre Cardin Pens</span>
        </label>

        <label className="checkbox-row">
          <input type="checkbox" />
          <span>Paintings</span>
        </label>

        <label className="checkbox-row">
          <input type="checkbox" />
          <span>Flair Calculators</span>
        </label>
      </section>

      {/* Price */}
      <section className="filter-section">
        <h3 className="filter-title">Price</h3>

        <div className="price-inputs">
          <div className="price-box">₹{minPrice}</div>
          <span className="price-separator">—</span>
          <div className="price-box">₹{maxPrice}</div>
        </div>

        <input
          type="range"
          min="0"
          max="100000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="price-slider"
        />

        
      </section>

      {/* Brand (single-select via checkboxes behaving like radios) */}
      <section className="filter-section">
        <h3 className="filter-title">Brand</h3>

        {BRANDS.map((brand) => (
          <label key={brand} className="checkbox-row">
            <input
              type="checkbox"
              checked={selectedBrand === brand}
              onChange={() => handleBrandChange(brand)}
            />
            <span>{brand}</span>
          </label>
        ))}

        <label className="checkbox-row">
          <input
            type="checkbox"
            checked={selectedBrand === "ALL"}
            onChange={() => handleBrandChange("ALL")}
          />
          <span>ALL</span>
          
          
        </label>
        <button className="filter-button" onClick={applyFilters}>
          FILTER
        </button>
      </section>

      {/* Color */}
      <section className="filter-section">
        <h3 className="filter-title">Color</h3>

        <div className="fw-color-choose">
          {COLORS.map((c) => (
            <div className="cs-item" key={c.id}>
              <input
                type="radio"
                id={c.id}
                name="product-color"
                value={c.value}
                checked={selectedColor === c.value}
                onChange={() => setSelectedColor(c.value)}
              />
              <label className={c.className} htmlFor={c.id}>
                {c.value}
              </label>
            </div>
          ))}
        </div>
      </section>

      {/* Size */}
      <section className="filter-section">
        <h3 className="filter-title">Size</h3>
        <div className="size-grid">
          {["S", "M", "L", "XS"].map((size) => (
            <button
              key={size}
              className={`size-box ${
                selectedSize === size ? "size-box-active" : ""
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </section>

      {/* Tags */}
      <section className="filter-section">
        <h3 className="filter-title">Tags</h3>
        <div className="tags-list">
          {tags.map((tag) => (
            <button key={tag} className="tag-item">
              {tag}
            </button>
          ))}
        </div>
      </section>
    </aside>
  );
}

export default ShopFilter;
