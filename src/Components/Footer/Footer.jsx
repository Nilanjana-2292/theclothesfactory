import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    {/* Left Side */}
                    <div className="col-lg-7 col-md-6">
                        <div className="left-side">
                            <div className="logo">
                                <Link to="/">
                                    <img src="/images/logo.png" className="img-fluid" alt="Logo" />
                                </Link>
                            </div>

                            <div className="footer-nav">
                                <h3>Navigation</h3>
                                <ul>
                                    
                                    <li><Link to="/cart-detail">Cart</Link></li>
                                    <li><Link to="/checkout">Checkout</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                </ul>
                            </div>

                            <div className="footer-nav social">
                                <h3>Social</h3>
                                <ul>
                                    <li>
                                        <img
                                            src="/images/facebook.png"
                                            srcSet="/images/facebook@2x.png 2x, /images/facebook@3x.png 3x"
                                            alt="facebook icon"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="/images/instagram.png"
                                            srcSet="/images/instagram@2x.png 2x, /images/instagram@3x.png 3x"
                                            alt="instagram icon"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-lg-5 col-md-6">
                        <div className="right-side">
                            <h3>Join The Clothes Factory</h3>
                            <p>Exclusive offers, a heads up on new things,</p>
                            <form className="email-form">
                                <div className="input-wrapper">
                                    <input type="email" id="emails" name="emails" placeholder="E-mail" />
                                    <button type="submit" className="arrow-button">
                                        <svg
                                            width="24"
                                            height="25"
                                            viewBox="0 0 24 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect y="0.580078" width="24" height="24" rx="12" fill="white" fillOpacity="0.1" />
                                            <path
                                                d="M10.25 15.5801L13.25 12.5801L10.25 9.58008"
                                                stroke="white"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()}, The Clothes Factory. All Rights Reserved.</p>
                    <p>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal">Terms & Conditions</a> |{" "}
                        <a href="#" data-bs-toggle="modal" data-bs-target="#privacyModal">Privacy Policy</a> |{" "}
                        <a href="#" data-bs-toggle="modal" data-bs-target="#contactModal">Contact Us</a>
                    </p>

                    {/* Modals */}

                    {["terms", "privacy", "contact"].map((type) => (
                        <div
                            key={type}
                            className="modal fade"
                            id={`${type}Modal`}
                            tabIndex="-1"
                            aria-labelledby={`${type}ModalLabel`}
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id={`${type}ModalLabel`}>
                                            {type === "terms"
                                                ? "Terms & Conditions"
                                                : type === "privacy"
                                                    ? "Privacy Policy"
                                                    : "Contact Us"}
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        />
                                    </div>
                                    <div className="modal-body">
                                        {type === "terms" ? (
                                            <>

                                                <p className="text-dark py-2">Welcome to The Clothes Factory. By using our website or placing an order, you agree to the following:</p>
                                                <h5 className="text-start fw-bold">1.Products &amp; Orders</h5>
                                                <ul>
                                                    <li>
                                                        <p className="text-dark py-2">All products are subject to availability.</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-dark py-2">Custom/bulk orders are final and non-refundable once confirmed.</p>
                                                    </li>
                                                </ul>
                                                <h5 className="text-start fw-bold">2. Payments</h5>
                                                <ul>
                                                    <li>
                                                        <p className="text-dark py-2">Prices include taxes; full payment due at checkout unless stated.
                                                        </p>
                                                    </li>

                                                </ul>
                                                <h5 className="text-start fw-bold">3. Shipping</h5>
                                                <ul>
                                                    <li>
                                                        <p className="text-dark py-2">Orders ship as estimated; delays by couriers aren’t our responsibility.</p>
                                                    </li>

                                                </ul>
                                                <h5 className="text-start fw-bold">4. Returns</h5>
                                                <ul>
                                                    <li>
                                                        <p className="text-dark py-2">Returns in 7–30 days; items must remain unused, original condition.
                                                        </p>
                                                    </li>

                                                </ul>
                                                <h5 className="text-start fw-bold">5. <strong>Intellectual Property</strong></h5>
                                                <ul>
                                                    <li>
                                                        <p className="text-dark py-2">All designs, images, and content are owned by [Your Factory Name]. Do not copy or reuse without permission.</p>
                                                    </li>
                                                </ul>

                                                <h5 className="text-start fw-bold">6. <strong>Contact</strong></h5>
                                                <p className="text-dark py-2">📧 Email: <a href="mailto:theclothesfactory@gmail.com" className="text-dark py-2">theclothesfactory@gmail.com</a><br />
                                                    📞 Phone: <a href="tel:987654321" className="text-dark py-2">987654321</a></p>
                                            </>
                                        ) : type === "privacy" ? (
                                            <>
                                                <p className="text-dark py-2">
                                                    At <strong>The Clothes Factory</strong>, your privacy matters. We collect only necessary personal information to process
                                                    your orders—like name, email, address, and payment details (handled securely).
                                                </p>
                                                <p className="text-dark py-2">
                                                    We do not sell your data. Information is only shared with trusted partners like payment gateways and delivery services.
                                                </p>
                                                <p className="text-dark py-2">
                                                    Cookies help improve your experience. You can manage cookie preferences in your browser.
                                                </p>
                                                <p className="text-dark py-2">
                                                    To access or delete your data, please email us at{" "}
                                                    <a href="mailto:theclothesfactory@gmail.com" className="text-dark">theclothesfactory@gmail.com</a>.
                                                </p>
                                            </>
                                        ) : (
                                            <>
                                                <p className="text-dark py-2">We’re here to help! Reach out with any questions, feedback, or order issues.</p>
                                                <p className="text-dark py-2">
                                                    📧 Email:{" "}
                                                    <a href="mailto:theclothesfactory@gmail.com" className="text-dark">theclothesfactory@gmail.com</a><br />
                                                    📞 Phone:{" "}
                                                    <a href="tel:987654321" className="text-dark">987654321</a>
                                                </p>
                                                <p className="text-dark py-2">Business Hours: Monday – Saturday, 10 AM to 7 PM IST</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <p>
                        Product colors may vary slightly due to photographic lighting or screen settings. Sizing information
                        is approximate and may differ by style. We strive to ensure accuracy in all descriptions, but occasional
                        errors may occur. Prices and availability are subject to change without notice. All promotions,
                        discounts, and coupons are subject to specific terms and conditions. By using this site, you agree to
                        our terms of service and privacy policy.
                    </p>
                </div>
            </div>
        </footer>
    );
};



export default Footer;