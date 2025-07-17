import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "./InstaFeed.css";

const InstagramFeed = () => {
  useEffect(() => {
    new Swiper(".insta-swiper", {
      slidesPerView: 5,
      spaceBetween: 15,
      freeMode: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: { slidesPerView: 2.2 },
        480: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      },
    });
  }, []);

  const images = [
    "instafeed1.png",
    "instafeed2.png",
    "instafeed3.png",
    "instafeed4.png",
    "instafeed5.png",
    "instafeed1.png"
  ];

  return (
    <section className="instagram-feed">
      <div className="container">
        <div className="text-center">
          <div className="header-topText">
            Follow us Instagram <span className="d-inline-block">@The_Clothes_Factory</span>
          </div>
          <div className="header-btnText">#follow on social media</div>
        </div>
      </div>

      <section className="insta-slider-section">
        <div className="swiper insta-swiper">
          <div className="swiper-wrapper">
            {images.map((img, index) => (
              <div className="swiper-slide" key={index}>
                <div className="image-wrapper">
                  <img src={`/images/${img}`} alt={`Feed${index + 1}`} />
                  <a
                    href="https://instagram.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-icon"
                    aria-label="Instagram Link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2a1 1 0 110 2 1 1 0 010-2zm-4.25 1.25a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>
    </section>
  );
};

export default InstagramFeed;