import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Thankyou.css";

const ThankYouPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Clear cart
    localStorage.removeItem("cartItems");

    // ✅ Notify header to reset cart count
    window.dispatchEvent(new Event("cart-updated"));
  }, []);

  return (
    <div className="Thankyou-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className="Thankyou-page-inner">
              <div className="Thankyou-page-tick">
                <img src="/images/thankyou-tick.png" alt="Thank you" />
              </div>
              <h3>THANK YOU !!</h3>
              <p>Your order was completed successfully</p>
              <div className="text-center">
                <button
                  className="download-receipt"
                  onClick={() => navigate("/")}
                >
                  BACK TO HOME
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
