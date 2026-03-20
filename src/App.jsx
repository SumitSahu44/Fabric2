import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import FloatingActions from './components/Common/FloatingActions';

// Page Components
import Home from './pages/Home';
import Products from './pages/Products';
import BusinessPortal from './pages/BusinessPortal'; // Form, Enquiry, Appointment yahan hai
import Auction from './pages/Auction';           // e-Auction aur Tenders yahan hai
import Career from './pages/Career';
import MediaGallery from './pages/MediaGallery';
import Contact from './pages/Contact';
import About from './pages/About';
// CSS Import
import './index.css';

// --- Scroll to Top Logic ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- 404 Page (Not Found) ---
const NotFound = () => (
  <div className="pt-60 pb-40 text-center min-h-screen bg-textile-cream">
    <h1 className="text-9xl font-black text-textile-gold opacity-20">404</h1>
    <p className="text-xs font-bold uppercase tracking-[0.5em] text-textile-dark -mt-10">Page Not Found</p>
    <Link to="/" className="inline-block mt-10 border-b-2 border-textile-dark pb-1 text-[10px] font-black uppercase tracking-widest hover:text-textile-gold hover:border-textile-gold transition-all no-underline">Back to Home</Link>
  </div>
);

// --- About Page Placeholder (Agar alag file nahi banayi hai to) --
function App() {
  return (
    <Router>
      {/* Yahan 'selection:text-textile-dark' add kiya hai taaki 
          Gold background par Black text saaf dikhe jab aap select karo.
      */}
      <div className="App selection:bg-[#C5A059] selection:text-[#1A1816]">
        <ScrollToTop />
        
        <Navbar />
        
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portal" element={<BusinessPortal />} />
            <Route path="/products" element={<Products />} />
            <Route path="/tenders" element={<Auction />} />
            <Route path="/media" element={<MediaGallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}

export default App;