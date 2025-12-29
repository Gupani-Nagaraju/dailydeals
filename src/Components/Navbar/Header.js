import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    const path = e.target.value;
    if (path !== "") {
      navigate(path);
    }
  };

  return (
    <header className="navbar-wrapper">

      {/* Top bar */}
      <div className="nav-top-bar">
        <div className="nav-top-left">
          <span>dailydealsship.com@gmail.com</span>
          <span className="sep">|</span>
          <span>+91 9032344721 | +91 9705369965</span>
        </div>
        <div className="nav-top-right">
          <a href="#">f</a>
          <a href="#">t</a>
          <a href="#">in</a>
          <a href="#">p</a>
          <a href="/login" className="login-link">Login</a>
        </div>
      </div>

      {/* Middle bar */}
      <div className="nav-middle-bar">
        <div className="nav-logo">
          <span>DAILYDEALSSHIP</span>
        </div>

        <div className="nav-search-box">
          <select
            className="nav-category-select"
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            <option value="/acpage">AC</option>
            <option value="/bookspage">Books</option>
            <option value="/computerpage">Computers</option>
            <option value="/fridgepage">Fridge</option>
            <option value="/furniturepage">Furniture</option>
            <option value="/kitchenepage">Kitchen</option>
            <option value="/menpage">Men</option>
            <option value="/mobiles">Mobiles</option>
            <option value="/speakerpage">Speaker</option>
            <option value="/tvpage">TV</option>
            <option value="/watchpage">Watch</option>
            <option value="/womenpage">Women</option>
          </select>

          <input
            className="nav-search-input"
            placeholder="What do you need?"
          />
          <button className="nav-search-btn">🔍</button>
        </div>

        <div className="nav-right-icons">
          <span>♡</span>
          <span>🛍</span>
          <span className="nav-price">Rs.150.00</span>
        </div>
      </div>

      {/* Bottom bar */}
      <nav className="nav-bottom-bar">
        <div className="nav-left-block">
          <button className="nav-menu-btn">☰</button>

          <select
            className="nav-category-select"
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            <option value="/acpage">AC</option>
            <option value="/bookspage">Books</option>
            <option value="/computerpage">Computers</option>
            <option value="/fridgepage">Fridge</option>
            <option value="/furniturepage">Furniture</option>
            <option value="/kitchenepage">Kitchen</option>
            <option value="/menpage">Men</option>
            <option value="/mobiles">Mobiles</option>
            <option value="/speakerpage">Speaker</option>
            <option value="/tvpage">TV</option>
            <option value="/watchpage">Watch</option>
            <option value="/womenpage">Women</option>
          </select>
        </div>

        <ul className="nav-links">
          <li onClick={() => navigate("/")}>HOME</li>
          <li onClick={() => navigate("/shop")}>SHOP</li>
          <li onClick={() => navigate("/about")}>ABOUT</li>
          <li onClick={() => navigate("/contact")}>CONTACT</li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;
