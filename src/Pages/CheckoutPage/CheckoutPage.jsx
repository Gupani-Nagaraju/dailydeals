import React, { useState } from "react";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const [billing, setBilling] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "",
    street1: "",
    street2: "",
    zip: "",
    city: "",
    email: "",
    phone: "",
    createAccount: false,
  });

  const [coupon, setCoupon] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBilling({
      ...billing,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Billing:", billing);
    console.log("Coupon:", coupon);
    console.log("Payment:", paymentMethod);
  };

  return (
    <section className="checkout-page">
      <form className="checkout-layout" onSubmit={handleSubmit}>

        {/* BILLING CARD */}
        <div className="card billing-card">

          {/* LOGIN LINK */}
          <div className="checkout-login">
            <a href="/login">Click Here To Login</a>
          </div>

          <h3>Billing Details</h3>

          {/* FIRST & LAST NAME */}
          <div className="row-2">
            <div>
              <label>First Name *</label>
              <input
                type="text"
                name="firstName"
                value={billing.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={billing.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <label>Company</label>
          <input
            type="text"
            name="company"
            value={billing.company}
            onChange={handleChange}
          />

          <label>Country *</label>
          <input
            type="text"
            name="country"
            value={billing.country}
            onChange={handleChange}
            required
          />

          <label>Street Address *</label>
          <input
            type="text"
            name="street1"
            placeholder="Street address"
            value={billing.street1}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="street2"
            placeholder="Apartment, suite, unit (optional)"
            value={billing.street2}
            onChange={handleChange}
          />

          {/* ZIP & CITY */}
          <div className="row-2">
            <div>
              <label>ZIP</label>
              <input
                type="text"
                name="zip"
                value={billing.zip}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>City *</label>
              <input
                type="text"
                name="city"
                value={billing.city}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* EMAIL & PHONE */}
          <div className="row-2">
            <div>
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={billing.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Phone *</label>
              <input
                type="tel"
                name="phone"
                value={billing.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* CREATE ACCOUNT */}
          <label className="create-account">
            <input
              type="checkbox"
              name="createAccount"
              checked={billing.createAccount}
              onChange={handleChange}
            />
            Create an account?
          </label>
        </div>

        {/* ORDER SUMMARY CARD */}
        <div className="card order-card">
          <h3>Your Order</h3>

          {/* COUPON CODE */}
          <input
            className="coupon-input"
            type="text"
            placeholder="Enter Coupon Code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />

          <ul className="order-list">
            <li>
              <span>Product</span>
              <span>Total</span>
            </li>
            <li>
              <span>Item A</span>
              <span>₹60</span>
            </li>
            <li>
              <span>Item B</span>
              <span>₹60</span>
            </li>
            <li>
              <span>Subtotal</span>
              <span>₹120</span>
            </li>
            <li className="total">
              <span>Total</span>
              <span>₹120</span>
            </li>
          </ul>

          {/* PAYMENT */}
          <div className="payment">
            <label>
              <input
                type="radio"
                name="payment"
                onChange={() => setPaymentMethod("cod")}
              />
              Cash on Delivery
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                onChange={() => setPaymentMethod("paypal")}
              />
              Paypal
            </label>
          </div>

          <button className="place-btn">Place Order</button>
        </div>
      </form>
    </section>
  );
};

export default CheckoutPage;
