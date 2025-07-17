import React from "react";
import { Link } from "react-router-dom";
import "../simple-background-quote/Simplebackground.css";

const SimpleBackgroundQuote = () => {
  return (
    <section className="simple-background-quote">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-12">
            <div className="simple-background-quote-content">
              <h3>
                Dive into sunshine and style with our stunning summer collection. From breezy fits to bold prints, every
                piece is made to shine. Feel the vibe, own the season—because this summer, your style speaks louder than
                the heat.
              </h3>
              <div className="banner-btn">
                <Link className="btn" to="/shop">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleBackgroundQuote;
