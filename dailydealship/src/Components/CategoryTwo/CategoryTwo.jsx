import React from "react";
import "./CategoryTwo.css";

const CategoryTwo = () => {
  return (
    <>
      <div className="category-two">
        <div className="section-one container">

          <h2 className="deal-title">Deal Of The Week</h2>
          <div className="underline"></div>

          <p className="deal-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            do ipsum dolor sit amet, consectetur adipisicing elit
          </p>

          <h3 className="deal-price">Rs.35.00</h3>

          <div className="timer-boxes">
            <div className="time-card">
              <h4>30</h4>
              <span>DAYS</span>
            </div>
            <div className="time-card">
              <h4>20</h4>
              <span>HRS</span>
            </div>
            <div className="time-card">
              <h4>05</h4>
              <span>MINS</span>
            </div>
            <div className="time-card">
              <h4>46</h4>
              <span>SECS</span>
            </div>
          </div>

          <button className="shop-btn">SHOP NOW</button>
        </div>
      </div>
    </>
  );
};

export default CategoryTwo;
