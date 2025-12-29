import React, { useState } from "react";
import { acData } from "../../stores/data/ac";
import Pagination from "../../Components/ProductGrid/Pagination";
import { useNavigate } from "react-router-dom";
import "./Acpage.css";
import ShopFilter from "../../Components/shopFilter/ShopFilter";

const Acpage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState("");
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 100000,
    size: "",
    color: "",
    brand: "", // brand filter value
  });

  const navigate = useNavigate();
  const productsPerPage = 6;

  // apply filters (price + brand)
  const filteredProducts = acData.filter((p) => {
    const price = Number(p.price);
    const matchesPrice =
      price >= filters.minPrice && price <= filters.maxPrice;

    // assuming brand stored in p.company; change to p.brand if needed
    const matchesBrand = filters.brand
      ? p.company === filters.brand
      : true;

    return matchesPrice && matchesBrand;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortType === "low-high") return Number(a.price) - Number(b.price);
    if (sortType === "high-low") return Number(b.price) - Number(a.price);
    return 0;
  });

  // Pagination logic
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirst, indexOfLast);

  return (
    <div className="acpage-layout">
      {/* left: filter */}
      <ShopFilter filters={filters} setFilters={setFilters} />

      {/* right: products + sort + pagination */}
      <div className="acpage-main">
        {/* Sort Section */}
        <div className="sort-section">
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="pagesection">
          {currentProducts.map((item) => (
            <div
              className="ac-card"
              key={item.id}
              onClick={() =>
                navigate(`/product/ac/${item.id}`, { state: item })
              }
            >
              <div className="pageimg">
                <img src={item.image} alt={item.model} />
              </div>
              <div className="promodel">
                {item.company} {item.model}
              </div>
              <div className="price">₹ {item.price}</div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          totalProducts={sortedProducts.length}
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Acpage;
