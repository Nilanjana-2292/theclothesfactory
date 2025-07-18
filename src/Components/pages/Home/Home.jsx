import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
import CollectionOne from "./collection-card/CollectionOne";
import NewArrivalOne from "./new-arrival/NewarrivalOne";
import SimpleBackgroundQuote from "./simple-background-quote/Simplebackground";
import SaleBox from "./sale-box-wrapper/Salebox";
import About from "./about/About";
import Coupon from "./flashsale/FlashSale";
import Instagramfeed from "./instafeed/InstaFeed";

const Home = () => {
  return (
    <>
      {/* Banner Section */}
      <section className="banner banner-main" >
        <div className="container">
          <div>
            <div className="row align-items-center">
              {/* Left Image */}
              <div className="col-lg-6 col-12">
                <div className="left-image">
                  <img
                    src="/images/banner_Small.png"
                    alt="Banner"
                    className="img-fluid"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="col-lg-6 col-12">
                <div className="right-content">
                  <h1>Have It Your Way</h1>
                  <p>
                    Summer’s here, and so is the style you’ve been waiting for!
                    Discover our latest summer collection—light, trendy, and
                    effortlessly cool. From beach vibes to casual chic, we’ve got
                    everything to keep you stylish and comfortable all season long.
                  </p>
                  <div className="banner-btn">
                    <Link className="btn" to="/shop">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <CollectionOne
        title="Our Collection"
        desc={
          <>
            Unveil the future of fashion—{new Date().getFullYear()}’s boldest, freshest styles
            <br />
            are here to steal the spotlight.
          </>
        }
      />


      {/* Quote Section */}
      <SimpleBackgroundQuote />

      {/* Sale Sale Carousel */}
      <SaleBox />

      {/* About*/}
      <About />

      {/* Flashsale */}
      <Coupon />

      {/* New Arrival Section */}
      <NewArrivalOne
        title="New Arrival"
        desc={
          <>
            Step into tomorrow—{new Date().getFullYear()}’s newest styles have arrived to
            <br />
            redefine fashion and ignite your signature summer look.
          </>
        }
      />

      {/* Flashsale */}
      <Instagramfeed />
    </>
  );
};

export default Home;
