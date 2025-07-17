import React, { useEffect, useState } from "react";
import './Shoppage.css';
import CollectionBoxCard from "../Home/collection-card/CollectionBoxCard";
import { productData } from "../../../Data";
import { useLocation } from "react-router-dom";

const ShopPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const location = useLocation();

  useEffect(() => {
    const searchResults = JSON.parse(localStorage.getItem("searchResults"));
    const searchQuery = localStorage.getItem("searchQuery");

    // Check if this navigation is NOT from search
    if (location.state?.fromSearch && searchResults?.length > 0) {
      setFilteredProducts(searchResults);
    } else {
      // Clear any old search state and show all
      localStorage.removeItem("searchResults");
      localStorage.removeItem("searchQuery");
      setFilteredProducts(productData);
    }
  }, [location]);

  return (
    <div>
      {/* ✅ Banner Section */}
      <section className="banner-main shop-page">
        <div className="container">
          <h2>SHOP PAGE</h2>
          <div className="separator"></div>
        </div>
      </section>

      {/* ✅ Product Grid */}
      <section className="collection-One" id="ShopPages-view">
        <div className="container">
          <div className="collection-box">
            <div className="row">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <CollectionBoxCard key={index} {...product} />
                ))
              ) : (
                <div className="text-center">No products found.</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
