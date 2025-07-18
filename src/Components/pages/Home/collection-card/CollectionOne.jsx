import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CollectionList from "../collection-card/CollectionList";
import "./CollectionOne.css";

const CollectionOne = ({ title, desc }) => {
  useEffect(() => {
    // Create mobile carousel w
    if (window.innerWidth < 1024) {
      const row = document.querySelector(".collection-box > .row");

      if (row) {
        const existingWrapper = row.querySelector(".mobile-carousel-wrapper");
        if (existingWrapper) return; // prevent duplicate

        const items = [...row.children].filter((el) =>
          el.classList.contains("col-lg-4")
        ).slice(0, 3);

        const wrapper = document.createElement("div");
        wrapper.className = "mobile-carousel-wrapper";

        items.forEach((item) => wrapper.appendChild(item));
        row.prepend(wrapper);
      }
    }

    // Scroll behavior for mobile carousel
    const carousels = document.querySelectorAll(
      ".mobile-carousel-wrapper, .row"
    );

    carousels.forEach((carousel) => {
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;

      const start = (e) => {
        isDown = true;
        startX = (e.pageX || e.touches[0].pageX) - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
      };

      const move = (e) => {
        if (!isDown) return;
        const x = (e.pageX || e.touches[0].pageX) - carousel.offsetLeft;
        carousel.scrollLeft = scrollLeft - (x - startX) * 1.5;
      };

      const end = () => (isDown = false);

      carousel.addEventListener("mousedown", start);
      carousel.addEventListener("touchstart", start);
      carousel.addEventListener("mousemove", move);
      carousel.addEventListener("touchmove", move);
      carousel.addEventListener("mouseup", end);
      carousel.addEventListener("mouseleave", end);
      carousel.addEventListener("touchend", end);
    });
  }, []);

  return (
    <section className="collection-One">
      <div className="container">
        <div className="text-center">
          <div className="header-topText"> {title}</div>
          <div className="header-btnText">
            {desc}
          </div>

        </div>

        <div className="collection-box">

          {/* Product list */}
          <CollectionList />

    


          <div className="view-all-btn">
            <Link className="btn" to="/shop">
              View All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionOne;
