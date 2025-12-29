import React, { useState, useEffect } from "react";
import "./Categorygrid.css";

const paintingProducts = [
  { id: 1, img: "Assets/img/products/women-1.jpg", name: "Product Name", price: 14, oldPrice: 35, sale: true },
  { id: 2, img: "Assets/img/products/women-2.jpg", name: "Product Name", price: 13 },
  { id: 3, img: "Assets/img/products/women-3.jpg", name: "Product Name", price: 34 },
  { id: 4, img: "Assets/img/products/women-4.jpg", name: "Product Name", price: 22 }
];

const Categorygrid = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % paintingProducts.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + paintingProducts.length) % paintingProducts.length);
  };

  // ⭐ AUTO SLIDER ADDED
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const visibleItems = [
    paintingProducts[index],
    paintingProducts[(index + 1) % paintingProducts.length],
    paintingProducts[(index + 2) % paintingProducts.length],
  ];

  return (
    <div className="category-section">

      {/* YOUR BANNER SECTION – unchanged */}
      <div className="banner-section">
        <div className="container-fluid">
          <div className="row">

            <div className="col-lg-4">
              <div className="single-banner">
                <img src="Assets/img/banner-1.jpg" alt="Pierre Cardin Pens" />
                <div className="inner-text"><h4>Pierre Cardin Pens</h4></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="single-banner">
                <img src="Assets/img/banner-2.jpg" alt="Flair Calculators" />
                <div className="inner-text"><h4>Flair Calculators</h4></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="single-banner">
                <img src="Assets/img/banner-3.jpg" alt="Zig Painty Makers" />
                <div className="inner-text"><h4>Zig Painty Makers</h4></div>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* PAINTING SECTION */}
      <div className="categorysection-two">

        {/* LEFT IMAGE */}
        <div className="painting-category-left">
          <img src="Assets/img/products/women-large.jpg" alt="" className="painting-left-img" />
          <div className="painting-left-content">
            <h2>Paintings</h2>
            <a href="#" >Discover More</a>
          </div>
        </div>

        {/* RIGHT SIDE SLIDER UPDATED */}
        <div className="painting-category-right">
          <h2 className="painting-title">Paintings</h2>

          <div className="slider-wrapper">

            {/* LEFT ARROW */}
            <button className="side-arrow left-arrow" onClick={prevSlide}>&lt;</button>

            {/* PRODUCT ROW */}
            <div className="painting-product-row">
              {visibleItems.map((item) => (
                <div className="painting-product-card" key={item.id}>

                  <div className="painting-img-box">
                    <img src={item.img} alt="" />

                    {item.sale && <span className="sale-tag">SALE</span>}

                    {/* ⭐ Hover Actions Added */}
                    <div className="hover-details">
                      <button className="quick-view-btn">👜 + Quick View</button>
                      <button className="shuffle-btn">hhh</button>
                    </div>

                    {/* Wishlist Heart */}
                    <div className="wishlist-icon">♡</div>
                  </div>

                  <p className="painting-name">{item.name}</p>
                  <p className="painting-price">
                    Rs.{item.price}.00
                    {item.oldPrice && (
                      <span className="old-price">Rs.{item.oldPrice}.00</span>
                    )}
                  </p>
                </div>
              ))}
            </div>

            {/* RIGHT ARROW */}
            <button className="side-arrow right-arrow" onClick={nextSlide}>&gt;</button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Categorygrid;
