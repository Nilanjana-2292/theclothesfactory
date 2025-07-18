import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import Instagramfeed from "../Home/instafeed/InstaFeed";
import { productData } from "../../../Data";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData.find((item) => item.id == id);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    if (window.bootstrap) {
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      tooltipTriggerList.forEach((el) => {
        if (el._tooltipInstance) el._tooltipInstance.dispose();
        el._tooltipInstance = new window.bootstrap.Tooltip(el);
      });
    }
  }, []);

  const buynowFn = () => {
    if (selectedSize === "") {
      toast.error("Please select a size");
      return;
    }

    const newItem = {
      id: product.id,
      name: product.name,
      price: product.newPricepoint,
      quantity: 1,
      image: product.maninimage,
      size: selectedSize,
    };

    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingIndex = existingCart.findIndex(
      (item) => item.id === newItem.id && item.size === newItem.size
    );

    if (existingIndex > -1) {
      existingCart[existingIndex].quantity += 1;
    } else {
      existingCart.push(newItem);
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCart));

    // ✅ Notify header to update cart count
    window.dispatchEvent(new Event("cart-updated"));

    navigate("/cart-detail");
  };

  const addcartFn = () => {
    if (selectedSize === "") {
      toast.error("Please select a size");
      return;
    }

    const newItem = {
      id: product.id,
      name: product.name,
      price: product.newPricepoint,
      quantity: 1,
      image: product.maninimage,
      size: selectedSize,
    };

    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingIndex = existingCart.findIndex(
      (item) => item.id === newItem.id && item.size === newItem.size
    );

    if (existingIndex > -1) {
      existingCart[existingIndex].quantity += 1;
    } else {
      existingCart.push(newItem);
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCart));

    // ✅ Notify header to update cart count
    window.dispatchEvent(new Event("cart-updated"));

    toast.success("Item added to cart");
  };

  return (
    <>
      <section className="banner-main product-details-page">
        <div className="container">
          <h2>{product.name}</h2>
          <button className="product-details">
            <a href="#cloth-details">Product details</a>
          </button>
        </div>
      </section>

      <div className="container">
        <div className="separator"></div>
      </div>

      <section id="cloth-details" className="cloth-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="left-content">
                <div className="text-center mb-4">
                  <img
                    id="cloth-mainImage"
                    src={selectedImage}
                    className="img-fluid"
                    alt="Main Product"
                  />
                </div>
                <div className="thumbnail-images">
                  {product.images.map((img, idx) => (
                    <img
                      key={idx}
                      className={`cloth-thumbnail-img ${selectedImage === img ? "active" : ""}`}
                      src={img}
                      alt={`Thumb ${idx + 1}`}
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="right-content">
                <div className="w-540">
                  <h4>{product.name}</h4>

                  <div className="price-box">
                    <div className="price-box-left">
                      <h5>Rs. <del>{product.oldPricepoint.toFixed(2)}</del></h5>
                      <h6>Rs. {product.newPricepoint.toFixed(2)}</h6>
                    </div>
                    <div className="price-box-right">
                      <h4>{product.sold.toLocaleString()} Sold</h4>
                      <svg width="6" height="7" fill="#E0E0E0">
                        <circle cx="3" cy="3.5" r="3" />
                      </svg>
                      <h3>
                        <svg width="20" height="19" fill="#FFA439">
                          <path d="M9.04894 1.42705C9.3483 0.505741 10.6517 0.50574 10.9511 1.42705L12.4697 6.10081C12.6035 6.51284 12.9875 6.7918 13.4207 6.7918H18.335C19.3037 6.7918 19.7065 8.03141 18.9228 8.60081L14.947 11.4894C14.5966 11.744 14.4499 12.1954 14.5838 12.6074L16.1024 17.2812C16.4017 18.2025 15.3472 18.9686 14.5635 18.3992L10.5878 15.5106C10.2373 15.256 9.7627 15.256 9.41221 15.5106L5.43648 18.3992C4.65276 18.9686 3.59828 18.2025 3.89763 17.2812L5.41623 12.6074C5.55011 12.1954 5.40345 11.744 5.05296 11.4894L1.07722 8.60081C0.293507 8.03141 0.696283 6.7918 1.66501 6.7918H6.57929C7.01252 6.7918 7.39647 6.51284 7.53035 6.10081L9.04894 1.42705Z" />
                        </svg>
                        {product.rating}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="hr"></div>

                <div className="w-540">
                  <div className="description-box">
                    <h4>Description:</h4>
                    <p>{product.description}</p>
                    <h5>
                      <span>Color:</span> <a href="#">{product.color}</a>
                    </h5>
                  </div>

                  <div className="size-box">
                    <div className="size-box-inner">
                      <h5>
                        <span>Size:</span> 
                        <a href="#"> {selectedSize ? selectedSize : "Please select"}</a>
                      </h5>
                      <h6>View Size Chart</h6>
                    </div>
                    <ul className="size-box-sizes">
                      {product.sizes.map((size) => (
                        <li key={size}>
                          <a
                            className={`btn ${selectedSize === size ? "active" : ""}`}
                            onClick={() => setSelectedSize(size)}
                          >
                            {size}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="deliverytc">
                    <p className="mb-0">
                      Delivery{" "}
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        title="Delivery within 10–12 working days (T&C apply). Timeline may vary by location. Orders placed before 2 PM ship the same day. Enjoy free delivery on orders above ₹1999."
                      >
                        T&C
                      </a>
                    </p>
                  </div>

                  <div className="return">
                    <h4>Return</h4>
                    <p>
                      You have <b>30 days</b> to return the item(s):
                    </p>
                    <ul>
                      <li>Free store return</li>
                      <li>Free returns via USPS Dropoff Service</li>
                    </ul>
                  </div>

                  <div className="product-buy">
                    <div className="cart-buy-btn">
                      <div className="buy-btn">
                        <span className="btn" onClick={buynowFn}>BUY NOW</span>
                      </div>
                      <div className="cart-btn">
                        <span className="btn" onClick={addcartFn}>ADD TO CART</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Instagramfeed />
    </>
  );
};

export default ProductDetail;
