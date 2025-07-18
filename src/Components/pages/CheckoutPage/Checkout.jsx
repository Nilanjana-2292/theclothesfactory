import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import { toast } from 'react-toastify';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [orderNote, setOrderNote] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    country: "",
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(stored);
  }, []);

  // Auto-update cart if storage changes
  useEffect(() => {
    const handleStorageChange = () => {
      const updatedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(updatedCart);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const calculateTotal = () => {
    let total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    if (appliedCoupon) total -= 200;
    return Math.max(total, 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim()) {
      setAppliedCoupon(couponCode.trim());
      toast.success("Coupon applied: ₹200 off");
    } else {
      toast.error("Enter a valid coupon");
    }
  };

  const handlePlaceOrder = () => {
    const requiredFields = [
      "firstName", "lastName", "address1",
      "city", "state", "zip", "email", "phone"
    ];
    const missing = requiredFields.filter((field) => !formData[field]);

    if (missing.length > 0) {
      toast.error("Please fill all required fields.");
      return;
    }

    if (!paymentMethod) {
      toast.error("Please select a payment method.");
      return;
    }

    console.log("Order Placed", {
      formData,
      cartItems,
      paymentMethod,
      couponCode: appliedCoupon,
      orderNote,
    });

    navigate("/thank-you");
  };

  return (
    <>
      <section className="banner-main checkout-page">
        <div className="container">
          <h2>CHECKOUT PAGE</h2>
          <button className="product-details">
            <a href="#">Checkout details</a>
          </button>
        </div>
      </section>

      <div className="container">
        <div className="separator"></div>
        <div className="checkout-details-box">
          <div className="billing-section">
            <h3>1. Billing Details</h3>
            <div className="Total_Billing">
              <div className="row">
                <div className="col-lg-6">
                  <div className="billing-form">
                    <label>
                      <h5>Country *</h5>
                      <select
                        name="country"
                        style={{ color: "grey" }}
                        value={formData.country}
                        onChange={handleChange}
                      >
                        <option value="">Select Country</option>
                        <option value="newtown">Newtown, Kolkata</option>
                        <option value="kestopur">Kestopur, Kolkata</option>
                        <option value="baguiati">Baguiati, Kolkata</option>
                        <option value="dumdum">Dum Dum, Kolkata</option>
                      </select>
                    </label>

                    <div className="form-row-one">
                      <label>
                        <h5>First Name*:</h5>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                      </label>
                      <label>
                        <h5>Last Name*:</h5>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                      </label>
                    </div>

                    <div className="form-row-one">
                      <label>
                        <h5>Address *</h5>
                        <input className="mb-2" type="text" name="address1" value={formData.address1} onChange={handleChange} required />
                        <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
                      </label>
                    </div>

                    <div className="form-row-one">
                      <label>
                        <h5>Town / City *</h5>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                      </label>
                    </div>

                    <div className="form-row-one">
                      <label>
                        <h5>State / County *</h5>
                        <input type="text" name="state" value={formData.state} onChange={handleChange} required />
                      </label>
                      <label>
                        <h5>Postcode / Zip *</h5>
                        <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />
                      </label>
                    </div>

                    <div className="form-row-one">
                      <label>
                        <h5>Email Address *</h5>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                      </label>
                      <label>
                        <h5>Phone *</h5>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="order-summary">
                    <h4>Your Order</h4>
                    <ul>
                      {cartItems.map((item, index) => (
                        <li key={index}>
                          <span>{item.name} <strong>X {item.quantity}</strong></span>
                          <span>Rs. {(item.price * item.quantity).toLocaleString("en-IN")}.00</span>
                        </li>
                      ))}
                      <li>
                        <span>Subtotal</span>
                        <span>Rs. {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString("en-IN")}.00</span>
                      </li>
                      {appliedCoupon && (
                        <li>
                          <span>Coupon Discount</span>
                          <span style={{ color: "green" }}>− ₹200.00</span>
                        </li>
                      )}
                      <li>
                        <span>Total</span>
                        <span>Rs. {calculateTotal().toLocaleString("en-IN")}.00</span>
                      </li>
                    </ul>

                    <button
                      className={`btn CashOnDel ${paymentMethod === "Cash On Delivery" ? "active" : ""}`}
                      onClick={() => setPaymentMethod("Cash On Delivery")}
                    >
                      Cash On Delivery
                    </button>
                    <button className="btn red" onClick={handlePlaceOrder}>
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coupon Section */}
          <div className="coupon-section">
            <h3>2. Have A Coupon? Click Here To Enter Your Code</h3>
            <div className="coupon-row">
              <form className="coupon-text" onSubmit={handleApplyCoupon}>
                <input
                  id="coupon_code"
                  className="input-text"
                  name="coupon_code"
                  placeholder="Coupon code"
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <input
                  className="button"
                  name="apply_coupon"
                  value="Apply coupon"
                  type="submit"
                />
              </form>
            </div>
          </div>

          {/* Notes Section */}
          <div className="notes-section">
            <h3>3. Order Notes</h3>
            <div className="notes-row">
              <div className="notes-text">
                <textarea
                  placeholder="Notes for delivery or other requests"
                  className="notes-box"
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                ></textarea>
                <button
                  className="note-submit"
                  type="button"
                 
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
