import React, { useEffect } from "react";
import "./SaleBox.css"; 

const SaleBox = () => {
  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    const marquees = document.querySelectorAll(".marquee");
    const toggleBtn = document.querySelector(".toggle");
  }, []);

  const saleItems = Array(11).fill("•  sale");

  return (
    <section className="sale-box-wrapper">
      <div className="sale-box">
        <div className="wrapper">
          {/* Top Marquee */}
          <div className="marquee">
            <div className="marquee__group">
              {saleItems.map((text, index) => (
                <h5 key={index}>{text}</h5>
              ))}
            </div>
            <div className="marquee__group" aria-hidden="true">
              {saleItems.map((text, index) => (
                <h5 key={index}>{text}</h5>
              ))}
            </div>
          </div>

          {/* Product Features */}
          <div className="product-feature">
            <ul>
              <li>BEST SELLER</li>
              <li>NEW ARRIVAL</li>
              <li>GET UP TO 15% OFF</li>
              <li>NEW STYLE</li>
              <li>WON BRANDS</li>
            </ul>
          </div>

          {/* Reverse Marquee */}
          <div className="marquee marquee--reverse">
            <div className="marquee__group">
              {saleItems.map((text, index) => (
                <h5 key={index}>{text}</h5>
              ))}
            </div>
            <div className="marquee__group" aria-hidden="true">
              {saleItems.map((text, index) => (
                <h5 key={index}>{text}</h5>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleBox;
