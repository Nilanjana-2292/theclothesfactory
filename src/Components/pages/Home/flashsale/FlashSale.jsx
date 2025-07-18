import React, { useState } from "react";
import "./FlashSale.css";


const Coupon = () => {
    const couponCode = "BOGOFREE";
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(couponCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="coupon">
            <div className="container">
                <div
                    className="d-lg-flex align-items-center justify-content-center"
                    style={{ paddingBottom: "16px" }}
                >
                    <div className="header-topText pb-0">Flash Sale!</div>
                    <div className="header-btnText">
                        Loved products, rewarding with coupons.
                    </div>
                </div>
            </div>
            <div className="coupon-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-12 mx-auto">
                            <div className="coupon-box">
                                <div className="coupon-left">
                                    <h2>BUY ONE GET ONE FREE</h2>
                                    <button onClick={handleCopy}>CLIP THE COUPON</button>
                                    {copied && <span className="copied-text">Coupon copied!</span>}
                                </div>
                                <div className="coupon-right">
                                    <img
                                        src="/images/CouponSale.png"
                                        alt="Model"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};
export default Coupon;
