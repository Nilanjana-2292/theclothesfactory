import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './components/pages/Home/Home';
import AboutPage from './components/pages/AboutPage/Aboutpage';
import ProductDetail from './components/pages/ProductDetails/ProductDetail';
import CartDetail from './components/pages/CartDetails/CartDetail';
import CheckoutPage from './components/pages/CheckoutPage/Checkout';
import ShopPage from './Components/pages/ShopPage/shoppage';
import ThankYouPage from "./components/pages/ThankYouPage/Thankyou";

//ScrollToTop on route change
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      <Navbar />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/cart-detail" element={<CartDetail />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
