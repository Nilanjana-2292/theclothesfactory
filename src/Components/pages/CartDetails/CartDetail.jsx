import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CartDetail.css";

const CartDetail = () => {
  const [cartItems, setCartItems] = useState([]);
  // const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(stored);
  }, []);

  const updateQuantity = (id, size, delta) => {
    const updated = cartItems.map((item) =>
      item.id === id && item.size === size
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
    window.dispatchEvent(new Event("cart-updated")); // 🔔
  };

  const removeItem = (id, size) => {
    const updated = cartItems.filter(
      (item) => !(item.id === id && item.size === size)
    );
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
    window.dispatchEvent(new Event("cart-updated")); // 🔔
  };

  const calculateTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // const handleApplyCoupon = (e) => {
  //   e.preventDefault();
  //   if (couponCode.trim().toUpperCase() === "BOGOFREE") {
  //     setDiscount(200);
  //   } else {
  //     setDiscount(0);
  //   }
  // };

  const total = calculateTotal();
  const finalTotal = Math.max(0, total - discount);

  return (
    <>
      <section className="banner-main cart-page">
        <div className="container">
          <h2>CART PAGE</h2>
          <button className="product-details">
            <a href="#">Cart details</a>
          </button>
        </div>
      </section>

      <div className="container">
        <div className="separator"></div>
      </div>

      <div className="cart-details-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <form >
                  <div className="table-content table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>Remove</th>
                          <th>Image</th>
                          <th>Product</th>
                          <th>Size</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item, index) => (
                          <tr key={`${item.id}-${item.size}-${index}`}>
                            <td className="product-remove">
                              <button
                                type="button"
                                className="remove-btn"
                                onClick={() => removeItem(item.id, item.size)}
                              >
                                <img
                                  src="/images/Close-cross.svg"
                                  alt="remove"
                                />
                              </button>
                            </td>
                            <td className="product-thumbnail">
                              <img
                                src={item.image}
                                alt={item.name}
                                width="80"
                              />
                            </td>
                            <td className="product-name">
                              <h5>{item.name}</h5>
                            </td>
                            <td className="product-size">
                              <h5>{item.size}</h5>
                            </td>
                            <td className="product-price">
                              <h6>
                                Rs. {item.price.toLocaleString("en-IN")}.00
                              </h6>
                            </td>
                            <td className="product-quantity">
                              <div className="quantity-wrapper">
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(item.id, item.size, -1)
                                  }
                                >
                                  −
                                </button>
                                <input
                                  type="text"
                                  value={item.quantity}
                                  readOnly
                                />
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(item.id, item.size, 1)
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="product-subtotal">
                              <h6>
                                Rs.{" "}
                                {(
                                  item.price * item.quantity
                                ).toLocaleString("en-IN")}
                                .00
                              </h6>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="subtotal-sec">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        {/* <div className="coupon-all">
                          <div className="coupon-text">
                            <input
                              id="coupon_code"
                              className="input-text"
                              name="coupon_code"
                              placeholder="Coupon code"
                              type="text"
                              value={couponCode}
                              onChange={(e) =>
                                setCouponCode(e.target.value)
                              }
                            />
                            <input
                              className="button"
                              value="Apply coupon"
                              type="submit"
                            />
                          </div>
                        </div> */}
                      </div>

                      <div className="col-lg-6 col-12">
                        {/* <div className="coupon2">
                          <input
                            className="button"
                            value="Update cart"
                            type="submit"
                          />
                        </div> */}
                        <div className="cart-total">
                          <h3>Cart totals</h3>
                          <ul>
                            <li>
                              Subtotal{" "}
                              <span>
                                Rs. {total.toLocaleString("en-IN")}.00
                              </span>
                            </li>
                            {discount > 0 && (
                              <li>
                                Discount{" "}
                                <span>
                                  - Rs. {discount.toLocaleString("en-IN")}.00
                                </span>
                              </li>
                            )}
                            <li>
                              Total{" "}
                              <span>
                                Rs. {finalTotal.toLocaleString("en-IN")}.00
                              </span>
                            </li>
                          </ul>

                          <button
                            type="button"
                            className="checkout-btn"
                            onClick={() => navigate("/checkout")}
                          >
                            Proceed to checkout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetail;
