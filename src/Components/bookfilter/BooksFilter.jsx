// src/Components/booksFilter/BooksFilter.jsx
import React, { useState } from "react";
import "./BooksFilter.css";

const BOOK_BRANDS = ["Penguin", "HarperCollins", "Oxford", "Scholastic"];

function BooksFilter({ filters, setFilters }) {
  const [minPrice, setMinPrice] = useState(filters.minPrice);
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice);
  const [selectedBrand, setSelectedBrand] = useState(
    filters.brand || "ALL"
  );

  const applyFilters = () => {
    setFilters({
      ...filters,
      minPrice: Number(minPrice),
      maxPrice: Number(maxPrice),
      brand: selectedBrand === "ALL" ? "" : selectedBrand,
    });
  };

  return (
    <aside className="books-filter-sidebar">
      {/* Price */}
      <section className="books-filter-section">
        <h3 className="books-filter-title">Price</h3>

        <div className="books-price-inputs">
          <div className="books-price-box">₹{minPrice}</div>
          <span className="books-price-separator">—</span>
          <div className="books-price-box">₹{maxPrice}</div>
        </div>

        <input
          type="range"
          min="0"
          max="1000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="books-price-slider"
        />
      </section>

      {/* Brand */}
      <section className="books-filter-section">
        <h3 className="books-filter-title">Publisher</h3>

        {BOOK_BRANDS.map((brand) => (
          <label key={brand} className="books-checkbox-row">
            <input
              type="checkbox"
              checked={selectedBrand === brand}
              onChange={() => setSelectedBrand(brand)}
            />
            <span>{brand}</span>
          </label>
        ))}

        <label className="books-checkbox-row">
          <input
            type="checkbox"
            checked={selectedBrand === "ALL"}
            onChange={() => setSelectedBrand("ALL")}
          />
          <span>ALL</span>
        </label>

        <button className="books-filter-button" onClick={applyFilters}>
          FILTER
        </button>
      </section>
    </aside>
  );
}

export default BooksFilter;
