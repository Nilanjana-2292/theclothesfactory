import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about" style={{ scrollMarginTop: "200px" }}>
      <section className="fullwidth-section">
        <div className="container custom-container">
          <div className="row">
            {/* Left 5-column image */}
            <div className="col-12 col-lg-5 p-0">
              <div className="left-image">
                <img
                  src="/images/about-us.png"
                  srcSet="/images/about-us@2x.png 2x, /images/about-us@3x.png 3x"
                  className="img-fluid"
                  alt="About Left"
                />
              </div>
            </div>

            {/* Right 7-column content */}
            <div className="col-12 col-lg-7 p-0">
              <div className="about-desk">
                <div className="right-image">
                  <img
                    src="/images/about-us-R-top1@3x.png"
                    className="img-fluid"
                    alt="About Right"
                  />
                  <div className="right-content">
                    <p>
                      At The Clothes Factory, summer isn’t just a season—it’s a lifestyle.
                      We’re passionate about keeping things cool, comfortable, and effortlessly stylish.
                      That’s why we offer only summer-friendly fashion and essentials, thoughtfully curated
                      for sunshine lovers everywhere.
                    </p>
                    <br />
                    <p>
                      From breathable fabrics and vibrant prints to lightweight accessories and coastal vibes,
                      every product is handpicked to help you live your best summer—every day. Whether you're
                      chasing waves, lounging poolside, or simply soaking up the sun, our collection is designed
                      to keep you fresh, fashionable, and feeling good.
                    </p>
                    <br />
                    <p>
                      Welcome to your ultimate summer store, where it’s always warm, always stylish,
                      and always in season.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile version */}
              <div className="about-sm">
                <div className="right-image">
                  <img
                    src="/images/about-us-R-top1-sm@3x.png"
                    className="img-fluid"
                    alt="About Right Small"
                  />
                  <div className="right-content">
                    <p>
                      At The Clothes Factory, summer isn’t just a season—it’s a lifestyle.
                      We’re passionate about keeping things cool, comfortable, and effortlessly stylish.
                      That’s why we offer only summer-friendly fashion and essentials, thoughtfully curated
                      for sunshine lovers everywhere.
                    </p>
                    <br />
                    <p>
                      From breathable fabrics and vibrant prints to lightweight accessories and coastal vibes,
                      every product is handpicked to help you live your best summer—every day. Whether you're
                      chasing waves, lounging poolside, or simply soaking up the sun, our collection is designed
                      to keep you fresh, fashionable, and feeling good.
                    </p>
                    <br />
                    <p>
                      Welcome to your ultimate summer store, where it’s always warm, always stylish,
                      and always in season.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Right Column */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
