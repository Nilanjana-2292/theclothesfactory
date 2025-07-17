import React, { useEffect, useRef, useState } from 'react';
import '../src/styles/common.css'; 
import '../src/styles/common-resonsive.css'; 

const Header = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const searchBoxWrapperRef = useRef(null);
  const searchBoxRef = useRef(null);
  const bannerRef = useRef(null);
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const searchIconRef = useRef(null); // NEW

  // Handle Search Toggle
  useEffect(() => {
    const handleSearchToggle = () => {
      const wrapper = searchBoxWrapperRef.current;
      const input = searchBoxRef.current;
      if (wrapper) {
        wrapper.classList.toggle('d-none');
        if (!wrapper.classList.contains('d-none') && input) {
          input.focus();
        }
      }
    };

    const icon = searchIconRef.current;
    icon?.addEventListener('click', handleSearchToggle);

    return () => {
      icon?.removeEventListener('click', handleSearchToggle);
    };
  }, []);

  // Banner margin update
  const updateBannerMargin = () => {
    const header = headerRef.current;
    const banner = bannerRef.current;
    const mobileNav = navRef.current;

    if (!header || !banner) return;

    const headerHeight = header.offsetHeight;
    let mobileNavHeight = 0;

    if (mobileNav && mobileNav.classList.contains('active')) {
      mobileNavHeight = mobileNav.getBoundingClientRect().height;
    }

    const maxMargin = window.innerWidth < 767 ? 332 : 312;
    const marginTop = Math.min(headerHeight + mobileNavHeight, maxMargin);
    banner.style.marginTop = `${marginTop}px`;
  };

  useEffect(() => {
    updateBannerMargin();
    window.addEventListener('resize', updateBannerMargin);
    return () => {
      window.removeEventListener('resize', updateBannerMargin);
    };
  }, [mobileNavVisible]);

  return (
    <header className="py-3" ref={headerRef}>
      <div className="container">
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-12 col-lg-3 col-md-12 order-1">
            <div className="logo">
              <img src="/images/logo.png" className="img-fluid" alt="Logo" />
            </div>
          </div>

          {/* Icons */}
          <div className="col-12 col-lg-3 col-md-12 order-2 order-lg-3">
            <div className="site-icon d-flex justify-content-lg-end justify-content-md-end align-items-center gap-2">
              <div
                ref={searchBoxWrapperRef}
                className="search-box-wrapper d-none me-2"
              >
                <input
                  ref={searchBoxRef}
                  type="text"
                  placeholder="Search..."
                  className="form-control form-control-sm"
                />
              </div>
              <ul className="d-flex align-items-center mb-0">
                <li>
                  <img
                    ref={searchIconRef}
                    src="/images/search.png"
                    alt="Search"
                    width="30"
                    height="30"
                    style={{ cursor: 'pointer' }}
                  />
                </li>
                <li>
                  <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      className="wishlist-heart"
                      d="M13.3124 23.4646L12.9374 23.3021C7.04995 20.6896 0.787453 15.5646 0.812453 8.98961C0.824953 5.11461 2.97495 2.00211 6.41245 0.902113C9.04995 0.0521132 11.4624 0.689613 13.3124 2.70211C15.1624 0.689613 17.5749 0.0521132 20.2124 0.902113C23.6499 2.01461 25.7999 5.11461 25.8124 9.00211C25.8499 15.5646 19.5749 20.6896 13.6874 23.3021L13.3124 23.4646ZM8.62495 2.40211C8.09995 2.40211 7.56245 2.48961 6.98745 2.67711C3.82495 3.68961 2.68745 6.61461 2.68745 9.00211C2.66245 14.5271 8.31245 19.0896 13.3124 21.4021C18.3124 19.0896 23.9624 14.5271 23.9374 9.00211C23.9374 6.61461 22.7874 3.70211 19.6374 2.67711C17.3999 1.95211 15.5374 2.65211 14.0874 4.72711L13.3124 5.82711L12.5374 4.72711C11.4624 3.17711 10.15 2.38961 8.62495 2.38961V2.40211Z"
                      fill="white"
                    />
                  </svg>
                </li>
                <li className="cart-icon-wrapper position-relative">
                  <img src="/images/cart.png" alt="Cart" width="30" height="30" />
                  <span className="cart-count-badge">1</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="d-none d-lg-block col-lg-6 col-md-6 order-lg-2 text-center">
            <nav className="site-nav">
              <ul className="mb-0">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Cart</a></li>
                <li><a href="#">Checkout</a></li>
                <li><a href="#">Shop</a></li>
              </ul>
            </nav>
          </div>

          {/* Mobile Toggle */}
          <div className="col-12 d-block d-lg-none order-3 mt-3">
            <button className="btn w-100">☰ Menu</button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={navRef}
          className="site-nav-mobile d-none text-center bg-light py-3 d-lg-none collapse-menu"
        >
          <ul className="mb-0 list-unstyled">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Checkout</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
