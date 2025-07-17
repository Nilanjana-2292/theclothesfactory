import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Navbar.css';
import { productData } from "../../Data";

const Header = () => {
  const navigate = useNavigate();
  const searchBoxWrapperRef = useRef(null);
  const searchBoxRef = useRef(null);
  const bannerRef = useRef(null);
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const navToggleRef = useRef(null);

  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const updateCartCount = () => {
      const stored = JSON.parse(localStorage.getItem("cartItems")) || [];
      const count = stored.reduce((total, item) => total + item.quantity, 0);
      setCartCount(count);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cart-updated", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cart-updated", updateCartCount);
    };
  }, []);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return;

    const filteredProducts = productData.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(query);
      const descMatch = product.description.toLowerCase().includes(query);
      const tagMatch = product.tags?.some(tag =>
        tag.toLowerCase().includes(query)
      );
      return nameMatch || descMatch || tagMatch;
    });

    localStorage.setItem("searchQuery", query);
    localStorage.setItem("searchResults", JSON.stringify(filteredProducts));
    navigate("/shop", { state: { fromSearch: true } });
  };

  useEffect(() => {
    const icon = document.getElementById("searchIcon");
    const wrapper = searchBoxWrapperRef.current;
    const input = searchBoxRef.current;

    const handleSearchToggle = () => {
      if (wrapper) {
        wrapper.classList.toggle("d-none");
        if (!wrapper.classList.contains("d-none") && input) {
          input.focus();
        }
      }
    };

    icon?.addEventListener("click", handleSearchToggle);
    return () => icon?.removeEventListener("click", handleSearchToggle);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    const banner = bannerRef.current;
    const mobileNav = navRef.current;
    const navToggle = navToggleRef.current;

    const updateBannerMargin = () => {
      if (!header || !banner) return;
      const headerHeight = header.offsetHeight;
      let mobileNavHeight = 0;
      if (mobileNav && !mobileNav.classList.contains("d-none")) {
        mobileNavHeight = mobileNav.getBoundingClientRect().height;
      }
      const maxMargin = window.innerWidth < 767 ? 332 : 312;
      const marginTop = Math.min(headerHeight + mobileNavHeight, maxMargin);
      banner.style.marginTop = `${marginTop}px`;
    };

    const toggleMenu = () => {
      if (!mobileNav) return;
      mobileNav.classList.toggle("d-none");
      mobileNav.classList.toggle("active");
      updateBannerMargin();
    };

    navToggle?.addEventListener("click", toggleMenu);
    window.addEventListener("resize", updateBannerMargin);
    updateBannerMargin();

    return () => {
      navToggle?.removeEventListener("click", toggleMenu);
      window.removeEventListener("resize", updateBannerMargin);
    };
  }, []);

  return (
    <>
      <header className="py-3" ref={headerRef}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-3 col-md-12 order-1">
              <div className="logo" onClick={() => navigate("/")}>
                <img src="/images/logo.png" className="img-fluid" alt="Logo" style={{ cursor: "pointer" }} />
              </div>
            </div>

            <div className="col-12 col-lg-3 col-md-12 order-2 order-lg-3">
              <div className="site-icon d-flex justify-content-lg-end justify-content-md-end align-items-center gap-2">
                <div ref={searchBoxWrapperRef} id="searchBoxWrapper" className="search-box-wrapper d-none me-2">
                  <input
                    ref={searchBoxRef}
                    id="searchBox"
                    type="text"
                    placeholder="Search..."
                    className="form-control form-control-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSearch();
                    }}
                  />
                </div>
                <ul className="d-flex align-items-center mb-0">
                  <li>
                    <img
                      id="searchIcon"
                      src="/images/search.png"
                      alt="Search"
                      width="30"
                      height="30"
                      style={{ cursor: "pointer" }}
                    />
                  </li>
                  <li className="cart-icon-wrapper position-relative" onClick={() => navigate("/cart-detail")} style={{ cursor: "pointer" }}>
                    <img src="/images/cart.png" alt="Cart" width="30" height="30" />
                    <span className="cart-count-badge">{cartCount}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="d-none d-lg-block col-lg-6 col-md-6 order-lg-2 text-center">
              <nav className="site-nav">
                <ul className="mb-0">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/cart-detail">Cart</a></li>
                  <li><a href="/checkout">Checkout</a></li>
                  <li><a href="/shop">Shop</a></li>
                </ul>
              </nav>
            </div>

            <div className="col-12 d-block d-lg-none order-3 mt-3">
              <button ref={navToggleRef} className="btn w-100" id="navToggle">☰ Menu</button>
            </div>
          </div>

          <div ref={navRef} className="site-nav-mobile d-none text-center bg-light py-3 d-lg-none collapse-menu">
            <ul className="mb-0 list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/cart-detail">Cart</a></li>
              <li><a href="/checkout">Checkout</a></li>
              <li><a href="/shop">Shop</a></li>
            </ul>
          </div>
        </div>
      </header>

      <div className="banner-main" ref={bannerRef}></div>
    </>
  );
};

export default Header;
