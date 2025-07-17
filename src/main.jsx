import React from 'react';
import ReactDOM from 'react-dom/client';
// boostrap
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// fonts
// import '../public/fonts/stylesheet.css';
import App from './App.jsx';

// toasty
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer
        position="top-right"      // position of toasts
        autoClose={3000}          // 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"             // or "dark", "colored"
      />
  </React.StrictMode>
);
