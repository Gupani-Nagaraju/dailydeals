import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP
} from "react-icons/fa";
 
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
 
        {/* Logo + Address */}
        <div className="footer-col">
          <div className="footer-logo">
            <img src="/logo.png" alt="DailyDealsShip" />
          </div>
 
          <p className="footer-address">
            <strong>Address:</strong> C 1 DIAMOND TOWERS <br />
            S D ROAD SECUNDERABAD <br />
            500003 BESIDE BELSON <br />
            TAJ HOTEL
          </p>
 
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaPinterestP /></a>
          </div>
        </div>
 
        {/* Information */}
        <div className="footer-col">
          <h3>Information</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Checkout</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>
 
        {/* My Account */}
        <div className="footer-col">
          <h3>My Account</h3>
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Shopping Cart</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>
 
        {/* Newsletter */}
        <div className="footer-col">
          <h3>Join Our Newsletter Now</h3>
          <p>
            Get E-mail updates about our latest shop and special offers.
          </p>
 
          <div className="newsletter-box">
            <input type="email" placeholder="Enter Your Mail" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
 
      {/* Copyright */}
      <div className="footer-bottom">
        <p>Copyright ©2025 All rights reserved</p>
      </div>
    </footer>
  );
}