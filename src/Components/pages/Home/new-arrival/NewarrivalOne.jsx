import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NewarrivalList from "../new-arrival/NewarrivalList";
import "./NewarrivalOne.css";

const NewarrivalOne = ({ title, desc }) => {
  useEffect(() => {
    const setupMobileCarousel = () => {
      const row = document.querySelector(".newarrival-One .collection-box .row");

      if (!row || window.innerWidth >= 1024) return;

      const existingWrapper = row.querySelector(".mobile-carousel-wrapper");
      if (existingWrapper) return;

      const items = [...row.children].filter((el) =>
        el.classList.contains("col-lg-4")
      ).slice(0, 3);

      if (items.length === 0) return;

      const wrapper = document.createElement("div");
      wrapper.className = "mobile-carousel-wrapper";

      items.forEach((item) => wrapper.appendChild(item));
      row.prepend(wrapper);
    };

    // Delay to ensure DOM is rendered after React mount
    const timeoutId = setTimeout(setupMobileCarousel, 100); // 100ms delay

    // Drag-scroll behavior
    const setupCarouselScroll = () => {
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
    };

    // Run scroll setup with slight delay after carousel setup
    const scrollTimeoutId = setTimeout(setupCarouselScroll, 200);

    // Cleanup timeouts when unmounting
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(scrollTimeoutId);
    };
  }, []);

  return (
    <section className="newarrival-One">
      <div className="container">
        <div className="text-center">
          <div className="header-topText">{title}</div>
          <div className="header-btnText">{desc}</div>
        </div>

        <div className="collection-box">
          {/* Product list */}
          <NewarrivalList />

          {/* View All Button */}
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

export default NewarrivalOne;
