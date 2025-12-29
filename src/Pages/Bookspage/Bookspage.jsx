// src/Pages/Bookspage/Bookspage.jsx
import React, { useState } from "react";
import "./Bookspage.css";
import { booksData } from "../../stores/data/books";
import BooksFilter from "../../Components/bookfilter/BooksFilter";

const Bookspage = () => {
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 1000,
    brand: "",      // publisher/brand in booksData
  });

  const filteredBooks = booksData.filter((b) => {
    const price = Number(b.price);
    const matchesPrice =
      price >= filters.minPrice && price <= filters.maxPrice;

    // adjust b.company if your field is b.publisher / b.brand
    const matchesBrand = filters.brand
      ? b.company === filters.brand
      : true;

    return matchesPrice && matchesBrand;
  });

  return (
    <div className="acpage-layout">
      {/* left: filter */}
      <BooksFilter filters={filters} setFilters={setFilters} />

      {/* right: books grid */}
      <div className="acpage-main">
        <div className="pagesection">
          {filteredBooks.map((item) => (
            <div className="books" key={item.id}>
              <div className="pageimg">
                <img src={item.image} alt={item.model} />
              </div>

              <div className="promodel">
                {item.company} {item.model}
              </div>

              <div className="price">₹{item.price}</div>

              <div className="description">{item.description}</div>

              <button className="buybtn">Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookspage;
